# FX777 - Premium Trading Platform

A modern, responsive trading platform built with React, TypeScript, Tailwind CSS, and GSAP animations.

## 🚀 Features

- **Modern UI/UX**: Clean and minimalist design with a professional green and dark color scheme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **GSAP Animations**: Smooth scroll-triggered animations throughout the page
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Modular React components for easy maintenance

## 📦 Tech Stack

- React 18.2
- TypeScript 5.2
- Tailwind CSS 3.4
- GSAP 3.12 (with ScrollTrigger)
- Vite 5.1
- Lucide React (for icons)

## 🛠️ Installation

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

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
Trading/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with mobile menu
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── Features.tsx        # Features grid section
│   │   ├── WhyChooseUs.tsx     # Why choose us section
│   │   ├── TradingPartners.tsx # Partners and stats section
│   │   ├── Testimonials.tsx    # Customer testimonials
│   │   ├── FAQ.tsx             # FAQ accordion
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer with links
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Sections

1. **Hero Section**: Eye-catching hero with stats and CTA buttons
2. **Features Section**: 9 key features in a responsive grid
3. **Why Choose Us**: 5 compelling reasons with image placeholder
4. **Trading Partners**: Stats and partner logos
5. **Testimonials**: Customer reviews with ratings
6. **FAQ**: Expandable accordion with common questions
7. **Contact**: Contact information and form
8. **Footer**: Links and company information

## 🖼️ Image Placeholders

All sections include placeholder areas for images with recommended dimensions:
- Hero Image: 800x600px
- Why Choose Us: 600x800px
- All placeholders show emoji icons and size recommendations

## 🎨 Color Scheme

- **Primary Green**: #22C55E (and shades)
- **Dark**: #111827 to #F9FAFB (grayscale)
- **Accent Colors**: Used for feature cards

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Optimized GSAP animations
- Lazy loading ready
- Production build optimized with Vite

## 🔧 Customization

1. **Colors**: Edit `tailwind.config.js` to change the color scheme
2. **Content**: Update text in component files
3. **Images**: Replace placeholder divs with actual images
4. **Animations**: Modify GSAP settings in component useEffect hooks

## 📝 Notes

- All lint errors shown are expected until dependencies are installed
- Run `npm install` to resolve all module errors
- The design is inspired by modern fintech landing pages
- Backend integration points are ready in the Contact form

## 🚀 Next Steps

1. Install dependencies: `npm install`
2. Replace image placeholders with actual images
3. Update content and copy
4. Add backend API integration for contact form
5. Add analytics tracking
6. Deploy to production

## 📄 License

This project is for demonstration purposes.
