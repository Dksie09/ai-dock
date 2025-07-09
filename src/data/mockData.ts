import { User } from "@/types";

export const searchSuggestions = [
  "Is he still a college student?",
  "Has he ever worked in the field of AI?",
  "Where is he originally based from?",
];

export const similarUsers: User[] = [
  {
    id: 1,
    name: "CreativeSpark",
    status: "online",
    lastActive: "founder",
    avatar: "https://avatars.githubusercontent.com/u/16860528",
  },
  {
    id: 2,
    name: "AlexSmith",
    status: "online",
    lastActive: "backend engineer",
    avatar: "https://avatars.githubusercontent.com/u/1024025",
  },
  {
    id: 3,
    name: "JennaDoe",
    status: "offline",
    lastActive: "Designer @vercel",
    avatar: "https://avatars.githubusercontent.com/u/11576738",
  },
  {
    id: 4,
    name: "MikeJohnson",
    status: "offline",
    lastActive: "founder @linktop",
    avatar: "https://avatars.githubusercontent.com/u/383316",
  },
];
