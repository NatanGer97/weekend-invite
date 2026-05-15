# Weekend Invite

Static Hebrew RTL invite website built with React + TypeScript + Vite + Tailwind CSS.

## Setup

```bash
cd v2
npm install
```

## Development

```bash
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages

1. Make sure your repo has GitHub Pages enabled (Settings → Pages → Source: `gh-pages` branch).

2. Set the base path to match your repo name:

   ```bash
   VITE_BASE_PATH=/your-repo-name/ npm run deploy
   ```

   Example — if your repo is `github.com/you/invite-website`:

   ```bash
   VITE_BASE_PATH=/invite-website/ npm run deploy
   ```

3. The `gh-pages` package will build and push `dist/` to the `gh-pages` branch automatically.

4. Site will be live at `https://your-username.github.io/your-repo-name/`.

## Editing content

All editable text is in [`src/config.ts`](src/config.ts):

```ts
export const config = {
  title: '...',          // Main heading
  subtitle: '...',       // Tagline
  date: '...',           // Date range
  location: '...',       // Location text
  note: '...',           // Small note at the bottom of the card
  ctaButton: '...',      // Approve button text
  approvedText: '...',   // Text shown after approval
  whatsappButtonText: '...', // WhatsApp button label
  whatsappMessage: '...', // Pre-filled WhatsApp message
  whatsappPhone: '972XXXXXXXXX', // Phone number (country code + number, no +)
}
```
