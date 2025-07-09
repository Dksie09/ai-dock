import { useState } from "react";
import { TooltipState } from "@/types";

export const useTooltips = () => {
  const [tooltipVisible, setTooltipVisible] = useState<TooltipState>({
    ask: false,
    profile: false,
    insights: false,
    message: false,
    user: false,
    plus: false,
    findSimilar: false,
  });

  const showTooltip = (key: keyof TooltipState) => {
    setTooltipVisible((prev) => ({ ...prev, [key]: true }));
  };

  const hideTooltip = (key: keyof TooltipState) => {
    setTooltipVisible((prev) => ({ ...prev, [key]: false }));
  };

  return { tooltipVisible, showTooltip, hideTooltip };
};
