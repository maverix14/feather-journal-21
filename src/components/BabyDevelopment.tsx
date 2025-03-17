
import React from "react";
import { cn } from "@/lib/utils";
import { Baby } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BabyDevelopmentProps {
  className?: string;
}

const BabyDevelopment: React.FC<BabyDevelopmentProps> = ({ className }) => {
  return (
    <Card className={cn("overflow-hidden bg-gradient-to-br from-green-50 to-green-100/60 shadow-sm", className)}>
      <CardHeader className="pb-1 p-4">
        <div className="flex items-center gap-2">
          <Baby className="h-4 w-4 text-teal-500" />
          <h3 className="text-sm font-medium">Baby Development</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-pink-300 shadow-sm">
              <img 
                src="/lovable-uploads/f3f57254-c181-4fa8-89f9-05ad70fa83bc.png" 
                alt="Baby at week 12" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-xs mb-1">Week 12 Highlights</h4>
            <p className="text-xs text-gray-700">
              Your baby's lungs are forming air sacs, eyes shifting to the front, and ears moving to the sides!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BabyDevelopment;
