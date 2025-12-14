import {
  Award,
  Star,
  IndianRupee,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const highlightsIconMap: Record<string, ElementType> = {
  award: Award,
  rupee: IndianRupee,
  team: Users,
  hygiene: Sparkles,      // ? BEST for salons
  shield: ShieldCheck,
  star: Star,
};

