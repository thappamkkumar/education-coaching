import { MethodologyItem } from "@/types/methodology";
import { methodologyIconMap } from "@/lib/methodologyIconMap";

interface Props {
  item: MethodologyItem;
}

const MethodologyCard = ({ item }: Props) => {
  const Icon = item.icon ? methodologyIconMap[item.icon] : null;

  return (
    <div className="flex flex-col items-center text-center bg-[var(--color-background)] p-6 rounded-2xl shadow-md border border-[var(--color-secondary)]  hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-300 cursor-pointer    ">
      {Icon && (
        <div className="w-16 h-16 mb-4 text-[var(--color-primary)]">
          <Icon className="w-full h-full" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{item.description}</p>
    </div>
  );
};

export default MethodologyCard;
