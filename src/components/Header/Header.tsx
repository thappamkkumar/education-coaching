"use client";

import { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { headerData } from "@/content/headerData";
import { headerLogoUrl, businessName } from "@/content/siteConfig";
import Image from "next/image";

type NavItem = { label: string; href: string };

 const Header: FC = () =>    {
  const [activeSection, setActiveSection] = useState<string>("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initialize sections on mount
  useEffect(() => {
    sectionsRef.current = headerData.navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((el): el is HTMLElement => el !== null);

    // Trigger scroll spy once on mount
    setTimeout(() => handleScroll(), 100);
  }, []);

  // Scroll spy
  const handleScroll = (): void => {
    const scrollY = window.scrollY;
    const offset = window.innerHeight / 2; // trigger point for active link
    let newActive = "#home";

    for (const section of sectionsRef.current) {
      if (scrollY >= section.offsetTop - offset) {
        newActive = `#${section.id}`;
      }
    }

    if (newActive !== activeSection) {
      setActiveSection(newActive);
      history.replaceState(null, "", newActive); // update URL hash without jump
    }
  };

  useEffect(() => {
    const onScroll = (): void => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(handleScroll, 50); // debounce
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [activeSection]);

  // Smooth scroll on link click
  const scrollToSection = (id: string): void => {
    const target = document.getElementById(id.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
      history.replaceState(null, "", id); // update URL hash
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[var(--color-surface)]/70 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-3"
          aria-label="Go to home"
        >
          <Image
						src={headerLogoUrl}
						alt={`${businessName} Logo`}
						width={128}
						height={128}
						priority
						className="
							w-10
							sm:w-11
							md:w-11	
							lg:w-11
							h-auto
							object-contain
						"
					/>

        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {headerData.navItems.map((item: NavItem) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`relative cursor-pointer font-medium transition-colors  duration-200 text-[var(--color-text-primary)] hover:text-[var(--color-primary)] ${
                activeSection === item.href ? "text-[var(--color-primary)]" : ""
              }`}
            >
              {item.label}
              {activeSection === item.href && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary)] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className=" cursor-pointer md:hidden text-[var(--color-text-primary)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
					aria-expanded={isMobileMenuOpen}

        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 bg-current transition ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden px-6 pb-4 h-screen overflow-y-auto   ">
          <ul className="flex flex-col gap-6 mt-2">
            {headerData.navItems.map((item: NavItem) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left text-lg font-bold cursor-pointer py-2 transition-colors  duration-200 ${
                    activeSection === item.href
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-primary)] hover:text-[var(--color-primary)]/50"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
						
						 
          </ul>
        </nav>
      )}
    </header>
  );
}

export default  Header;