# Portfolio Website

A responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed for deployment on Azure Static Web Apps.

## Features

- Built with Next.js 16 and React 19
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design for all devices
- Smooth scroll navigation
- Dynamic project and skills sections
- Contact form with client-side validation
- Mobile-friendly hamburger menu

## Project Structure

```
portfolio-site/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   └── components/
│       ├── Navbar.tsx        # Navigation component
│       ├── Hero.tsx          # Hero section
│       ├── About.tsx         # About section
│       ├── Projects.tsx      # Projects section
│       ├── Skills.tsx        # Skills section
│       ├── Contact.tsx       # Contact form
│       └── Footer.tsx        # Footer component
├── public/                   # Static assets
├── staticwebapp.config.json  # Azure Static Web Apps config
├── next.config.ts            # Next.js configuration
└── package.json              # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Azure Static Web Apps Deployment

This site is configured for Azure Static Web Apps deployment. The `staticwebapp.config.json` file includes:

- Navigation fallback for SPA routing
- Cache headers for static assets
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)

### Build Settings for Azure

- **App location**: `/`
- **Output location**: `.next`
- **API location**: (leave empty)

## Customization

- Edit components in `src/components/` to update content
- Modify `src/app/globals.css` for global styles
- Update `src/app/layout.tsx` for metadata

## License

MIT License
