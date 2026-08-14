# Muhammad Ali Portfolio

A modern personal portfolio for Muhammad Ali, an Artificial Intelligence student and developer focused on AI, machine learning, full-stack web development, and automation.

- **Live site:** [portfolio-chatbot-wheat.vercel.app](https://portfolio-chatbot-wheat.vercel.app/)
- **GitHub repository:** [muhammadali50/portfolio-chatbot](https://github.com/muhammadali50/portfolio-chatbot)

## Features

- Responsive personal portfolio for desktop, tablet, and mobile
- Light and dark themes with saved user preference
- Education, skills, projects, certifications, and contact sections
- AI portfolio chatbot connected through a server-side n8n integration
- Basic retrieval/RAG for portfolio-focused answers
- Rate limiting and graceful chatbot fallback handling
- SEO and Open Graph social-sharing metadata
- Server-side contact form delivery through Gmail SMTP

## Technology Stack

- Next.js with the App Router
- JavaScript
- Tailwind CSS
- Lucide React
- Framer Motion
- Nodemailer
- n8n

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/muhammadali50/portfolio-chatbot.git
   cd portfolio-chatbot
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env.local`:

   ```powershell
   Copy-Item .env.example .env.local
   ```

   On macOS or Linux, use `cp .env.example .env.local` instead.

4. Fill in the required private environment variables in `.env.local`.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

- `EMAIL_USER` — Gmail account used by the server-side contact form.
- `EMAIL_APP_PASSWORD` — Gmail App Password used by Nodemailer on the server.
- `N8N_CHAT_WEBHOOK_URL` — Local or production n8n webhook used by the server-side chatbot endpoint.

Keep real values in `.env.local` for local development or in your deployment provider's encrypted environment-variable settings. Never commit credentials or expose these variables through a `NEXT_PUBLIC_` prefix.

## Available Scripts

- `npm run dev` — start the local development server
- `npm run lint` — run ESLint
- `npm run build` — create a production build
- `npm run start` — run the production build locally
