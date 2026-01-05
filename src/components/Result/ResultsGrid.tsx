import { RefObject } from "react";
import ResultsCard from "./ResultsCard";
import { AchievementItem } from "@/types/achievement";

interface Props {
  scrollRef: RefObject<HTMLDivElement>;
  items: AchievementItem[];
}

const ResultsGrid = ({ scrollRef, items }: Props) => {
  return (
    <div
      ref={scrollRef}
      className="        flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide      "
    >
      {items.map((item) => (
        <div key={item.id} data-card>
          <ResultsCard data={item} />
        </div>
      ))}
    </div>
  );
};

export default ResultsGrid;
