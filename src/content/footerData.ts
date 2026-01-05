import type { FooterData } from "@/types/footer";
import { businessName } from "./siteConfig";

export const footerData: FooterData = {
  copyright: `© ${new Date().getFullYear()} ${businessName}. All rights reserved.`,
  socialLinks: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};
