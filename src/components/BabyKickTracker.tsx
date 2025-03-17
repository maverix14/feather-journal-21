
import React from "react";
import { cn } from "@/lib/utils";
import { Baby, Heart } from "lucide-react";

interface BabyKickTrackerProps {
  kickCount: number;
  onKickCountChange: (count: number) => void;
  className?: string;
}

const BabyKickTracker: React.FC<BabyKickTrackerProps> = ({
  kickCount,
  onKickCountChange,
  className,
}) => {
  const incrementKicks = () => {
    onKickCountChange(kickCount + 1);
  };

  const decrementKicks = () => {
    if (kickCount > 0) {
      onKickCountChange(kickCount - 1);
    }
  };

  return (
    <div className={cn("", className)}>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={decrementKicks}
          disabled={kickCount === 0}
          className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center disabled:opacity-50 transition-colors"
        >
          <span className="text-xl font-bold text-red-500">-</span>
        </button>
        
        <div className="flex flex-col items-center">
          <Heart className="w-5 h-5 text-red-500 animate-pulse" />
        </div>
        
        <button
          type="button"
          onClick={incrementKicks}
          className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors"
        >
          <span className="text-xl font-bold text-red-500">+</span>
        </button>
      </div>
    </div>
  );
};

export default BabyKickTracker;
