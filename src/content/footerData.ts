import type { FooterData, FooterHeading } from "@/types/footer";
import {businessName} from './siteConfig';

export const footerData: FooterData = {
    copyright:
      "© 2025 "+ businessName +". All rights reserved.",
    socialLinks: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" }
    ]
  };
	

export const footerHeading: FooterHeading = {
	footerPrimaryHeading : "Your Trusted Beauty & Salon Destination",
	 
 
}

