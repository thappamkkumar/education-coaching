import type { ContactData, ContactHeading } from "@/types/contact";

export const contactData: ContactData = {
		phone: "+916005819576",
    email: "info@business.com",
    address: "123 Main Street, Your City",
    mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d389.86590792306873!2d75.51867936433337!3d32.28130313774554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDE2JzUyLjkiTiA3NcKwMzEnMDcuMiJF!5e1!3m2!1sen!2sin!4v1767734905995!5m2!1sen!2sin",
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
  contactPrimaryHeading: "Contact & Visit Our Center",
  contactSubHeading:
    "Have questions about courses or admissions? Reach out to us or visit our center for personalized guidance.",
};

 