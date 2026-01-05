import Image from "next/image";
import { FacultyItem } from "@/types/faculty";

interface Props {
  faculty: FacultyItem;
}

const FacultyCard = ({ faculty }: Props) => {
  return (
    <div className="   relative flex flex-col items-center text-center   bg-white p-6 rounded-3xl shadow-md border border-[var(--color-secondary)]   transition-transform duration-300 ease-in-out  hover:scale-105 hover:-translate-y-2 hover:shadow-2xl  overflow-hidden  cursor-pointer    ">
      {/* Circular Photo */}
      <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-[var(--color-primary)] hover:border-[var(--color-accent)] transition-colors duration-300">
        <Image
          src={faculty.photo}
          alt={faculty.name}
          width={112}
          height={112}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors duration-300">
        {faculty.name}
      </h3>

      {/* Role */}
      <p className="text-[var(--color-text-secondary)]">{faculty.role}</p>

      {/* Experience */}
      {faculty.experience && (
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{faculty.experience}</p>
      )}

      {/* Accent Bar (optional modern design element) */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[var(--color-accent)] rounded-full"></span>
    </div>
  );
};

export default FacultyCard;
