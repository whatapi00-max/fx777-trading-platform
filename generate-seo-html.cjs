const fs = require('fs');
const path = require('path');

const routes = [
  {
    path: '/',
    title: 'FX777 - Premium Trading Platform | Trade Forex, Stocks, Commodities',
    description: 'FX777 - Premium global trading platform. Trade forex, stocks, commodities, and cryptocurrencies with advanced tools, 500X margin, and competitive pricing.',
    keywords: 'trading platform, forex trading, stock trading, commodity trading, crypto trading',
    ogTitle: 'FX777 - Premium Trading Platform',
    ogDescription: 'Trade forex, stocks, commodities, and cryptocurrencies with advanced tools and 500X margin.',
    ogImage: 'https://www.fx777.in/logo.png',
    ogType: 'website',
    canonical: 'https://www.fx777.in/',
  },
  {
    path: '/markets/nse',
    title: 'NSE Trading | Trade Stocks & Futures | FX777',
    description: 'Trade NSE stocks and futures with zero brokerage, up to 500X leverage, and advanced trading tools on FX777.',
    keywords: 'NSE trading, stock trading, futures trading, equity trading, Indian stocks',
    ogTitle: 'NSE Trading - Trade Stocks & Futures',
    ogDescription: 'Trade NSE stocks and futures with zero brokerage and up to 500X leverage.',
    ogImage: 'https://www.fx777.in/logo.png',
    ogType: 'website',
    canonical: 'https://www.fx777.in/markets/nse',
  },
  {
    path: '/markets/commodity',
    title: 'Commodity Trading | Gold, Crude Oil, Silver | FX777',
    description: 'Trade commodities like gold, crude oil, silver, and natural gas with up to 500X leverage on FX777.',
    keywords: 'commodity trading, gold trading, crude oil trading, silver trading, MCX trading',
    ogTitle: 'Commodity Trading - Gold, Crude Oil, Silver',
    ogDescription: 'Trade commodities with up to 500X leverage. Gold, crude oil, silver, and more.',
    ogImage: 'https://www.fx777.in/logo.png',
    ogType: 'website',
    canonical: 'https://www.fx777.in/markets/commodity',
  },
  {
    path: '/markets/forex',
    title: 'Forex Trading | Currency Pairs | FX777',
    description: 'Trade forex currency pairs with tight spreads, up to 200X leverage, and 24/5 market access on FX777.',
    keywords: 'forex trading, currency trading, EUR/USD, GBP/USD, currency pairs',
    ogTitle: 'Forex Trading - Currency Pairs',
    ogDescription: 'Trade forex with tight spreads and up to 200X leverage. 24/5 market access.',
    ogImage: 'https://www.fx777.in/logo.png',
    ogType: 'website',
    canonical: 'https://www.fx777.in/markets/forex',
  },
  {
    path: '/markets/us-stocks',
    title: 'US Stocks Trading | Apple, Tesla, Microsoft | FX777',
    description: 'Trade US stocks and indices with zero brokerage, extended hours, and real-time data on FX777.',
    keywords: 'US stocks trading, Apple stock, Tesla stock, Microsoft stock, US indices',
    ogTitle: 'US Stocks Trading - Apple, Tesla, Microsoft',
    ogDescription: 'Trade US stocks with zero brokerage and extended trading hours.',
    ogImage: 'https://www.fx777.in/logo.png',
    ogType: 'website',
    canonical: 'https://www.fx777.in/markets/us-stocks',
  },
  {
    path: '/markets/crypto',
    title: 'Cryptocurrency Trading | Bitcoin, Ethereum | FX777',
    description: 'Trade cryptocurrencies like Bitcoin, Ethereum, and altcoins 24/7 with up to 500X leverage on FX777.',
    keywords: 'crypto trading, Bitcoin trading, Ethereum trading, cryptocurrency, digital assets',
    ogTitle: 'Cryptocurrency Trading - Bitcoin, Ethereum',
    ogDescription: 'Trade crypto 24/7 with up to 500X leverage. Bitcoin, Ethereum, and more.',
    ogImage: 'https://www.fx777.in/logo.png',
    ogType: 'website',
    canonical: 'https://www.fx777.in/markets/crypto',
  },
  {
    path: '/markets/comex',
    title: 'COMEX Trading | Gold Futures, Silver Futures | FX777',
    description: 'Trade COMEX gold and silver futures with up to 200X leverage and tight spreads on FX777.',
    keywords: 'COMEX trading, gold futures, silver futures, precious metals, futures trading',
    ogTitle: 'COMEX Trading - Gold & Silver Futures',
    ogDescription: 'Trade COMEX gold and silver futures with up to 200X leverage.',
    ogImage: 'https://www.fx777.in/logo.png',
    ogType: 'website',
    canonical: 'https://www.fx777.in/markets/comex',
  },
  {
    path: '/trading/intraday',
    title: 'Intraday Trading | Zero Brokerage | FX777',
    description: 'Master intraday trading with zero brokerage, up to 500X leverage, and advanced tools on FX777.',
    keywords: 'intraday trading, day trading, stock trading, futures trading, zero brokerage',
    ogTitle: 'Intraday Trading - Zero Brokerage',
    ogDescription: 'Intraday trading with zero brokerage and up to 500X leverage.',
    ogImage: 'https://www.fx777.in/logo.png',
    ogType: 'website',
    canonical: 'https://www.fx777.in/trading/intraday',
  },
  {
    path: '/trading/margin',
    title: 'Margin Trading | Up to 500X Leverage | FX777',
    description: 'Amplify your trading power with margin up to 500X. Trade larger positions with less capital on FX777.',
    keywords: 'margin trading, leverage trading, margin account, trading with leverage',
    ogTitle: 'Margin Trading - Up to 500X Leverage',
    ogDescription: 'Margin trading with up to 500X leverage. Amplify your trading power.',
    ogImage: 'https://www.fx777.in/logo.png',
    ogType: 'website',
    canonical: 'https://www.fx777.in/trading/margin',
  },
  {
    path: '/trading/terms',
    title: 'Trading Terms & Conditions | FX777',
    description: 'Review FX777 trading terms, conditions, and trading rules before you start trading.',
    keywords: 'trading terms, terms and conditions, trading rules, trading policy',
    ogTitle: 'Trading Terms & Conditions',
    ogDescription: 'FX777 trading terms, conditions, and rules.',
    ogImage: 'https://www.fx777.in/logo.png',
    ogType: 'website',
    canonical: 'https://www.fx777.in/trading/terms',
  },
];

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function generateMetaTags(metadata) {
  return `    <title>${escapeHtml(metadata.title)}</title>
    <meta name="description" content="${escapeHtml(metadata.description)}" />
    <meta name="keywords" content="${escapeHtml(metadata.keywords)}" />
    <meta property="og:title" content="${escapeHtml(metadata.ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(metadata.ogDescription)}" />
    <meta property="og:image" content="${metadata.ogImage}" />
    <meta property="og:type" content="${metadata.ogType}" />
    <meta property="og:url" content="${metadata.canonical}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(metadata.ogTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(metadata.ogDescription)}" />
    <meta name="twitter:image" content="${metadata.ogImage}" />
    <link rel="canonical" href="${metadata.canonical}" />`;
}

