import React from "react";
import { ArrowUpRight } from "lucide-react";
import { User } from "@/types";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div className="flex items-center bg-black/20 hover:bg-black/50 p-2 rounded-xl justify-between">
    <div className="flex items-center gap-3">
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full bg-gray-700"
        />
        {user.status === "online" && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
        )}
      </div>
      <div>
        <div className="text-white text-sm font-medium">{user.name}</div>
        <div className="text-gray-400 text-xs">{user.lastActive}</div>
      </div>
    </div>
    <div className="text-xs px-2 py-1 rounded-xl flex items-center gap-2">
      <ArrowUpRight width={10} height={10} />
    </div>
  </div>
);

export default UserCard;