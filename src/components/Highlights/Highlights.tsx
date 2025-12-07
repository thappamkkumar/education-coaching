 
 
import { highlightsIconMap } from "@/lib/highlightsIconMap";
import { highlightsData } from "@/content/highlightsData";
 

 const Highlights = () => {
  return (
    <section className="">
			<div className="  max-w-7xl mx-auto px-6 mt-12   grid grid-cols-1 sm:grid-cols-4 gap-8  ">
				
				{highlightsData.map((item, index) => {
					const Icon = highlightsIconMap[item.icon];

					return (
						<div
							key={index}
							className="flex flex-col items-center text-center"
							style={{ color: "var(--color-text-primary)" }}
						>
							{Icon && (
								<Icon
									className="w-10 h-10 mb-3"
									strokeWidth={1.5}
								/>
							)}

							<p className="text-sm font-medium">
								{item.text}
							</p>
						</div>
					);
				})}
			</div>
		</section>
  );
};
export default Highlights;