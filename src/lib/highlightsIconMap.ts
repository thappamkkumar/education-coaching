import {
  Award,
  Star,
  IndianRupee,
  Users,
  ShieldCheck,
} from "lucide-react";
import type { ElementType } from "react";

export const highlightsIconMap: Record<string, ElementType> = {
  award: Award,
  rupee: IndianRupee,
  team: Users,
  shield: ShieldCheck,
  star: Star,
};
