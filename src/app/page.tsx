"use client";
import React, { useState, useRef } from "react";
import DarkBackgroundWrapper from "@/components/GradientBackground";
import SearchPanel from "@/components/search/SearchPanel";
import SimilarUsersPanel from "@/components/users/SimilarUsersPanel";
import BottomToolbar from "@/components/toolbar/BottomToolbar";
import { useTooltips } from "@/hooks/useTooltips";
import { useSearch } from "@/hooks/useSearch";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { TabType } from "@/types";

function NavbarPage() {
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [similarUsersVisible, setSimilarUsersVisible] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const similarUsersContainerRef = useRef<HTMLDivElement>(null);

  const { tooltipVisible, showTooltip, hideTooltip } = useTooltips();
  const { searchState, searchValue, toggleSearch, clearSearch, setSearchValue, setSearchState } = useSearch();

  useOutsideClick(
    searchState,
    searchContainerRef,
    similarUsersVisible,
    similarUsersContainerRef,
    setSearchState,
    setSimilarUsersVisible
  );

  const handleToggleSearch = () => {
    toggleSearch(() => setSimilarUsersVisible(false));
  };

  const handleToggleSimilarUsers = () => {
    if (searchState.isExpanded) {
      setSearchState({ isExpanded: false, isOpen: false });
    }
    setSimilarUsersVisible(!similarUsersVisible);
  };

  return (
    <DarkBackgroundWrapper>
      <div className="w-full min-h-screen flex items-center justify-center bg-black/30">
        <SearchPanel
          searchState={searchState}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onSearchClear={clearSearch}
          containerRef={searchContainerRef}
        />

        <SimilarUsersPanel
          visible={similarUsersVisible}
          containerRef={similarUsersContainerRef}
        />

        <BottomToolbar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          searchState={searchState}
          onToggleSearch={handleToggleSearch}
          similarUsersVisible={similarUsersVisible}
          onToggleSimilarUsers={handleToggleSimilarUsers}
          tooltipVisible={tooltipVisible}
          showTooltip={showTooltip}
          hideTooltip={hideTooltip}
        />
      </div>
    </DarkBackgroundWrapper>
  );
}

export default NavbarPage;