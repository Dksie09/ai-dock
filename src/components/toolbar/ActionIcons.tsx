import React from "react";
import { MessageCircle, PlusIcon, Star } from "lucide-react";
import { TooltipState } from "@/types";
import Tooltip from "@/components/ui/Tooltip";

interface ActionIconsProps {
  tooltipVisible: TooltipState;
  showTooltip: (key: keyof TooltipState) => void;
  hideTooltip: (key: keyof TooltipState) => void;
}

const ActionIcons: React.FC<ActionIconsProps> = ({
  tooltipVisible,
  showTooltip,
  hideTooltip,
}) => (
  <>
    <div
      className="relative"
      onMouseEnter={() => showTooltip("message")}
      onMouseLeave={() => hideTooltip("message")}
    >
      <MessageCircle
        className="mr-2 opacity-50 hover:opacity-80 text-white cursor-pointer"
        width={20}
        height={20}
      />
      <Tooltip visible={tooltipVisible.message} text="send DM" />
    </div>

    <div
      className="relative"
      onMouseEnter={() => showTooltip("plus")}
      onMouseLeave={() => hideTooltip("plus")}
    >
      <PlusIcon
        className="mx-2 opacity-50 hover:opacity-80 cursor-pointer text-white"
        width={20}
        height={20}
      />
      <Tooltip visible={tooltipVisible.plus} text="Add to group" />
    </div>

    <div
      className="relative"
      onMouseEnter={() => showTooltip("user")}
      onMouseLeave={() => hideTooltip("user")}
    >
      <Star
        className="mx-2 opacity-50 hover:opacity-80 cursor-pointer text-white"
        width={20}
        height={20}
      />
      <Tooltip visible={tooltipVisible.user} text="Star user" />
    </div>
  </>
);

export default ActionIcons;