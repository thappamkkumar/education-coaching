import { Quote, Star } from "lucide-react";
import { TestimonialItem } from "@/types/testimonial";

interface Props {
  data: TestimonialItem;
}

const TestimonialCard = ({ data }: Props) => {
  const rating = data.rating ?? 0;

  return (
    <div
      data-card
      className="flex-shrink-0 w-[85vw] sm:w-[320px] lg:w-[360px] bg-white rounded-3xl p-6 shadow-lg border border-[var(--color-secondary)] transition-transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Quote */}
      <Quote className="w-8 h-8 text-[var(--color-secondary)]/50 mb-3" />

      {/* Message */}
      <p className="text-sm text-[var(--color-text-primary)] leading-relaxed">
        "{data.message}"
      </p>

      {/* Rating */}
      {rating > 0 && (
        <div className="flex gap-1 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-[var(--color-accent)] text-[var(--color-accent)]"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="w-10 h-1 bg-[var(--color-secondary)]/50 rounded-full my-4"></div>

      {/* Name */}
      <h4 className="font-semibold text-[var(--color-text-primary)]">
        {data.name}
      </h4>
    </div>
  );
};

export default TestimonialCard;
