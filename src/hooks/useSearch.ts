import { useState } from "react";
import { SearchState } from "@/types";

export const useSearch = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    isExpanded: false,
    isOpen: false,
  });
  const [searchValue, setSearchValue] = useState("");

  const toggleSearch = (shouldCloseSimilarUsers?: () => void) => {
    if (shouldCloseSimilarUsers) {
      shouldCloseSimilarUsers();
    }

    if (!searchState.isExpanded) {
      setSearchState({ isExpanded: true, isOpen: true });
    } else {
      setSearchState({ isExpanded: true, isOpen: false });
      setTimeout(() => {
        setSearchState({ isExpanded: false, isOpen: false });
      }, 400);
    }
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  return {
    searchState,
    searchValue,
    toggleSearch,
    clearSearch,
    setSearchValue,
    setSearchState,
  };
};
