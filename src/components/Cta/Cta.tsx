import { ctaData } from "@/content/ctaData";
import { Phone, MessageCircle } from "lucide-react";

const Cta = () => {
  const { heading, subHeading, primaryAction, secondaryAction } = ctaData;

  return (
    <section 
			style={{ backgroundImage: `url('/bg/bg1.jpg')` }} 
			className="   relative bg-cover bg-bottom-right bg-no-repeat"  
		>
      
			<div className="py-20 bg-[var(--color-primary)]/90" >
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-on-surface)]">
						{heading}
					</h2>

					<p className="mt-4 text-lg text-[var(--color-text-accent-on-surface)]">
						{subHeading}
					</p>

					<div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
						<a
							href={primaryAction.href}
							className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-[var(--color-accent)] text-black hover:opacity-90 transition	"
						>
						 <Phone className="w-5 h-5  " />
							{primaryAction.label}
						</a>

						{secondaryAction && (
							<a
								href={secondaryAction.href}
								target="_blank" className="inline-flex items-center justify-center gap-2 	px-8 py-4 rounded-full font-semibold 	border-2 border-[var(--color-accent)] 	text-[var(--color-accent)] 	hover:bg-[var(--color-accent)] hover:text-black 	transition "
							>
							 <MessageCircle className="w-5 h-5  " />
								{secondaryAction.label}
							</a>
						)}
					</div>
				</div>
			</div>
    </section>
  );
};

export default Cta;
