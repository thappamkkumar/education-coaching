import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  onScroll: (direction: "left" | "right") => void;
}

const ResultsControls = ({ onScroll }: Props) => {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => onScroll("left")}
        className="h-10 w-10 rounded-full bg-white text-[var(--color-primary)] shadow hover:scale-105 transition"
        aria-label="Previous"
      >
        <ChevronLeft className="mx-auto" />
      </button>

      <button
        onClick={() => onScroll("right")}
        className="h-10 w-10 rounded-full bg-white text-[var(--color-primary)] shadow hover:scale-105 transition"
        aria-label="Next"
      >
        <ChevronRight className="mx-auto" />
      </button>
    </div>
  );
};

export default ResultsControls;
