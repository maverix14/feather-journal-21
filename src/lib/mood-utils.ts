
import { MoodType } from "@/components/MoodSelector";

export const getMoodColor = (mood: MoodType | undefined): string => {
  switch (mood) {
    case "happy":
      return "var(--mood-happy)";
    case "content":
      return "var(--mood-content)";
    case "neutral":
      return "var(--mood-neutral)";
    case "sad":
      return "var(--mood-sad)";
    case "stressed":
      return "var(--mood-stressed)";
    default:
      return "transparent";
  }
};

export const getMoodEmoji = (mood: MoodType | undefined): string | null => {
  switch (mood) {
    case "happy":
      return "😊";
    case "content":
      return "😌";
    case "neutral":
      return "😐";
    case "sad":
      return "😔";
    case "stressed":
      return "😰";
    default:
      return null;
  }
};
