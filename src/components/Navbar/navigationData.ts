import { NavItem } from './types'

export const navigationItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Markets',
    dropdown: [
      {
        name: 'NSE (Futures & Options)',
        href: '/markets/nse',
        description: 'Trade NSE Futures & Options with zero brokerage',
      },
      {
        name: 'Indian Commodity',
        href: '/markets/commodity',
        description: 'MCX commodity trading with high leverage',
      },
      {
        name: 'Forex',
        href: '/markets/forex',
        description: 'Currency trading with competitive spreads',
      },
      {
        name: 'US Stocks & Indices',
        href: '/markets/us-stocks',
        description: 'Access to US markets and major indices',
      },
      {
        name: 'Cryptocurrencies',
        href: '/markets/crypto',
        description: 'Trade popular cryptocurrencies 24/7',
      },
      {
        name: 'COMEX',
        href: '/markets/comex',
        description: 'International commodity exchange trading',
      },
    ],
  },
  {
    name: 'Trading',
    dropdown: [
      {
        name: 'Intraday Trading',
        href: '/trading/intraday',
        description: 'High leverage intraday trading solutions',
      },
      {
        name: 'Margin Trading',
        href: '/trading/margin',
        description: 'Trade with margin up to 500X',
      },
      {
        name: 'Terms & Conditions',
        href: '/trading/terms',
        description: 'Trading terms and conditions',
      },
    ],
  },
  {
    name: 'About',
    dropdown: [
      {
        name: 'Why FX777?',
        href: '/about/why-fx777',
        description: 'Discover what makes us different',
      },
      {
        name: 'Regulations',
        href: '/about/regulations',
        description: 'Our regulatory compliance and licenses',
      },
      {
        name: 'Become an Agent / Affiliate',
        href: '/about/affiliate',
        description: 'Join our affiliate program',
      },
      {
        name: 'Refer a Friend',
        href: '/about/refer',
        description: 'Earn rewards by referring friends',
      },
      {
        name: 'White Label',
        href: '/about/white-label',
        description: 'White label trading platform solutions',
      },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]
