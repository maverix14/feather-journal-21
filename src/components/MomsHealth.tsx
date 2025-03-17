
import React from "react";
import { cn } from "@/lib/utils";
import { Heart, Activity, Apple } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";

interface MomsHealthProps {
  className?: string;
}

const MomsHealth: React.FC<MomsHealthProps> = ({ className }) => {
  const isMobile = useIsMobile();
  
  return (
    <Card className={cn("overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/60 shadow-sm", className)}>
      <CardHeader className="pb-1 p-4">
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-blue-500" />
          <h3 className="text-sm font-medium">Mom's Health</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className={cn("grid gap-3", isMobile ? "grid-cols-1" : "grid-cols-2")}>
          <div className="rounded-xl bg-white shadow-sm p-3">
            <div className="text-center mb-1">
              <span className="text-blue-600 font-medium text-xs">Mom's Weight</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-blue-500 text-lg font-bold">+</span>
                <span className="text-blue-500 text-xl font-bold">0.5</span>
              </div>
              <span className="text-xs text-gray-500">kg this week</span>
              <div className="w-full mt-1">
                <div className="h-1.5 w-full bg-blue-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 mt-0.5">Healthy weight gain on track</span>
            </div>
          </div>
          
          <div className="rounded-xl bg-white shadow-sm p-3">
            <div className="text-center mb-1">
              <span className="text-green-600 font-medium text-xs">Mom's Nutrition</span>
            </div>
            <div className="space-y-1.5">
              <div>
                <div className="flex justify-between text-[10px] mb-0.5">
                  <span>Protein</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-1.5 bg-green-100" />
              </div>
              <div>
                <div className="flex justify-between text-[10px] mb-0.5">
                  <span>Hydration</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-1.5 bg-blue-100" />
              </div>
              <div>
                <div className="flex justify-between text-[10px] mb-0.5">
                  <span>Vitamins</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="h-1.5 bg-purple-100" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MomsHealth;
