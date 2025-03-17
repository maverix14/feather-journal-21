
import React from "react";
import { cn } from "@/lib/utils";
import { Heart, Activity, Apple } from "lucide-react";

interface MomsHealthProps {
  weight: { value: number, unit: string, period: string };
  nutrition: { protein: number, hydration: number, vitamins: number };
  babySize: string;
  className?: string;
}

const MomsHealth: React.FC<MomsHealthProps> = ({
  weight,
  nutrition,
  babySize,
  className,
}) => {
  return (
    <div className={cn("rounded-xl bg-blue-50/50 p-4", className)}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
          <Heart className="w-3 h-3 text-blue-500" />
        </div>
        <h3 className="font-medium">Mom's Health</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mt-3">
        <div className="bg-white p-3 rounded-lg text-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
            <Activity className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-xs text-blue-500 font-medium mt-2">Mom's Weight</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">
            {weight.value > 0 ? "+" : ""}{weight.value}
          </p>
          <p className="text-xs text-muted-foreground">
            {weight.unit} {weight.period}
          </p>
          <p className="text-xs mt-2">Healthy weight gain on track</p>
        </div>
        
        <div className="bg-white p-3 rounded-lg">
          <p className="text-xs text-green-500 font-medium mb-2">Mom's Nutrition</p>
          
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Protein</span>
                <span>{nutrition.protein}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full">
                <div 
                  className="h-full bg-green-500 rounded-full" 
                  style={{ width: `${nutrition.protein}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Hydration</span>
                <span>{nutrition.hydration}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full">
                <div 
                  className="h-full bg-blue-500 rounded-full" 
                  style={{ width: `${nutrition.hydration}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Vitamins</span>
                <span>{nutrition.vitamins}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full">
                <div 
                  className="h-full bg-purple-500 rounded-full" 
                  style={{ width: `${nutrition.vitamins}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg text-center flex flex-col items-center justify-between">
          <div className="w-12 h-12">
            <Apple className="w-full h-full text-red-500" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mt-1">Your baby is the size of</p>
            <p className="text-sm font-medium">an {babySize}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MomsHealth;
