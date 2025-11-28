# Portfolio Site

A professional dark-themed resume/portfolio website built with Next.js and classic CSS.

## Features

- 🌙 Dark theme design
- 📱 Fully responsive layout
- ⚡ Fast static site generation
- 🎨 Classic CSS styling (no CSS frameworks)
- 🚀 Deployed on Azure Static Web Apps

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Classic CSS with CSS variables
- **Deployment:** Azure Static Web Apps

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

The static site will be generated in the `out` directory.

## Project Structure

```
├── app/
│   ├── globals.css    # Dark theme styles
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Resume page
│   └── favicon.ico    # Site icon
├── public/            # Static assets
├── next.config.ts     # Next.js configuration
├── package.json       # Dependencies
└── tsconfig.json      # TypeScript configuration
```

## Customization

Edit `app/page.tsx` to update the resume content with your information.
Edit `app/globals.css` to customize the dark theme colors using CSS variables.
