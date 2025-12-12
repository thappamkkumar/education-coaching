import { FC } from "react";
import { contactData } from "@/content/contactData";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact: FC = ()  => {
  return (
    <section
      id="contact"
      className="py-20  "
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center  ">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-primary)] mb-4"
          >
            Get in Touch
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            We&apos;d love to hear from you! Reach out for any inquiries or collaborations.
          </p>

          {/* Phone */}
          <div className="flex items-center space-x-4 mb-6">
            <Phone className="w-6 h-6 text-[var(--color-primary)]" />
            <a
              href={`tel:${contactData.phone}`}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              aria-label={`Call us at ${contactData.phone}`}
            >
              {contactData.phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 mb-6">
            <Mail className="w-6 h-6 text-[var(--color-primary)]" />
            <a
              href={`mailto:${contactData.email}`}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              aria-label={`Email us at ${contactData.email}`}
            >
              {contactData.email}
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-4 mb-6">
            <MapPin className="w-6 h-6 mt-1 text-[var(--color-primary)]" />
            <address className="not-italic text-[var(--color-text-secondary)]">
              {contactData.address}
            </address>
          </div>
        </div>

        {/* Right: Embedded Google Map */}
        <div className="w-full h-64 md:h-full rounded-[var(--radius-base)] overflow-hidden shadow-[var(--shadow-soft)]">
          <iframe
            src={contactData.mapEmbedUrl}
            title="Our Location"
            width="100%"
            height="100%"
            className="border-0"
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
