export interface FacultyItem {
  id: string;
  name: string;
  role: string;        // Subject or Position
  experience?: string; // Optional: "5+ years experience"
  photo: string;       // Image URL
}

export interface FacultyContent {
  heading: string;
  subHeading?: string;
  items: FacultyItem[];
}
