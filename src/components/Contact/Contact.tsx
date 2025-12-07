 
import { contactData } from "@/content/contactData";
import { Phone, Mail, MapPin } from "lucide-react";

 const Contact = () => {
  return (
    <section className="py-16 bg-var(--color-background)">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold" style={{ color: "var(--color-text-primary)" }}>
            Contact Us
          </h2>

          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-var(--color-primary)" />
            <a href={`tel:${contactData.phone}`} className="text-var(--color-text-secondary)">
              {contactData.phone}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-var(--color-primary)" />
            <a href={`mailto:${contactData.email}`} className="text-var(--color-text-secondary)">
              {contactData.email}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-var(--color-primary)" />
            <p className="text-var(--color-text-secondary)">{contactData.address}</p>
          </div>
        </div>

        {/* Right: Embedded Google Map */}
        <div className="w-full h-64 md:h-full">
          <iframe
            src={contactData.mapEmbedUrl}
            width="100%"
            height="100%"
            className="border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Contact;