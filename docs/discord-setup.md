# Discord webhook setup for PixelVerse

This document explains how to create a Discord webhook and wire it into the `pix` project so contact form submissions notify your Discord channel.

1) Create a webhook in Discord
- Open your Discord server and go to the channel where you want notifications.
- Click the channel name → **Integrations** → **Webhooks** → **New Webhook**.
- Give it a name (e.g., "PixelVerse Contact") and optionally set an avatar.
- Click **Copy Webhook URL** — you will need this value.

2) Add the webhook to Vercel (recommended)
- Open your project in Vercel.
- Go to **Settings → Environment Variables**.
- Add a new variable:
  - Key: `DISCORD_WEBHOOK_URL`
  - Value: (paste the webhook URL you copied from Discord)
  - Environment: `Production` (and `Preview` if you also want previews to notify)
- Save the variable and redeploy if your project is already deployed.

3) Optional: local testing
- To test locally, set the environment variable and run the dev server. On PowerShell:
```
$env:DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/...."
npm run dev
```
- Then open the app and submit the contact form.

4) Test the API directly (curl)
- If your dev server is running at `http://localhost:5173`, run:
```
curl -X POST http://localhost:5173/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","service":"Portfolio","message":"Hello from curl"}'
```
- For production, replace the URL with your deployed site.

5) Troubleshooting
- If you see a 500 error: ensure `DISCORD_WEBHOOK_URL` is set in Vercel.
- If Discord shows an error, confirm the webhook URL is correct and the webhook wasn't deleted.
- Check Vercel function logs for errors: Project → Functions → select `/api/contact` → Logs.

6) Alternatives
- You can also configure Telegram by setting `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` as environment variables — the API will try Telegram if Discord is not configured or in addition.

If you want, I can create the webhook for you if you provide a server+channel where you have permissions (or I can walk you through screen-by-screen).
