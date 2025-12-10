import { highlightsIconMap } from "@/lib/highlightsIconMap";
import { highlightsData } from "@/content/highlightsData";

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="w-full py-20"
      aria-label="Key highlights"
    >
      <div
        className="max-w-7xl mx-auto px-6 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {highlightsData.map((item, index) => {
          const Icon = highlightsIconMap[item.icon];

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              {Icon && (
                <Icon
                  className="w-12 h-12 mb-4 opacity-90 text-[var(--color-primary)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              )}

              <p className="text-lg font-bold tracking-wide text-[var(--color-text-primary)]">
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
