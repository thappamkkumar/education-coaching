import type { ContactData, ContactHeading } from "@/types/contact";

export const contactData: ContactData = {
		phone: "+91 00000 00000",
    email: "info@business.com",
    address: "123 Main Street, Your City",
    mapEmbedUrl:"https://www.google.com/maps/embed?pb=...",
		openHours: [
			{
				days: "Monday - Saturday",
				hours: "10:00 AM - 8:00 PM",
			},
			{
				days: "Sunday",
				hours: "Closed",
			},
		],
  };
	
	
export const contactHeading: ContactHeading = {
	contactPrimaryHeading : "Get in Touch With Us",
	
	contactSubHeading : "Have questions or want to book an appointment? Contact us today and let our beauty experts take care of you.",
 
}

