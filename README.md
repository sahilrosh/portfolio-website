# Portfolio Project

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Project Structure

This project follows the shadcn/ui structure:
- **Components**: `/components/ui` - Reusable UI components (shadcn/ui standard location)
- **Styles**: `/app/globals.css` - Global Tailwind CSS styles
- **Configuration**: `components.json` - shadcn/ui configuration

## Why `/components/ui` is Important

The `/components/ui` folder is the standard location for shadcn/ui components. This structure:
- Maintains consistency with shadcn/ui conventions
- Makes it easy to add more shadcn components using `npx shadcn-ui@latest add [component]`
- Keeps UI components organized and separate from page-specific components
- Follows the path aliases configured in `components.json` (`"ui": "@/components/ui"`)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- lucide-react (for icons)

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Adding More shadcn/ui Components

To add more shadcn/ui components in the future:

```bash
npx shadcn-ui@latest add [component-name]
```

For example:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

## Project Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS with dark mode support
- ✅ shadcn/ui configuration
- ✅ Portfolio Hero component with:
  - Animated blur text effects
  - Dark/light theme toggle
  - Responsive navigation menu
  - Profile image integration

## Component Location

The main portfolio hero component is located at:
- `/components/ui/portfolio-hero.tsx`

The demo page that uses this component:
- `/components/demo.tsx`
- `/app/page.tsx` (main page)

## Email Setup (Contact Form)

The contact form sends emails using Resend. To enable email functionality:

1. **Get a Resend API Key**:
   - Sign up at [https://resend.com](https://resend.com)
   - Go to API Keys section and create a new API key
   - Copy your API key

2. **Create `.env.local` file** in the root directory:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   RESEND_FROM_EMAIL=Portfolio Contact <your-verified-email@yourdomain.com>
   ```

3. **Verify your domain** (optional but recommended):
   - In Resend dashboard, add and verify your domain
   - Update `RESEND_FROM_EMAIL` with your verified email address
   - For testing, you can use `onboarding@resend.dev` (default)

4. **Restart your development server** after adding the environment variables

The contact form sends submissions to `sahil8055roshan@gmail.com`. The visitor's email address is set as Reply-To so you can respond directly. Configure `RESEND_API_KEY` and a verified `RESEND_FROM_EMAIL` for the API route to send messages.

## Customization

- **Name**: Change "ABHI NAIR" in `/components/ui/portfolio-hero.tsx`
- **Profile Image**: Update the `src` attribute in the profile picture `img` tag
- **Menu Items**: Modify the `menuItems` array in the component
- **Colors**: The accent color `#C3E41D` can be changed throughout the component

