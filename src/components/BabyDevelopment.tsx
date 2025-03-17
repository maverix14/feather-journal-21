
import React from "react";
import { cn } from "@/lib/utils";
import { Baby } from "lucide-react";

interface BabyDevelopmentProps {
  week: number;
  highlights: string;
  className?: string;
}

const BabyDevelopment: React.FC<BabyDevelopmentProps> = ({
  week,
  highlights,
  className,
}) => {
  return (
    <div className={cn("rounded-xl bg-green-50/50 p-4", className)}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
          <Baby className="w-3 h-3 text-green-500" />
        </div>
        <h3 className="font-medium">Baby Development</h3>
      </div>
      
      <div className="flex gap-4 mt-3">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img 
            src="/lovable-uploads/13e3052d-aacd-4243-8ed1-efc6f218e683.png" 
            alt="Baby development illustration" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h4 className="font-medium">Week {week} Highlights</h4>
          <p className="text-sm text-muted-foreground mt-1">{highlights}</p>
        </div>
      </div>
    </div>
  );
};

export default BabyDevelopment;
