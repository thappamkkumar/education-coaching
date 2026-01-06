import Image from "next/image";
import { AchievementItem } from "@/types/achievement";

interface Props {
  data: AchievementItem;
}

const ResultsCard = ({ data }: Props) => {
  return (
    <div
      className=" flex-shrink-0 w-[85vw] sm:w-[320px] lg:w-[340px] h-full bg-white rounded-2xl shadow-lg border border-[var(--color-secondary)]"
    >
      {/* Header */}
      <div className="flex items-center gap-4 p-5 border-b">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-accent)]">
          <Image
            src={data.image}
            alt={data.studentName}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="font-semibold text-[var(--color-text-primary)]">
            {data.studentName}
          </h3>
          <span className="text-xs text-[var(--color-secondary)] font-medium">
            Achievement
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {data.achievement}
        </p>
      </div>
    </div>
  );
};

export default ResultsCard;
