
import React from "react";
import { cn } from "@/lib/utils";
import { Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Tip {
  id: string;
  title: string;
  description: string;
}

interface DailyTipsProps {
  className?: string;
}

const DailyTips: React.FC<DailyTipsProps> = ({ className }) => {
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
    <Card className={cn("overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100/60 shadow-sm", className)}>
      <CardHeader className="pb-1 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            <h3 className="text-sm font-medium">Daily Tips</h3>
          </div>
          <a href="#" className="text-xs text-amber-500 hover:underline">View all</a>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-2">
          {tips.map(tip => (
            <div key={tip.id} className="border-b border-amber-100 pb-2 last:border-b-0 last:pb-0">
              <h4 className="font-medium text-xs mb-0.5">{tip.title}</h4>
              <p className="text-[10px] text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyTips;
