export interface CTA {
  label: string;
  href: string;
}

export interface HeroData {
  heading: string;
  subheading: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
  primaryimageUrl: string;
  secondaryImageUrl: string;
  primaryAltText?: string;
  secondaryAltText?: string;
}