// Read the built index.html
const distPath = path.resolve(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html not found. Please run "npm run build" first.');
  process.exit(1);
}

let indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// Generate route-specific HTML files
routes.forEach(route => {
  let routeHtml = indexHtml;

  // Remove old meta tags and title
  routeHtml = routeHtml.replace(/<title>.*?<\/title>/s, '');
  routeHtml = routeHtml.replace(/<meta name="description".*?\/>/s, '');
  routeHtml = routeHtml.replace(/<meta name="keywords".*?\/>/s, '');
  routeHtml = routeHtml.replace(/<meta property="og:.*?\/>/gs, '');
  routeHtml = routeHtml.replace(/<meta name="twitter:.*?\/>/gs, '');
  routeHtml = routeHtml.replace(/<link rel="canonical".*?\/>/s, '');

  // Insert new meta tags before closing </head>
  const metaTags = generateMetaTags(route);
  routeHtml = routeHtml.replace('</head>', `${metaTags}\n  </head>`);

  // Determine output path
  let outputPath = route.path === '/' ? 'index.html' : `${route.path.slice(1)}/index.html`;
  const fullPath = path.join(distPath, outputPath);

  // Create directory if needed
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write the file
  fs.writeFileSync(fullPath, routeHtml);
  console.log(`Generated: ${outputPath}`);
});

console.log('\nSEO HTML files generated successfully!');
