
import React from "react";
import { cn } from "@/lib/utils";
import { Heart, Activity, Apple } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface MomsHealthProps {
  className?: string;
}

const MomsHealth: React.FC<MomsHealthProps> = ({ className }) => {
  return (
    <Card className={cn("overflow-hidden bg-blue-50/60", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-blue-500" />
          <h3 className="text-lg font-medium">Mom's Health</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white p-4">
            <div className="text-center mb-2">
              <span className="text-blue-600 font-medium">Mom's Weight</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-blue-500 text-3xl font-bold">+</span>
                <span className="text-blue-500 text-4xl font-bold">0.5</span>
              </div>
              <span className="text-sm text-gray-500">kg this week</span>
              <div className="w-full mt-2">
                <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <span className="text-xs text-gray-500 mt-1">Healthy weight gain on track</span>
            </div>
          </div>
          
          <div className="rounded-xl bg-white p-4">
            <div className="text-center mb-2">
              <span className="text-green-600 font-medium">Mom's Nutrition</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Protein</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2 bg-green-100" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Hydration</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-2 bg-blue-100" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Vitamins</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="h-2 bg-purple-100" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MomsHealth;
