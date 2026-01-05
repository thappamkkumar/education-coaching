import TestimonialCard from "./TestimonialCard";
import { TestimonialItem } from "@/types/testimonial";

interface Props {
  items: TestimonialItem[];
  scrollRef: React.RefObject<HTMLDivElement>;
}

const TestimonialsGrid = ({ items, scrollRef }: Props) => {
  return (
    <div
      ref={scrollRef}
      className="  pt-6 pb-12      flex gap-6 overflow-x-auto scroll-smooth        scrollbar-hide      "
    >
      {items.map((item) => (
        <TestimonialCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default TestimonialsGrid;
