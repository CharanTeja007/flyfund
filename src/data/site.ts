export const site = {
  name: 'FlyFund',
  tagline: 'Fund Your Future',
  url: 'https://flyfund.in',
  email: 'info@flyfund.in',
  phones: [
    { display: '+91 6302812827', tel: '+916302812827', wa: '916302812827' },
    { display: '+91 9059842672', tel: '+919059842672', wa: '919059842672' },
  ],
  address: [
    'Office No: 20, 3rd Floor,',
    'Padmavathi Plaza, Near KPHB Metro,',
    'Hyderabad - 500072',
  ],
  whatsappMessage:
    'Hi FlyFund, I would like to know more about education-loan options for studying abroad.',
}

export function whatsappLink(wa: string, message = site.whatsappMessage) {
  return `https://wa.me/${wa}?text=${encodeURIComponent(message)}`
}

export const primaryNav = [
  { to: '/', label: 'Home' },
  { to: '/education-loans', label: 'Education Loans' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/loan-calculator', label: 'Loan Calculator' },
  { to: '/referral', label: 'Referral' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/education-loans', label: 'Education Loans' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/loan-calculator', label: 'Loan Calculator' },
  { to: '/referral', label: 'Referral Program' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
  { to: '/apply', label: 'Apply Now' },
] as const

export const legalNav = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/disclaimer', label: 'Disclaimer' },
  { to: '/referral-terms', label: 'Referral Program Terms' },
] as const

export const studyCountries = [
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Germany',
  'Ireland',
  'France',
  'New Zealand',
  'Singapore',
  'Other',
]

export const footerDisclaimer =
  "FlyFund provides education-loan assistance and facilitates access to available lending options. Loan approval, interest rates, loan amount, eligibility, collateral requirements, repayment terms, processing conditions and disbursement are subject to the respective lender's policies, verification and final decision."
