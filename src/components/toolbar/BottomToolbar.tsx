import React from "react";
import { Search, Sparkles } from "lucide-react";
import { TabType, TooltipState, SearchState } from "@/types";
import Tooltip from "@/components/ui/Tooltip";
import Separator from "@/components/ui/Separator";
import TabToggle from "./TabToggle";
import ActionIcons from "./ActionIcons";

interface BottomToolbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  searchState: SearchState;
  onToggleSearch: () => void;
  similarUsersVisible: boolean;
  onToggleSimilarUsers: () => void;
  tooltipVisible: TooltipState;
  showTooltip: (key: keyof TooltipState) => void;
  hideTooltip: (key: keyof TooltipState) => void;
}

const BottomToolbar: React.FC<BottomToolbarProps> = ({
  activeTab,
  onTabChange,
  searchState,
  onToggleSearch,
  similarUsersVisible,
  onToggleSimilarUsers,
  tooltipVisible,
  showTooltip,
  hideTooltip,
}) => (
  <div className="absolute bottom-20 bg-black/50 h-15 w-[590px] rounded-xl flex items-center px-8">
    <div
      data-search-toggle="true"
      className={`flex items-center gap-2 relative cursor-pointer ${
        searchState.isExpanded ? "text-white" : "text-white/80"
      }`}
      onMouseEnter={() => showTooltip("ask")}
      onMouseLeave={() => hideTooltip("ask")}
      onClick={onToggleSearch}
    >
      <Search width={15} height={15} />
      Ask
      <Tooltip visible={tooltipVisible.ask} text="Ask anything about the user" />
    </div>

    <Separator />

    <TabToggle
      activeTab={activeTab}
      onTabChange={onTabChange}
      tooltipVisible={tooltipVisible}
      showTooltip={showTooltip}
      hideTooltip={hideTooltip}
    />

    <Separator />

    <ActionIcons
      tooltipVisible={tooltipVisible}
      showTooltip={showTooltip}
      hideTooltip={hideTooltip}
    />

    <Separator />

    <div
      data-similar-toggle="true"
      className={`flex items-center gap-2 relative cursor-pointer ${
        similarUsersVisible ? "text-white" : "text-white/80"
      }`}
      onMouseEnter={() => showTooltip("findSimilar")}
      onMouseLeave={() => hideTooltip("findSimilar")}
      onClick={onToggleSimilarUsers}
    >
      <Sparkles width={15} height={15} />
      find similar
      <Tooltip visible={tooltipVisible.findSimilar} text="Find similar people" />
    </div>
  </div>
);

export default BottomToolbar;