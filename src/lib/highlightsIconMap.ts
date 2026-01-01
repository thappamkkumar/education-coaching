import {
  GraduationCap,
  Users,
  UserCheck,
  BookOpen,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";
import type { ElementType } from "react";

export const highlightsIconMap: Record<string, ElementType> = {
  faculty: GraduationCap,        // Expert Faculty
  students: Users,               // Successful Students
  smallBatch: UserCheck,         // Personalized Attention
  material: BookOpen,            // Study Material
  fees: IndianRupee,             // Affordable Fees
  safe: ShieldCheck,             // Safe Environment
};
