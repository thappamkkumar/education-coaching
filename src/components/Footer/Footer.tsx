import { FC } from "react";
import { footerLogoUrl, businessName } from "@/content/siteConfig";
import { footerData } from "@/content/footerData";
import { socialIconMap } from "@/lib/socialIconMap";
import { headerData } from "@/content/headerData";

const Footer: FC = () => {
  return (
    <footer
			style={{ backgroundImage: `url('/bg/bg3.png')` }}
      className="    relative w-full  	bg-cover bg-bottom-right bg-no-repeat " 
      aria-label="Footer"
    >
			 <div className="bg-[var(--color-surface)]/95 ">
        
				<div className="max-w-7xl mx-auto px-6 py-16">
					<div className="grid gap-12 md:grid-cols-3">
						{/* Brand */}
						<div>
							<img
								src={footerLogoUrl}
								alt={`${businessName} Logo`}
								className="w-36 h-auto object-contain mb-4"
								loading="lazy"
							/>
							<p className="text-sm text-[var(--color-text-secondary)] max-w-xs">
								A trusted institute focused on quality education, expert guidance,
								and consistent student success.
							</p>
						</div>

						{/* Navigation */}
						<nav aria-label="Footer Navigation">
							<p className="font-semibold text-[var(--color-text-primary)] mb-4">
								Quick Links
							</p>
							<ul className="space-y-3">
								{headerData.navItems.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</nav>

						{/* Social + Copyright */}
						<div>
							<p className="font-semibold text-[var(--color-text-primary)] mb-4">
								Connect With Us
							</p>

							<div className="flex gap-4 mb-6">
								{footerData.socialLinks.map((link) => {
									const Icon = socialIconMap[link.label];
									return (
										<a
											key={link.label}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={link.label}
											className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
										>
											{Icon && <Icon className="w-5 h-5" />}
										</a>
									);
								})}
							</div>

							<p className="text-xs text-[var(--color-text-secondary)]">
								{footerData.copyright}
							</p>
						</div>
					</div>
				</div>
			</div>
    </footer>
  );
};

export default Footer;
