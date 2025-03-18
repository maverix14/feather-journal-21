
import React from "react";
import { cn } from "@/lib/utils";
import { Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface Tip {
  id: string;
  title: string;
  description: string;
}

interface DailyTipsProps {
  className?: string;
}

const DailyTips: React.FC<DailyTipsProps> = ({ className }) => {
  const isMobile = useIsMobile();
  
  const tips: Tip[] = [
    {
      id: '1',
      title: 'Healthy eating habits',
      description: 'Focus on nutrient-rich foods like fruits, vegetables, lean proteins, and whole grains.'
    },
    {
      id: '2',
      title: 'Safe exercises',
      description: 'Swimming, walking, and prenatal yoga are excellent low-impact options.'
    },
    {
      id: '3',
      title: 'Managing back pain',
      description: 'Maintain good posture and consider using a pregnancy support belt.'
    }
  ];

  return (
    <Card className={cn("overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100/60 shadow-sm", className)}>
      <CardHeader className="pb-1 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
            <h3 className="text-xs font-medium">Daily Tips</h3>
          </div>
          <a href="#" className="text-[9px] text-amber-500 hover:underline">View all</a>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className={cn("space-y-1.5", isMobile && "pt-1")}>
          {tips.map(tip => (
            <div key={tip.id} className="border-b border-amber-100/50 pb-1.5 last:border-b-0 last:pb-0 hover:bg-white/40 p-1 rounded-sm transition-colors">
              <h4 className="font-medium text-[9px] mb-0.5 text-amber-700">{tip.title}</h4>
              <p className="text-[8px] text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyTips;
