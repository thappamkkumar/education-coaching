export interface CTA {
  label: string;
  href: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface HeroData {
  heading: string;
  subheading: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
  image: HeroImage;
}
