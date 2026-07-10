// Simple serverless endpoint to forward contact form submissions to a Discord webhook
// Set DISCORD_WEBHOOK_URL in your Vercel environment variables.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, service, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const webhook = process.env.DISCORD_WEBHOOK_URL;
    if (!webhook) {
      console.error('DISCORD_WEBHOOK_URL is not set');
      return res.status(500).json({ error: 'Notification destination not configured' });
    }

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

    const resp = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error('Discord webhook error', resp.status, text);
      return res.status(502).json({ error: 'Failed to deliver notification' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
