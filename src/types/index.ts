export interface TooltipProps {
  visible: boolean;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

export interface SearchState {
  isExpanded: boolean;
  isOpen: boolean;
}

export interface TooltipState {
  ask: boolean;
  profile: boolean;
  insights: boolean;
  message: boolean;
  user: boolean;
  plus: boolean;
  findSimilar: boolean;
}

export interface User {
  id: number;
  name: string;
  status: "online" | "offline";
  lastActive: string;
  avatar: string;
}

export type TabType = "profile" | "insights";
