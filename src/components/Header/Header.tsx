 
import { headerData } from "@/content/headerData";
 
import {  logoUrl } from "@/content/siteConfig";

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-50 
        bg-[var(--color-background)]
        shadow-[var(--shadow-soft)]
      "
    >
      <div
        className="
          max-w-7xl mx-auto 
          flex items-center justify-between 
          px-6 py-4
        "
      >
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Logo"
            className="
              w-10 h-10 
              rounded-[var(--radius-base)]
              object-cover
            "
          />
           
        </div>

        {/* Right: Navigation */}
        <nav>
          <ul className="flex gap-8">
            {headerData.navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="
                    text-[var(--color-text-primary)] 
                    hover:text-[var(--color-primary)] 
                    transition-colors
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
