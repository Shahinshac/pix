// Serverless endpoint to forward contact form submissions to Discord and/or Telegram.
// Preferred: set one or both of these environment variables in Vercel:
// - DISCORD_WEBHOOK_URL (Discord incoming webhook)
// - TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID (Telegram bot)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, service, message } = req.body || {};
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });

    const discordWebhook = process.env.DISCORD_WEBHOOK_URL;
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!discordWebhook && !(telegramToken && telegramChatId)) {
      console.error('No notification integrations configured');
      return res.status(500).json({ error: 'No notification integrations configured' });
    }

    const delivered = [];

    // Build common content
    const shortMsg = `New contact request from ${name} (${email})\nService: ${service || '—'}\n\n${message}`;

    // Send to Discord if configured
    if (discordWebhook) {
      try {
        const payload = {
          content: null,
          embeds: [
            {
              title: 'New Contact Request',
              color: 5814783,
              fields: [
                { name: 'Name', value: name, inline: true },
                { name: 'Email', value: email, inline: true },
                { name: 'Service', value: service || '—', inline: false },
                { name: 'Message', value: message.slice(0, 1024), inline: false },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        };

        const resp = await fetch(discordWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (resp.ok) delivered.push('discord');
        else {
          const text = await resp.text();
          console.error('Discord webhook error', resp.status, text);
        }
      } catch (err) {
        console.error('Discord send failed', err);
      }
    }

    // Send to Telegram if configured
    if (telegramToken && telegramChatId) {
      try {
        const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
        // Telegram supports markdown; keep plain text for simplicity
        const body = {
          chat_id: telegramChatId,
          text: shortMsg.slice(0, 4000),
        };

        const resp = await fetch(telegramUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        if (resp.ok) delivered.push('telegram');
        else {
          const text = await resp.text();
          console.error('Telegram error', resp.status, text);
        }
      } catch (err) {
        console.error('Telegram send failed', err);
      }
    }

    if (delivered.length === 0) return res.status(502).json({ error: 'Failed to deliver notification' });
    return res.status(200).json({ ok: true, delivered });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
