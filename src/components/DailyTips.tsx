
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
    <Card className={cn("overflow-hidden bg-amber-50/60", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <h3 className="text-lg font-medium">Daily Tips</h3>
          </div>
          <a href="#" className="text-sm text-amber-500 hover:underline">View all</a>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tips.map(tip => (
            <div key={tip.id} className="border-b border-amber-100 pb-3 last:border-b-0 last:pb-0">
              <h4 className="font-medium mb-1">{tip.title}</h4>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyTips;
