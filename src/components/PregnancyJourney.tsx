
import React from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

interface PregnancyJourneyProps {
  currentWeek: number;
  dueDate: string;
  weeksToGo: number;
  developingPart: string;
  className?: string;
}

const PregnancyJourney: React.FC<PregnancyJourneyProps> = ({
  currentWeek,
  dueDate,
  weeksToGo,
  developingPart,
  className,
}) => {
  return (
    <div className={cn("rounded-xl bg-purple-50/50 p-4", className)}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
          <Calendar className="w-3 h-3 text-purple-500" />
        </div>
        <h3 className="font-medium">Pregnancy Journey</h3>
      </div>
      
      <div className="flex gap-1 items-center mt-3">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-xs mt-1">OCT 15</p>
        </div>
        
        <div className="h-1 flex-1 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full mx-2"></div>
        
        <div className="text-center">
          <p className="text-purple-600 font-semibold">W{currentWeek}</p>
          <p className="text-xs">Your baby is developing</p>
          <p className="text-lg text-purple-600 font-bold mt-1">{developingPart}</p>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm font-medium">Due Date</p>
        <p className="text-sm text-muted-foreground">{weeksToGo} weeks to go</p>
      </div>
    </div>
  );
};

export default PregnancyJourney;
