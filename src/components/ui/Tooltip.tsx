import React from "react";
import { TooltipProps } from "@/types";

const Tooltip: React.FC<TooltipProps> = ({ visible, text, position = "top" }) => {
  if (!visible) return null;

  const positionClasses: Record<NonNullable<TooltipProps["position"]>, string> = {
    top: "bottom-full mb-3",
    bottom: "top-full mt-3",
    left: "right-full mr-2",
    right: "left-full ml-2",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded-md whitespace-nowrap z-50`}
    >
      {text}
      <div
        className={`absolute ${
          position === "top" ? "top-full" : "bottom-full"
        } left-1/2 transform -translate-x-1/2 border-solid border-4 border-transparent ${
          position === "top" ? "border-t-black" : "border-b-black"
        }`}
      />
    </div>
  );
};

export default Tooltip;