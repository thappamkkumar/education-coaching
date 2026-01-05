import { AchievementsContent } from "@/types/achievement";

interface Props {
  data: Pick<AchievementsContent, "heading" | "subHeading">;
}

const ResultsHeader = ({ data }: Props) => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-on-surface)]">
        {data.heading}
      </h2>

      {data.subHeading && (
        <p className="mt-2 max-w-xl text-[var(--color-text-accent-on-surface)]">
          {data.subHeading}
        </p>
      )}
    </div>
  );
};

export default ResultsHeader;
