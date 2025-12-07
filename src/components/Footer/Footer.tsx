   
import {businessName, logoUrl } from "@/content/siteConfig";
import { footerData } from "@/content/footerData";
import { socialIconMap} from "@/lib/socialIconMap";

export const Footer = () => {
    

  return (
    <footer
      className="bg-var(--color-surface) py-6"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left: Logo + Business Name */}
        <div className="flex items-center space-x-3">
          <img src={logoUrl} alt="Logo" className="h-8 w-8" />
          <span className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
            {businessName}
          </span>
        </div>

        {/* Center: Copyright */}
        <p className="text-sm text-var(--color-text-secondary)">
          {footerData.copyright}
        </p>

        {/* Right: Social Links */}
        <div className="flex space-x-4">
          {footerData.socialLinks.map((link) => {
            const IconComponent = socialIconMap[link.label];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-var(--color-primary) transition-colors duration-300"
              >
                {IconComponent && <IconComponent className="w-5 h-5" />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};




export default Footer;