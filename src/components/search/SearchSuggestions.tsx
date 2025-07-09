import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface SearchSuggestionsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ suggestions, onSelect }) => (
  <motion.div
    className="grid grid-cols-3 gap-4 w-full mt-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, delay: 0.1 }}
  >
    {suggestions.map((suggestion, index) => (
      <motion.div
        key={index}
        className="bg-gradient-to-br from-[#372525]/40 hover:from-[#372525]/40 to-[#233432]/40 hover:to-[#233432]/80 border border-[#372525]/30 rounded-xl overflow-hidden relative group p-3 flex gap-2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
        whileHover={{ scale: 1.03 }}
        onClick={() => onSelect(suggestion)}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
            opacity-0 group-hover:opacity-100 transition-all duration-1000 
            -translate-x-full group-hover:translate-x-full ease-in-out pointer-events-none"
          style={{
            transitionProperty: "opacity, transform",
            transitionDuration: "2s",
          }}
        />
        <Sparkles width={15} height={15} />
        <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
          {suggestion}
        </p>
      </motion.div>
    ))}
  </motion.div>
);

export default SearchSuggestions;