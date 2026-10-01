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
        a: 'Yes. FlyFund provides access to unsecured education-loan options for eligible student profiles. Our team will assess your requirements and guide you toward suitable lenders offering collateral-free education financing. Final sanction is issued by the respective lender after its eligibility and credit assessment.',
      },
      {
        q: 'Can I get an education loan for studying abroad?',
        a: 'Yes. FlyFund helps students explore education-loan options for overseas education across destinations such as the USA, UK, Canada, Australia, Germany, Ireland, Italy and other international destinations. Our team guides you through the application and lender process.',
      },
      {
        q: 'Can I get a loan without paying a processing fee?',
        a: 'Yes. FlyFund currently displays loan options with zero processing fee across the lenders listed on this website, subject to the applicable lender/program terms.',
      },
      {
        q: 'I don’t know which lender is right for me. What should I do?',
        a: 'You do not need to approach every lender separately. Submit one application to FlyFund and our team will review your requirements and guide you through the suitable available education-loan options.',
      },
      {
        q: 'Can my education loan cover tuition and living expenses?',
        a: 'Yes. Education-loan structures can cover eligible tuition and education-related expenses such as accommodation, living expenses, travel and study materials, depending on the approved loan structure and lender terms.',
      },
      {
        q: 'My parents do not have a very high income. Can I still apply?',
        a: 'Yes. Your application can still be evaluated. Education-loan assessment considers multiple factors including the student’s academic profile, university, course, co-applicant profile, repayment capacity and lender criteria. FlyFund will guide you through the appropriate option.',
      },
      {
        q: 'How much education loan can I get?',
        a: 'FlyFund provides access to education-loan options ranging across the lender panel shown on this website. The final sanctioned amount is determined after the lender evaluates your education cost, profile, co-applicant details and applicable eligibility criteria.',
      },
    ],
  },
  {
    title: 'Application & process',
    items: [
      {
        q: 'How long does the loan process take?',
        a: 'FlyFund begins the process as soon as you submit your details. Our team guides you through documentation and lender coordination so the application can move forward efficiently. Final sanction and disbursement timelines are determined by the respective lender’s process.',
      },
      {
        q: 'Do I need a co-applicant?',
        a: 'Co-applicant requirements are determined by the specific lender and loan structure. FlyFund will clearly explain the applicable requirement for the loan option being considered and guide you through the process.',
      },
      {
        q: 'Can I apply before receiving my final admission letter?',
        a: 'Yes, you can initiate your education-loan enquiry with FlyFund before final admission documentation is complete. Our team will explain the lender-specific documents required at each stage of the application.',
      },
      {
        q: 'Can I apply for a Master’s education loan?',
        a: 'Yes. FlyFund supports education-financing enquiries for Master’s programs across international destinations. Submit your details and our team will guide you through the available options.',
      },
    ],
  },
  {
    title: 'Referral program',
    items: [
      {
        q: 'How does the referral program work?',
        a: 'Simply enter the referral name or referral code in the application form. FlyFund will manually verify the referral and process the applicable referral reward after the referred student’s qualifying loan is successfully disbursed.',
      },
      {
        q: 'How much can I earn through referrals?',
        a: `₹10–20 Lakhs disbursement → ₹5,000 referral reward
₹20–30 Lakhs disbursement → ₹7,000 referral reward
₹30–48 Lakhs disbursement → ₹10,000 referral reward
₹48–60 Lakhs disbursement → ₹15,000 referral reward
Above ₹60 Lakhs disbursement → ₹20,000 referral reward`,
      },
      {
        q: 'When will my referral reward be credited?',
        a: 'The applicable referral reward will be processed within 24–48 hours after the qualifying loan disbursement, subject to referral verification and the applicable referral-program terms.',
      },
    ],
  },
]
