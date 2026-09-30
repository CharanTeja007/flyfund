/**
 * FlyFund lender data. Supplied by FlyFund — do not replace these figures
 * with data from other websites. Every displayed processing fee is 0%.
 */
export interface Lender {
  name: string
  loanAmount: string
  interestRate: string
  processingFee: string
}

export const lenders: Lender[] = [
  { name: 'IDFC Credila', loanAmount: 'Up to ₹2 Cr', interestRate: '9.5%', processingFee: '0%' },
  { name: 'Avanse', loanAmount: '₹1.25 Cr', interestRate: '10%', processingFee: '0%' },
  { name: 'Auxilo', loanAmount: '₹1.5 Cr', interestRate: '10.5%', processingFee: '0%' },
  { name: 'Poonawalla', loanAmount: '₹2 Cr', interestRate: '10%', processingFee: '0%' },
  { name: 'InCred', loanAmount: '₹1.25 Cr', interestRate: '9.75%', processingFee: '0%' },
  { name: 'Tata Capital', loanAmount: '₹2 Cr', interestRate: '10%', processingFee: '0%' },
  { name: 'IDFC First Bank', loanAmount: '₹2 Cr', interestRate: '9.5%', processingFee: '0%' },
  { name: 'Axis Bank', loanAmount: '₹1.5 Cr', interestRate: '9%', processingFee: '0%' },
  { name: 'Punjab National Bank', loanAmount: '₹1.5 Cr', interestRate: '8%', processingFee: '0%' },
  { name: 'YES Bank', loanAmount: '₹1.5 Cr', interestRate: '9.75%', processingFee: '0%' },
  { name: 'Union Bank', loanAmount: '₹1.5 Cr', interestRate: '8%', processingFee: '0%' },
  { name: 'Bank of Baroda', loanAmount: '₹1.5 Cr', interestRate: '8%', processingFee: '0%' },
  { name: 'Bank of Maharashtra', loanAmount: '₹1.5 Cr', interestRate: '9.5%', processingFee: '0%' },
  { name: 'Prodigy Finance', loanAmount: 'USD 250,000', interestRate: '10.5%', processingFee: '0%' },
  { name: 'MPOWER', loanAmount: 'USD 100,000', interestRate: '10%', processingFee: '0%' },
]

export const lenderDisclaimer =
  "The lender information displayed by FlyFund is provided for guidance and comparison. Final eligibility, interest rate, loan amount, fees, collateral requirements, repayment terms and approval are determined by the respective lender and may vary based on the applicant's profile and final loan terms."
