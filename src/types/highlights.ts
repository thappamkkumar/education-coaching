export interface HighlightItem {
  icon: string; // key for highlightsIconMap
  text: string;
  image?: string; // optional path to background image for the card
}

export interface HighlightsProps {
  data: HighlightItem[];
  iconMap: Record<string, React.ElementType>; // maps icon names to React components
}


export interface BgImage { 
  image?: string;  
}