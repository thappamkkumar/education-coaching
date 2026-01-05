import { Quote, Star } from "lucide-react";
import { TestimonialItem } from "@/types/testimonial";

interface Props {
  data: TestimonialItem;
}

const TestimonialCard = ({ data }: Props) => {
  return (
    <div
      data-card
      className=" flex-shrink-0 w-[85vw] sm:w-[320px] lg:w-[360px]  bg-white rounded-3xl p-6    border-4 border-[var(--color-accent)]/70          "
    >
      {/* Quote */}
      <Quote className="w-8 h-8 text-[var(--color-accent)] mb-3" />

      {/* Message */}
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
        "{data.message}"
      </p>

      {/* Rating */}
      {data.rating && (
        <div className="flex gap-1 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < data.rating
                  ? "fill-[var(--color-accent)] text-[var(--color-accent)]"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="w-10 h-1 bg-[var(--color-accent)] rounded-full my-4"></div>

      {/* Name */}
      <h4 className="font-semibold text-[var(--color-text-primary)]">
        {data.name}
      </h4>
    </div>
  );
};

export default TestimonialCard;
