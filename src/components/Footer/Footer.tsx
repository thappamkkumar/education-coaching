import { businessName, logoUrl } from "@/content/siteConfig";
import { footerData } from "@/content/footerData";
import { socialIconMap } from "@/lib/socialIconMap";
import { headerData } from "@/content/headerData";

export const Footer = () => {
  return (
    <footer
      className="bg-[var(--color-surface)] border-t border-[var(--color-border)] py-20 px-6"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">

        {/* Optimized Thank You Message */}
        <p className="text-[var(--color-text-primary)]   text-center text-3xl md:text-4xl font-bold  ">
          We appreciate your visit! Stay connected with us.
        </p>

        {/* Logo + Business Name */}
        <div className="flex flex-col items-center space-y-2">
          <img
            src={logoUrl}
            alt={`${businessName} Logo`}
            className="h-12 w-12   shadow-[var(--shadow-soft)]"
          />
          <span className="text-[var(--color-text-primary)] font-bold text-lg md:text-xl">
            {businessName}
          </span>
        </div>

        {/* Navigation Links */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base"
        >
          {headerData.navItems.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          {footerData.socialLinks.map((link) => {
            const IconComponent = socialIconMap[link.label];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-transform transform hover:scale-110 duration-300"
              >
                {IconComponent && <IconComponent className="w-6 h-6" />}
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-[var(--color-text-secondary)] text-sm text-center mt-4">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
