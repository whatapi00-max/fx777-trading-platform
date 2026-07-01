# Quick Reference Guide

## Running the Application

### Development Mode
```bash
npm run dev
```
Server will start at http://localhost:3001 (or next available port)

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## All Routes

### Main Navigation
- `/` - Home page (landing page)
- `/contact` - Contact page

### Markets Dropdown
- `/markets/nse` - NSE (Futures & Options)
- `/markets/commodity` - Indian Commodity
- `/markets/forex` - Forex Trading
- `/markets/us-stocks` - US Stocks & Indices
- `/markets/crypto` - Cryptocurrencies
- `/markets/comex` - COMEX Trading

### Trading Dropdown
- `/trading/intraday` - Intraday Trading
- `/trading/margin` - Margin Trading
- `/trading/terms` - Terms & Conditions

### About Dropdown
- `/about/why-fx777` - Why FX777?
- `/about/regulations` - Regulations & Compliance
- `/about/affiliate` - Become an Agent / Affiliate
- `/about/refer` - Refer a Friend
- `/about/white-label` - White Label Solutions

## Key Components

### Navbar
- **Desktop**: Hover dropdowns, sticky on scroll
- **Mobile**: Slide-in drawer, expandable sections
- **Location**: `src/components/Navbar/index.tsx`

### Page Layout
- **Template**: `src/components/Layout/PageLayout.tsx`
- **Features**: Breadcrumbs, hero section, responsive

### Navigation Config
- **File**: `src/components/Navbar/navigationData.ts`
- **Purpose**: Central navigation configuration

## Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add to navigation in `src/components/Navbar/navigationData.ts`

Example:
```typescript
// 1. Create src/pages/NewPage.tsx
import PageLayout from '../components/Layout/PageLayout'

const NewPage = () => {
  return (
    <PageLayout
      title="New Page"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'New Page' }]}
      description="Page description"
    >
      {/* Content */}
    </PageLayout>
  )
}

export default NewPage

// 2. Add to App.tsx
import NewPage from './pages/NewPage'
// ...
<Route path="/new-page" element={<NewPage />} />

// 3. Add to navigationData.ts
{
  name: 'New Page',
  href: '/new-page',
}
```

## Styling Guidelines

### Colors
- Primary: `bg-primary-500` (#FFC300)
- Dark: `text-dark-900` (#121212)
- Gray: `text-gray-600`

### Common Classes
- Card: `bg-white p-6 rounded-xl border border-gray-200`
- Button Primary: `bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold px-8 py-4 rounded-xl`
- Button Secondary: `bg-white hover:bg-gray-100 text-primary-600 font-bold px-8 py-4 rounded-xl border-2 border-primary-500`

### Responsive Breakpoints
- Mobile: default (320px+)
- Tablet: `sm:` (640px+)
- Desktop: `md:` (768px+)
- Large: `lg:` (1024px+)
- Extra Large: `xl:` (1280px+)

## Keyboard Shortcuts

- **Tab**: Navigate through menu items
- **Escape**: Close dropdown/mobile menu
- **Enter/Space**: Activate menu item

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (latest)

## Troubleshooting

### Port Already in Use
Vite will automatically try the next available port (3001, 3002, etc.)

### Build Errors
```bash
npm run build
```
Check console for specific TypeScript/ESLint errors

### CSS Not Loading
Ensure Tailwind is properly configured in `tailwind.config.js`

### Routes Not Working
Verify route is added in both:
1. `src/App.tsx` (Route component)
2. `src/components/Navbar/navigationData.ts` (navigation config)

## Performance Tips

- Images are loaded from Unsplash (replace with local assets for production)
- GSAP animations are optimized for 60fps
- React Router provides automatic code splitting
- Build output is optimized and minified

## Deployment

The application is ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist/`

## Support

For issues or questions:
1. Check browser console for errors
2. Verify all dependencies are installed: `npm install`
3. Clear cache and rebuild: `rm -rf node_modules dist && npm install && npm run build`
