import React from "react";
import { motion } from "motion/react";
import { TabType, TooltipState } from "@/types";
import Tooltip from "@/components/ui/Tooltip";

interface TabToggleProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  tooltipVisible: TooltipState;
  showTooltip: (key: keyof TooltipState) => void;
  hideTooltip: (key: keyof TooltipState) => void;
}

const TabToggle: React.FC<TabToggleProps> = ({
  activeTab,
  onTabChange,
  tooltipVisible,
  showTooltip,
  hideTooltip,
}) => (
  <div className="flex items-center gap-5">
    <div className="relative flex h-10 w-36 rounded-xl bg-black/30 p-1">
      <motion.div
        className="absolute h-8 rounded-xl bg-white/10"
        initial={false}
        animate={{
          left: activeTab === "profile" ? "4px" : "calc(50% + 2px)",
          width: "48%",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <button
        className={`relative z-10 flex-1 text-center text-xs font-medium transition-colors duration-300 ${
          activeTab === "profile" ? "text-white" : "text-white/50"
        }`}
        onClick={() => onTabChange("profile")}
        onMouseEnter={() => showTooltip("profile")}
        onMouseLeave={() => hideTooltip("profile")}
      >
        Profile
        <Tooltip visible={tooltipVisible.profile} text="View profile" />
      </button>
      <button
        className={`relative z-10 flex-1 text-center text-xs font-medium transition-colors duration-300 ${
          activeTab === "insights" ? "text-white" : "text-white/50"
        }`}
        onClick={() => onTabChange("insights")}
        onMouseEnter={() => showTooltip("insights")}
        onMouseLeave={() => hideTooltip("insights")}
      >
        Insights
        <Tooltip visible={tooltipVisible.insights} text="View analytics" />
      </button>
    </div>
  </div>
);

export default TabToggle;