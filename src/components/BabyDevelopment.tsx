
import React from "react";
import { cn } from "@/lib/utils";
import { Baby } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BabyDevelopmentProps {
  className?: string;
}

const BabyDevelopment: React.FC<BabyDevelopmentProps> = ({ className }) => {
  return (
    <Card className={cn("overflow-hidden bg-gradient-to-br from-baby-50 to-baby-100/70 dark:from-baby-50 dark:to-black/20 shadow-sm", className)}>
      <CardHeader className="pb-1 p-3">
        <div className="flex items-center gap-2">
          <Baby className="h-4 w-4 text-baby-500 dark:text-baby-600" />
          <h3 className="text-sm font-medium">Baby Development</h3>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center">
            <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-baby-300 dark:border-baby-500 shadow-sm">
              <img 
                src="/lovable-uploads/f3f57254-c181-4fa8-89f9-05ad70fa83bc.png" 
                alt="Baby at week 12" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-[13px] mb-1.5">Week 12 Highlights</h4>
            <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-tight">
              Your baby's lungs are forming air sacs, eyes shifting to the front, and ears moving to the sides!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="bg-white/80 dark:bg-white/10 rounded-lg p-2 shadow-sm">
              <div className="text-center text-[11px] text-baby-600 dark:text-baby-500">LENGTH</div>
              <div className="text-center font-semibold text-[14px] mt-0.5">2.5 inches</div>
            </div>
            <div className="bg-white/80 dark:bg-white/10 rounded-lg p-2 shadow-sm">
              <div className="text-center text-[11px] text-baby-600 dark:text-baby-500">WEIGHT</div>
              <div className="text-center font-semibold text-[14px] mt-0.5">0.5 oz</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BabyDevelopment;
