"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { headerData } from "@/content/headerData";
import { headerLogoUrl, businessName } from "@/content/siteConfig";
import { Menu, X } from "lucide-react";

type NavItem = { label: string; href: string };

const Header: FC = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionsRef = useRef<HTMLElement[]>([]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Scroll handling: update active section & URL hash
  useEffect(() => {
    sectionsRef.current = headerData.navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const offset = window.innerHeight * 0.4;
      let current = "#home";

      for (const section of sectionsRef.current) {
        if (window.scrollY >= section.offsetTop - offset) {
          current = `#${section.id}`;
        }
      }

      // Update activeSection for styling
      setActiveSection((prev) => (prev === current ? prev : current));

      // Update URL hash without jump
      if (current !== window.location.hash) {
        history.replaceState(null, "", current);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll to section on click
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id.replace("#", ""));
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
    history.replaceState(null, "", id); // URL also updated on click
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-lg bg-[var(--color-background)]/50 text-[var(--color-text-primary)] shadow-sm"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            aria-label="Go to home"
            className="bg-[var(--color-background)] rounded-lg"
          >
            <Image
              src={headerLogoUrl}
              alt={`${businessName} Logo`}
              width={44}
              height={44}
              priority
              className="object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {headerData.navItems.map((item: NavItem) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[var(--color-primary)] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Open Button */}
          <button
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden cursor-pointer"
          >
            <Menu size={24} className="text-current" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white">
          <div className="flex items-center justify-between px-6 py-4">
            <Image
              src={headerLogoUrl}
              alt={`${businessName} Logo`}
              width={44}
              height={44}
              className="object-contain"
            />

            <button
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-pointer"
            >
              <X size={32} className="text-current" />
            </button>
          </div>

          <nav className="px-6 pt-12">
            <ul className="flex flex-col gap-8">
              {headerData.navItems.map((item: NavItem) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`text-xl font-bold cursor-pointer w-full text-left ${
                      activeSection === item.href
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-text-primary)]"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
