export interface HighlightItem {
  icon: string; // key for highlightsIconMap
  text: string;
}

export interface HighlightsProps {
  data: HighlightItem[];
  iconMap: Record<string, React.ElementType>; // maps icon names to React components
}
