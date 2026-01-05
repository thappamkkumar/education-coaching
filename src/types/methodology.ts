export interface MethodologyItem {
  id: string;
  title: string;
  description: string;
  icon?: string; // optional icon URL or class
}

export interface MethodologyContent {
  heading: string;
  subHeading?: string;
  items: MethodologyItem[];
}
