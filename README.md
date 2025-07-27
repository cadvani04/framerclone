# Framer Clone

A complete, responsive clone of the Framer website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Pixel-perfect recreation of Framer's website design
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Components**: Dropdown menus, hover effects, and interactive elements
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd framerclone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
framerclone/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features showcase
│   ├── Showcase.tsx         # Demo and testimonials
│   └── Footer.tsx           # Footer component
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Components

### Header
- Responsive navigation with dropdown menus
- Mobile hamburger menu
- Call-to-action buttons
- Smooth animations

### Hero
- Large hero section with gradient text
- Animated background elements
- Call-to-action buttons
- Social proof section

### Features
- Grid layout showcasing key features
- Animated cards with hover effects
- Statistics section
- Icon integration

### Showcase
- Interactive demo placeholder
- Customer testimonials
- Call-to-action section
- Video player simulation

### Footer
- Multi-column layout
- Social media links
- Company information
- Legal links

## Styling

The project uses Tailwind CSS with custom configurations:

- **Custom Colors**: Primary blue gradient and gray scale
- **Custom Animations**: Fade-in, slide-up, and scale animations
- **Custom Components**: Button styles, gradient text, glass effects
- **Responsive Design**: Mobile-first approach

## Animations

All animations are powered by Framer Motion:

- **Page Load**: Staggered fade-in animations
- **Scroll Animations**: Elements animate when they come into view
- **Hover Effects**: Interactive hover states
- **Micro-interactions**: Small animations for better UX

## Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... other shades
  }
}
```

### Animations
Add custom animations in `tailwind.config.js`:

```javascript
animation: {
  'custom-animation': 'customKeyframes 0.5s ease-out',
}
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for educational purposes only. The design and branding belong to Framer.

## Acknowledgments

- Design inspiration from [Framer](https://framer.com)
- Icons from [Lucide](https://lucide.dev)
- Animation library [Framer Motion](https://www.framer.com/motion/) # framerclone
