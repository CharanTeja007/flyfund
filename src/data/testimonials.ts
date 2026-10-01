/**
 * Testimonials shown on the site.
 *
 * The entries below are SAMPLE content for the initial build and are not
 * verified customer reviews. When FlyFund supplies real, verified
 * testimonials, replace these entries and set `isSample: false` (or remove
 * the flag) — the "sample" label disappears automatically.
 */
export interface Testimonial {
  name: string
  program: string
  country: string
  quote: string

}

export const testimonials: Testimonial[] = [
  {
    name: 'Anji Reddy .',
    program: "Master's",
    country: 'UK',
    quote:
      'FlyFund made the loan process much easier to understand. I was initially confused about the available options, but the guidance helped me understand the documentation and funding process clearly.',
   
  },
  {
    name: 'Dheeraj.',
    program: "Master's",
    country: 'UK',
    quote:
      'I was looking for an education-loan option without traditional collateral. The team explained the available possibilities and helped me understand what would work for my profile.',
    
  },
  {
    name: 'Manasa.',
    program: "Master's",
    country: 'UK',
    quote:
      'What I liked most was the simple process. Instead of trying to understand different lenders on my own, I could discuss my requirements and explore suitable options.',
    
  },
  {
    name: 'Sai Teja.',
    program: "Master's",
    country: 'Ireland',
    quote:
      'The team was helpful throughout the documentation process. They explained what was required and helped make the overall loan journey less confusing.',
    
  },
  {
    name: 'Vivek S.',
    program: "Master's",
    country: 'Germany',
    quote:
      'I was mainly looking for a straightforward education-financing option for my overseas studies. FlyFund gave me clear guidance on the process and lender options.',
  
  },
]
