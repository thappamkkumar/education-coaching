import { FC } from "react";
import { contactData, contactHeading } from "@/content/contactData";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-[var(--color-background)]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Left Content */}
          <div>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]"
            >
              {contactHeading.contactPrimaryHeading}
            </h2>

            <p className="mt-4 max-w-xl text-[var(--color-text-secondary)]">
              {contactHeading.contactSubHeading}
            </p>

            <div className="mt-10 space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[var(--color-primary)] mt-1" />
                <div>
                  <p className="font-medium text-[var(--color-text-primary)]">
                    Phone
                  </p>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[var(--color-primary)] mt-1" />
                <div>
                  <p className="font-medium text-[var(--color-text-primary)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[var(--color-primary)] mt-1" />
                <div>
                  <p className="font-medium text-[var(--color-text-primary)]">
                    Address
                  </p>
                  <address className="not-italic text-[var(--color-text-secondary)]">
                    {contactData.address}
                  </address>
                </div>
              </div>

              {/* Open Hours */}
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[var(--color-primary)] mt-1" />
                <div>
                  <p className="font-medium text-[var(--color-text-primary)]">
                    Working Hours
                  </p>
                  <div className="text-[var(--color-text-secondary)]">
                    {contactData.openHours.map((item, index) => (
                      <p key={index}>
                        <span className="font-medium">{item.days}:</span>{" "}
                        {item.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="w-full overflow-hidden rounded-xl border">
            <iframe
              src={contactData.mapEmbedUrl}
              title="Our Location"
              className="w-full h-[360px] md:h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
