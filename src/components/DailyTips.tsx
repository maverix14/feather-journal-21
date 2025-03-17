
import React from "react";
import { cn } from "@/lib/utils";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Tip {
  title: string;
  description: string;
}

interface DailyTipsProps {
  tips: Tip[];
  className?: string;
}

const DailyTips: React.FC<DailyTipsProps> = ({ tips, className }) => {
  return (
    <div className={cn("rounded-xl bg-amber-50/50 p-4", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
            <Lightbulb className="w-3 h-3 text-amber-500" />
          </div>
          <h3 className="font-medium">Daily Tips</h3>
        </div>
        <Button variant="link" size="sm" className="text-amber-600 p-0 h-auto">
          View all
        </Button>
      </div>
      
      <div className="space-y-4 mt-2">
        {tips.map((tip, index) => (
          <div key={index} className="space-y-1">
            <h4 className="font-medium">{tip.title}</h4>
            <p className="text-xs text-muted-foreground">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyTips;
