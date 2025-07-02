# Payra CRM

A modern desktop CRM software designed for education recruitment consultants.

## Features

- 🎨 Modern UI with soft gradients and rounded edges
- 📱 Touch and mouse-friendly interface
- 🖥️ Optimized for desktop (1280x800)
- ⚡ Smooth animations with Framer Motion
- 🎯 Three primary actions: Call Schools, Service Clients, Recruit Staff

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vite** for development and building

## Color Palette

- Soft Pink: `#f7c1e3`
- Deep Purple: `#5e3370`
- Lavender: `#c6b0e5`
- Off-white: `#fdf8fc`
- Text: `#2c2c2c`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── TopBar.tsx
│   ├── Sidebar.tsx
│   ├── Dashboard.tsx
│   ├── DashboardCard.tsx
│   └── Footer.tsx
├── index.css
├── main.tsx
└── App.tsx
```

## Desktop Integration

This app is designed to be integrated with Electron for desktop deployment. The interface is optimized for desktop usage with:

- Fixed window dimensions (1280x800)
- Native-like interactions
- Touch and mouse support
- No web-specific elements

---

*Built for education recruitment consultants to streamline their daily workflow.* 