export interface AchievementItem {
  id: string;
  studentName: string;
  achievement: string;
  image: string;
}

export interface AchievementsContent {
  heading: string;
  subHeading?: string;
  items: AchievementItem[];
}
