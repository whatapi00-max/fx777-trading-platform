// Content for About section pages

export interface AboutPageContent {
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
    description: string
  }
  sections: Array<{
    heading: string
    content: string[]
  }>
  features?: Array<{
    title: string
    description: string
  }>
  cta: {
    heading: string
    description: string
  }
}

export const aboutPages: Record<string, AboutPageContent> = {
  whyFX777: {
    seo: {
      title: 'Why Choose FX777 | Zero Brokerage Trading Platform India',
      description: 'Discover why FX777 is India\'s preferred trading platform. Zero brokerage, advanced technology, multiple markets, and 24/7 support. Join 50,000+ traders today!',
    },
    hero: {
      title: 'Why Choose FX777?',
      description: 'Join thousands of traders who trust FX777 for zero brokerage trading, advanced technology, and exceptional support across multiple markets.',
    },
    features: [
      {
        title: 'Zero Brokerage Model',
        description: 'Keep 100% of your profits with our zero brokerage trading on stocks, commodities, and forex',
      },
      {
        title: 'Advanced Technology',
        description: 'Lightning-fast execution, real-time data, and professional-grade charting tools',
      },
      {
        title: 'Multiple Markets',
        description: 'Trade stocks, commodities, forex, crypto, and global markets from one platform',
      },
      {
        title: 'Beginner Friendly',
        description: 'Simple interface, educational resources, and dedicated support for new traders',
      },
      {
        title: '24/7 Support',
        description: 'Round-the-clock customer support via phone, email, and live chat',
      },
      {
        title: 'Transparent Pricing',
        description: 'No hidden charges - what you see is what you pay',
      },
    ],
    sections: [
      {
        heading: 'Our Zero Brokerage Promise',
        content: [
          'At FX777, we believe trading should be accessible and affordable for everyone. That\'s why we offer zero brokerage on most instruments - no commission fees, no percentage cuts, just transparent trading.',
          'Traditional brokers charge 0.03% to 0.05% per trade, which can add up to thousands of rupees monthly for active traders. With FX777, you keep every rupee you earn. This means more money in your pocket and better returns on your investments.',
          'We make money through other revenue streams like interest on margin and premium services, allowing us to offer zero brokerage to all our traders.',
        ],
      },
      {
        heading: 'Technology That Works for You',
        content: [
          'Our trading platform is built with cutting-edge technology to give you the best trading experience. Lightning-fast order execution ensures you never miss an opportunity due to slow systems.',
          'We provide advanced charting tools with 100+ technical indicators, real-time market data, customizable watchlists, and market scanners to help you find trading opportunities.',
          'Trade from anywhere with our mobile app for iOS and Android. Get real-time alerts, place orders, and monitor your portfolio on the go.',
        ],
      },
      {
        heading: 'Customer-First Approach',
        content: [
          'We put our customers first in everything we do. From easy account opening to responsive customer support, we\'re here to help you succeed.',
          'Our dedicated support team is available 24/7 via phone, email, and live chat. Whether you have a technical question or need trading guidance, we\'re just a message away.',
          'We also provide educational resources, webinars, and market analysis to help you become a better trader.',
        ],
      },
    ],
    cta: {
      heading: 'Ready to Experience the FX777 Difference?',
      description: 'Join thousands of satisfied traders and start your zero brokerage trading journey today',
    },
  },

  regulations: {
    seo: {
      title: 'Regulations & Compliance | FX777 Trading Platform',
      description: 'Learn about FX777\'s commitment to regulatory compliance, security, and responsible trading. We prioritize transparency and client protection.',
    },
    hero: {
      title: 'Regulations & Compliance',
      description: 'FX777 is committed to maintaining the highest standards of regulatory compliance, security, and responsible trading practices.',
    },
    sections: [
      {
        heading: 'Our Commitment to Compliance',
        content: [
          'At FX777, we take regulatory compliance seriously. We operate in accordance with all applicable financial regulations and maintain transparent business practices to protect our clients.',
          'Our platform implements industry-standard security measures including data encryption, secure payment gateways, and regular security audits to ensure your funds and personal information are protected.',
          'We maintain segregated client accounts, meaning your trading funds are kept separate from company operational funds, providing an additional layer of protection.',
        ],
      },
      {
        heading: 'Responsible Trading',
        content: [
          'We believe in promoting responsible trading practices. Trading involves significant risk, and we want our clients to be fully informed before they start trading.',
          'Our platform includes risk management tools like stop-loss orders, margin alerts, and position limits to help you trade responsibly. We also provide educational resources to help you understand market risks.',
          'We encourage all traders to only invest money they can afford to lose, start with small positions, and gradually increase their trading size as they gain experience and confidence.',
        ],
      },
      {
        heading: 'Transparency & Disclosure',
        content: [
          'Transparency is core to our business. We clearly disclose all fees, charges, and terms of service upfront - no hidden costs or surprise charges.',
          'Our zero brokerage model is straightforward: we don\'t charge commission on most trades. Any applicable charges (like exchange fees, GST, or STT) are clearly shown before you confirm your trade.',
          'We provide detailed trade confirmations, account statements, and tax reports to help you track your trading activity and comply with tax regulations.',
        ],
      },
      {
        heading: 'Data Protection & Privacy',
        content: [
          'Your privacy matters to us. We implement strict data protection measures and never share your personal information with third parties without your consent.',
          'All data transmission is encrypted using bank-grade 256-bit SSL encryption. We regularly update our security systems to protect against emerging threats.',
          'We comply with data protection regulations and maintain detailed privacy policies that explain how we collect, use, and protect your information.',
        ],
      },
    ],
    cta: {
      heading: 'Trade with Confidence',
      description: 'Experience secure, compliant, and transparent trading with FX777',
    },
  },

  affiliate: {
    seo: {
      title: 'Become an FX777 Affiliate | Earn Commission Referring Traders',
      description: 'Join FX777 affiliate program and earn generous commissions. Refer traders, earn recurring income, get marketing support. Apply now!',
    },
    hero: {
      title: 'Become an Agent / Affiliate',
      description: 'Partner with FX777 and earn generous commissions by referring traders. Unlimited earning potential with our industry-leading affiliate program.',
    },
    features: [
      {
        title: 'Generous Commissions',
        description: 'Earn competitive commissions on every client you refer to FX777',
      },
      {
        title: 'Recurring Income',
        description: 'Earn ongoing commissions as long as your referred clients trade',
      },
      {
        title: 'No Limits',
        description: 'Refer unlimited clients - your earning potential is unlimited',
      },
      {
        title: 'Marketing Support',
        description: 'Get professional marketing materials, banners, and landing pages',
      },
      {
        title: 'Real-Time Tracking',
        description: 'Monitor your referrals and earnings through our affiliate dashboard',
      },
      {
        title: 'Fast Payouts',
        description: 'Receive your commissions promptly every month',
      },
    ],
    sections: [
      {
        heading: 'How the Affiliate Program Works',
        content: [
          'Step 1: Apply to become an FX777 affiliate through our simple online application. We review applications within 24-48 hours.',
          'Step 2: Once approved, you\'ll receive your unique referral link and access to marketing materials including banners, landing pages, and email templates.',
          'Step 3: Share your referral link with your network through social media, websites, blogs, YouTube, or any other channel.',
          'Step 4: When someone signs up using your link and starts trading, you earn commissions on their trading activity.',
          'Step 5: Track your referrals and earnings in real-time through your affiliate dashboard. Commissions are paid monthly directly to your bank account.',
        ],
      },
      {
        heading: 'Who Can Become an Affiliate?',
        content: [
          'Our affiliate program is open to everyone - financial bloggers, YouTubers, social media influencers, trading educators, website owners, and anyone with an audience interested in trading.',
          'You don\'t need to be a trading expert. We provide all the resources and support you need to successfully promote FX777 to your audience.',
          'Whether you have a large following or just starting out, our program is designed to help you succeed and earn commissions.',
        ],
      },
      {
        heading: 'Marketing Support',
        content: [
          'We provide comprehensive marketing support to help you succeed. Get access to professionally designed banners, landing pages, email templates, and social media content.',
          'Our affiliate team is available to answer your questions, provide guidance, and help you optimize your promotional campaigns.',
          'We regularly update marketing materials to reflect new features, promotions, and market trends, ensuring you always have fresh content to share.',
        ],
      },
    ],
    cta: {
      heading: 'Start Earning Today',
      description: 'Apply now to become an FX777 affiliate and start earning commissions',
    },
  },

  refer: {
    seo: {
      title: 'Refer a Friend to FX777 | Earn Rewards for Referrals',
      description: 'Refer friends to FX777 and earn rewards. Both you and your friend get bonuses. Simple referral process with instant rewards. Start referring today!',
    },
    hero: {
      title: 'Refer a Friend',
      description: 'Share FX777 with friends and earn rewards. Both you and your friend receive bonuses when they start trading.',
    },
    features: [
      {
        title: 'Earn Rewards',
        description: 'Get bonus credits for every successful referral',
      },
      {
        title: 'Friend Benefits',
        description: 'Your friends get special signup bonuses and benefits',
      },
      {
        title: 'Easy Sharing',
        description: 'Share via WhatsApp, email, social media, or direct link',
      },
      {
        title: 'Instant Tracking',
        description: 'Track your referrals and rewards in real-time',
      },
    ],
    sections: [
      {
        heading: 'How Referral Works',
        content: [
          'Step 1: Log in to your FX777 account and get your unique referral link from the "Refer & Earn" section.',
          'Step 2: Share your referral link with friends via WhatsApp, email, social media, or any other method.',
          'Step 3: Your friend signs up using your link and completes their account verification.',
          'Step 4: When your friend makes their first trade, both of you receive bonus rewards credited to your accounts.',
          'You can refer unlimited friends and earn rewards for each successful referral. There\'s no limit to how much you can earn!',
        ],
      },
      {
        heading: 'Referral Benefits',
        content: [
          'For You: Earn ₹500-1000 bonus credits for every friend who signs up and starts trading. Use these credits for trading or withdraw them to your bank account.',
          'For Your Friend: Your friend gets a special welcome bonus, reduced fees for the first month, and priority customer support.',
          'Both of you benefit from the referral program, making it a win-win situation. The more friends you refer, the more you earn!',
        ],
      },
      {
        heading: 'Terms & Conditions',
        content: [
          'Referral rewards are credited within 7 days after your friend completes their first trade.',
          'Both you and your friend must have verified accounts to receive rewards.',
          'Rewards may vary based on ongoing promotions. Check the Refer & Earn section for current offers.',
          'FX777 reserves the right to modify or cancel the referral program at any time.',
        ],
      },
    ],
    cta: {
      heading: 'Start Referring Friends',
      description: 'Log in to get your referral link and start earning rewards today',
    },
  },

  whiteLabel: {
    seo: {
      title: 'White Label Trading Platform | FX777 B2B Solutions',
      description: 'Launch your own branded trading platform with FX777 white label solutions. Complete technology, support, and infrastructure. Contact us for partnership.',
    },
    hero: {
      title: 'White Label Solutions',
      description: 'Launch your own branded trading platform with FX777\'s proven technology, infrastructure, and support. Perfect for brokers and financial institutions.',
    },
    features: [
      {
        title: 'Your Brand',
        description: 'Fully customizable platform with your logo, colors, and branding',
      },
      {
        title: 'Complete Technology',
        description: 'Trading platform, mobile apps, back-office, and CRM included',
      },
      {
        title: 'Quick Launch',
        description: 'Go live in weeks, not months, with our ready-to-deploy solution',
      },
      {
        title: 'Ongoing Support',
        description: 'Technical support, updates, and maintenance included',
      },
      {
        title: 'Revenue Sharing',
        description: 'Attractive revenue sharing models tailored to your business',
      },
      {
        title: 'Regulatory Support',
        description: 'Assistance with compliance and regulatory requirements',
      },
    ],
    sections: [
      {
        heading: 'Complete Trading Platform Solution',
        content: [
          'Our white label solution provides everything you need to launch and operate a successful trading platform. Get a fully branded web platform, mobile apps for iOS and Android, back-office system, and CRM - all customized with your branding.',
          'The platform includes advanced charting tools, real-time market data, multiple order types, risk management features, and payment gateway integration. Everything is ready to go - you just add your branding.',
          'We handle all the technical complexity, infrastructure, and maintenance, allowing you to focus on growing your business and serving your clients.',
        ],
      },
      {
        heading: 'Who Is This For?',
        content: [
          'Our white label solution is perfect for financial institutions, existing brokers looking to upgrade their technology, fintech startups, and entrepreneurs wanting to enter the trading industry.',
          'Whether you want to serve retail traders, institutional clients, or both, our platform can be customized to meet your specific requirements.',
          'You don\'t need technical expertise or a large team. We provide complete support from setup to ongoing operations.',
        ],
      },
      {
        heading: 'What\'s Included',
        content: [
          'Fully branded web trading platform with your logo and colors',
          'Native mobile apps for iOS and Android',
          'Complete back-office system for client management',
          'CRM system for sales and support',
          'Payment gateway integration',
          'Risk management tools and reporting',
          'Real-time market data feeds',
          'Technical support and platform updates',
          'Training for your team',
          'Marketing materials and resources',
        ],
      },
      {
        heading: 'Revenue Models',
        content: [
          'We offer flexible revenue sharing models designed to help you succeed. Options include revenue share, license fee, or hybrid models depending on your business needs.',
          'Our partnership team will work with you to create a customized agreement that aligns with your business goals and growth plans.',
          'We succeed when you succeed, so we\'re invested in helping you build a thriving trading business.',
        ],
      },
    ],
    cta: {
      heading: 'Launch Your Trading Platform',
      description: 'Contact our partnership team to discuss your white label requirements and get a customized proposal',
    },
  },
}

