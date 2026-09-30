export interface Faq {
  q: string
  a: string
}

export interface FaqGroup {
  title: string
  items: Faq[]
}

export const faqGroups: FaqGroup[] = [
  {
    title: 'Eligibility & collateral',
    items: [
      {
        q: "I don't have collateral. Can I still get an education loan?",
        a: 'Yes, unsecured education-loan options may be available for eligible students. Eligibility depends on factors such as your university, course, academic profile, country, co-applicant profile and lender criteria.',
      },
      {
        q: 'Can I apply without collateral?',
        a: 'Depending on your profile and the lender, unsecured education-loan options may be available. Final eligibility is determined by the respective lender.',
      },
      {
        q: 'My parents do not have a very high income. Can I still apply?',
        a: 'Loan eligibility depends on multiple factors, not income alone. Academic profile, university, course, co-applicant profile, repayment capacity, collateral where applicable and lender policies may all be considered.',
      },
      {
        q: 'Do I need a co-applicant?',
        a: 'Co-applicant requirements vary depending on the lender and loan type. Some loan options may require a parent or other eligible co-applicant.',
      },
      {
        q: 'Can I apply before receiving my final admission letter?',
        a: 'You may be able to begin the process depending on the lender and the stage of your admission. Final documentation and approval requirements vary by provider.',
      },
    ],
  },
  {
    title: 'Loans & lenders',
    items: [
      {
        q: 'Can I apply through FlyFund without knowing which lender to choose?',
        a: 'Yes. FlyFund helps you explore suitable education-loan options from multiple providers through one application, making it easier to understand the available choices.',
      },
      {
        q: 'Can I get a loan for studying in the USA, UK, Canada or Australia?',
        a: 'Education-loan options may be available for major study-abroad destinations including the USA, UK, Canada, Australia, Germany and Ireland, subject to lender and course eligibility.',
      },
      {
        q: 'Can an education loan cover tuition fees and living expenses?',
        a: 'Depending on the lender and approved loan structure, education financing may cover tuition and certain eligible education-related expenses such as accommodation and living costs.',
      },
      {
        q: 'How much education loan can I get?',
        a: "The eligible loan amount depends on factors including your education cost, university, course, financial profile, co-applicant profile and the selected lender's policies.",
      },
      {
        q: 'How long does the education-loan process take?',
        a: 'Processing time varies by lender and documentation. FlyFund helps coordinate the process and documentation to make the journey simpler.',
      },
      {
        q: 'Is there any processing fee?',
        a: 'FlyFund currently displays education-loan options with zero processing fee for the lenders shown on this website, subject to applicable lender/program terms.',
      },
    ],
  },
  {
    title: 'Referral program',
    items: [
      {
        q: 'How does the referral reward work?',
        a: "If someone referred you to FlyFund, enter their name or referral code in the application form. Eligible referral rewards are processed after the referred student's qualifying loan is successfully disbursed.",
      },
      {
        q: 'How much can I earn through referrals?',
        a: 'Eligible referrals can earn a cash reward of up to ₹20,000, subject to the applicable referral-program terms.',
      },
      {
        q: 'When will my referral reward be credited?',
        a: 'The applicable referral reward is intended to be credited within 24–48 hours after qualifying loan disbursement, subject to the referral-program terms.',
      },
    ],
  },
]
