import React from "react";
import { motion } from "motion/react";
import { Search, X, Mic } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onClear }) => (
  <motion.div
    className="w-full h-12 mb-4 rounded-xl mt-5 py-1 px-4 bg-black/50 flex items-center order-last"
    initial={{ width: "0%", opacity: 0 }}
    animate={{ width: "100%", opacity: 1 }}
    exit={{ width: "0%", opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
  >
    <Search className="text-gray-400 mr-2" width={18} height={18} />
    <input
      className="w-full h-full bg-transparent text-white outline-none placeholder-gray-400"
      placeholder="Ask anything about the person..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoFocus
    />
    {value && (
      <X
        className="text-gray-400 cursor-pointer hover:text-white"
        width={18}
        height={18}
        onClick={onClear}
      />
    )}
    <Mic
      className="text-gray-400 ml-2 cursor-pointer hover:text-white"
      width={18}
      height={18}
    />
  </motion.div>
);

export default SearchInput;