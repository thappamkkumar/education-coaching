 
import { serviceIconMap } from "@/lib/serviceIconMap"; 
import { servicesData } from "@/content/servicesData";
   
 

 const Services= () => {
  return (
    <section
			id="services"
      className="w-full py-20" 
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "var(--color-text-primary)" }}
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = serviceIconMap[service.icon];

            return (
              <div
                key={index}
                className="p-6 rounded-xl shadow-md flex flex-col items-center text-center transition hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderRadius: "var(--radius-base)",
                  boxShadow: "var(--shadow-soft)"
                }}
              >
                {Icon && (
                  <Icon
                    className="w-12 h-12 mb-4"
                    style={{ color: "var(--color-primary)" }}
                    strokeWidth={1.5}
                  />
                )}

                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Starting from <span className="font-semibold">{service.price}</span>
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


export default Services;