import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users } from "lucide-react";
import UserCard from "./UserCard";
import { similarUsers } from "@/data/mockData";

interface SimilarUsersPanelProps {
  visible: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const SimilarUsersPanel: React.FC<SimilarUsersPanelProps> = ({ visible, containerRef }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-[150px] flex w-[590px] rounded-xl gap-2 overflow-hidden"
      >
        <motion.div
          className="flex-1 bg-gradient-to-br from-[#372525]/60 to-[#233432]/60 border border-[#372525]/40 rounded-xl p-5 flex flex-col backdrop-blur-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-medium">Similar Connections</h3>
          </div>
          <div className="flex flex-col space-y-2 mt-2">
            {similarUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 rounded-xl p-5 flex flex-col items-center bg-black/50 justify-between backdrop-blur-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div className="relative w-48 h-48">
            <img src="group.png" alt="Group" />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl text-white font-medium mb-2">Create group</h2>
            <p className="text-gray-400 text-sm mb-6">
              Add new team members to collaborate on this project.
            </p>
            <button className="bg-gradient-to-r mx-auto from-[#372525]/60 to-[#233432]/80 hover:from-[#372525]/80 hover:to-[#233432]/90 text-white rounded-xl px-4 py-2 flex items-center justify-center gap-2 transition-all border border-[#372525]/30 shadow-lg hover:shadow-xl">
              <Users size={16} />
              Create
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default SimilarUsersPanel;