// Terms & Conditions content
export const termsContent = {
  seo: {
    title: 'Terms & Conditions | FX777 Trading Platform',
    description: 'Read FX777 terms and conditions. Understand user responsibilities, trading rules, platform usage, and risk disclosure before trading.',
  },
  hero: {
    title: 'Terms & Conditions',
    description: 'Please read these terms carefully before using the FX777 trading platform. By creating an account, you agree to these terms.',
  },
  sections: [
    {
      heading: '1. Introduction',
      content: [
        'These Terms and Conditions ("Terms") govern your use of the FX777 trading platform and services. By registering for an account, you agree to be bound by these Terms.',
        'FX777 reserves the right to modify these Terms at any time. We will notify you of significant changes via email or platform notifications. Continued use of the platform after changes constitutes acceptance of the modified Terms.',
      ],
    },
    {
      heading: '2. Account Registration & Eligibility',
      content: [
        'You must be at least 18 years old and legally capable of entering into binding contracts to use FX777.',
        'You must provide accurate, complete, and current information during registration. You are responsible for maintaining the confidentiality of your account credentials.',
        'Each user may maintain only one account. Multiple accounts may result in suspension or termination of all accounts.',
        'You must complete KYC (Know Your Customer) verification before you can start trading. This includes submitting valid identity proof, address proof, and other required documents.',
      ],
    },
    {
      heading: '3. Trading Rules & Responsibilities',
      content: [
        'You are solely responsible for all trading decisions made on your account. FX777 does not provide investment advice or recommendations.',
        'You acknowledge that trading involves significant risk and you may lose some or all of your invested capital.',
        'You must maintain sufficient margin in your account to cover your positions. Failure to maintain margin may result in automatic position liquidation.',
        'Market manipulation, insider trading, or any fraudulent activity is strictly prohibited and may result in account termination and legal action.',
      ],
    },
    {
      heading: '4. Platform Usage',
      content: [
        'You agree to use the FX777 platform only for lawful purposes and in accordance with these Terms.',
        'You may not use automated trading systems, bots, or scripts without prior written approval from FX777.',
        'You may not attempt to gain unauthorized access to any part of the platform, other accounts, or computer systems.',
        'FX777 reserves the right to suspend or terminate your account if we suspect any violation of these Terms or fraudulent activity.',
      ],
    },
    {
      heading: '5. Fees & Charges',
      content: [
        'FX777 offers zero brokerage on most instruments. However, you are responsible for paying applicable statutory charges including STT, GST, exchange transaction charges, and SEBI turnover fees.',
        'Margin interest may be charged on leveraged positions held overnight.',
        'All fees and charges are clearly disclosed on our website and platform. We reserve the right to modify fees with prior notice.',
      ],
    },
    {
      heading: '6. Deposits & Withdrawals',
      content: [
        'You may deposit funds using approved payment methods. Deposits are typically credited within minutes to a few hours.',
        'Withdrawals are processed within 1-3 business days to your registered bank account.',
        'You may only withdraw funds to bank accounts in your name. Third-party withdrawals are not permitted.',
        'FX777 reserves the right to request additional verification before processing large withdrawals.',
      ],
    },
    {
      heading: '7. Risk Disclosure',
      content: [
        'Trading in stocks, commodities, forex, and other financial instruments involves substantial risk of loss and is not suitable for all investors.',
        'Leverage can work against you as well as for you. High leverage can result in rapid losses that exceed your initial investment.',
        'Past performance is not indicative of future results. Market conditions can change rapidly.',
        'You should only trade with money you can afford to lose. Consider your financial situation and risk tolerance before trading.',
      ],
    },
    {
      heading: '8. Limitation of Liability',
      content: [
        'FX777 is not liable for any losses arising from your trading decisions, market movements, or platform usage.',
        'We are not responsible for losses due to system failures, internet connectivity issues, or force majeure events beyond our control.',
        'Our total liability to you for any claim shall not exceed the fees paid by you to FX777 in the 12 months preceding the claim.',
      ],
    },
    {
      heading: '9. Privacy & Data Protection',
      content: [
        'Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.',
        'We use industry-standard security measures to protect your data, but we cannot guarantee absolute security.',
        'You consent to the collection and use of your information as described in our Privacy Policy.',
      ],
    },
    {
      heading: '10. Dispute Resolution',
      content: [
        'Any disputes arising from these Terms or your use of FX777 shall be resolved through arbitration in accordance with Indian law.',
        'The arbitration shall be conducted in English and the seat of arbitration shall be Mumbai, India.',
        'You agree to first attempt to resolve any disputes through our customer support before initiating formal proceedings.',
      ],
    },
    {
      heading: '11. General Provisions',
      content: [
        'These Terms constitute the entire agreement between you and FX777 regarding the use of our platform.',
        'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force.',
        'FX777\'s failure to enforce any right or provision shall not constitute a waiver of such right or provision.',
        'These Terms are governed by the laws of India.',
      ],
    },
  ],
  lastUpdated: 'Last Updated: January 1, 2026',
}

// Contact page content
export const contactContent = {
  seo: {
    title: 'Contact FX777 | Customer Support & Inquiries',
    description: 'Contact FX777 for support, partnership inquiries, or general questions. Available 24/7 via phone, email, and live chat. We\'re here to help!',
  },
  hero: {
    title: 'Contact Us',
    description: 'Have questions? We\'re here to help. Reach out to our support team via phone, email, or live chat.',
  },
  intro: [
    'At FX777, we\'re committed to providing exceptional customer support. Whether you have questions about opening an account, need technical assistance, or want to learn more about our services, our team is ready to help.',
    'Our customer support team is available 24/7 to assist you with any queries. We typically respond to emails within 2-4 hours and phone calls are answered immediately during business hours.',
  ],
  sections: [
    {
      heading: 'Customer Support',
      content: 'For account-related queries, technical support, or trading assistance, our customer support team is available round the clock.',
    },
    {
      heading: 'Partnership Inquiries',
      content: 'Interested in becoming an affiliate or white label partner? Contact our partnership team to discuss opportunities.',
    },
    {
      heading: 'General Inquiries',
      content: 'For general questions about FX777, our services, or anything else, feel free to reach out through any of our contact channels.',
    },
  ],
}
