import type { ContactData, ContactHeading } from "@/types/contact";

export const contactData: ContactData = {
		phone: "+91 00000 00000",
    email: "info@business.com",
    address: "123 Main Street, Your City",
    mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3368.6176855987255!2d75.51903198064903!3d32.28157037489753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1766079580052!5m2!1sen!2sin",
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
 