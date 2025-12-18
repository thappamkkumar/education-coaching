export interface CTA {
  label: string;
  href: string;
}

export interface HeroData {
  heading: string;
  subheading: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
  smallScreenVideo: string;
  largeScreenVideo: string; 
}
