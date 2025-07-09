import { useEffect } from "react";
import { SearchState } from "@/types";

export const useOutsideClick = (
  searchState: SearchState,
  searchContainerRef: React.RefObject<HTMLDivElement | null>,
  similarUsersVisible: boolean,
  similarUsersContainerRef: React.RefObject<HTMLDivElement | null>,
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>,
  setSimilarUsersVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Handle search container
      if (
        searchState.isExpanded &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('[data-search-toggle="true"]')
      ) {
        setSearchState({ isExpanded: true, isOpen: false });
        setTimeout(() => {
          setSearchState({ isExpanded: false, isOpen: false });
        }, 400);
      }

      // Handle similar users container
      if (
        similarUsersVisible &&
        similarUsersContainerRef.current &&
        !similarUsersContainerRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('[data-similar-toggle="true"]')
      ) {
        setSimilarUsersVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [
    searchState.isExpanded,
    similarUsersVisible,
    searchContainerRef,
    similarUsersContainerRef,
    setSearchState,
    setSimilarUsersVisible,
  ]);
};
