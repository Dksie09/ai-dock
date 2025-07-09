import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { SearchState } from "@/types";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";
import { searchSuggestions } from "@/data/mockData";

interface SearchPanelProps {
  searchState: SearchState;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const SearchPanel: React.FC<SearchPanelProps> = ({
  searchState,
  searchValue,
  onSearchChange,
  onSearchClear,
  containerRef,
}) => (
  <AnimatePresence>
    {searchState.isExpanded && (
      <motion.div
        ref={containerRef}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{
          height: 0,
          opacity: 0,
          transition: {
            height: { delay: 0.2, duration: 0.3 },
            opacity: { duration: 0.2 },
          },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute bottom-36 bg-black/50 w-[590px] rounded-xl flex items-start p-3 flex-col overflow-hidden"
      >
        <AnimatePresence>
          {searchState.isOpen && (
            <>
              <SearchInput
                value={searchValue}
                onChange={onSearchChange}
                onClear={onSearchClear}
              />
              <SearchSuggestions
                suggestions={searchSuggestions}
                onSelect={onSearchChange}
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    )}
  </AnimatePresence>
);

export default SearchPanel;