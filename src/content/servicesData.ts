
import type { Service, ServiceHeading } from "@/types/services";


 

export const servicesHeading: ServiceHeading = {
	servicePrimaryHeading : "Explore Our Salon Services",
	
	serviceSubHeading : "Discover a wide range of professional beauty and grooming services designed to suit your style and needs.",
 
}



export const servicesData: Service[] = [
  { title: "Hair Styling & Haircuts", price: "₹499", icon: "scissors" },
  { title: "Bridal & Party Makeup", price: "₹2,999", icon: "gem" },
  { title: "Facials & Skin Care", price: "₹799", icon: "smile" },
  { title: "Manicure & Pedicure", price: "₹599", icon: "hand" },
  { title: "Hair Coloring & Treatments", price: "₹1299", icon: "palette" },
  { title: "Waxing & Threading", price: "₹199", icon: "feather" }
];

