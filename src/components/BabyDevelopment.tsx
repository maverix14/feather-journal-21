
import React from "react";
import { cn } from "@/lib/utils";
import { Baby } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BabyDevelopmentProps {
  className?: string;
}

const BabyDevelopment: React.FC<BabyDevelopmentProps> = ({ className }) => {
  return (
    <Card className={cn("overflow-hidden bg-green-50/60", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Baby className="h-5 w-5 text-teal-500" />
          <h3 className="text-lg font-medium">Baby Development</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-pink-300">
              <img 
                src="/lovable-uploads/f3f57254-c181-4fa8-89f9-05ad70fa83bc.png" 
                alt="Baby at week 12" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h4 className="font-medium text-base mb-1">Week 12 Highlights</h4>
            <p className="text-sm text-gray-700">
              Your baby's lungs are forming air sacs, eyes shifting to the front, and ears moving to the sides!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BabyDevelopment;
