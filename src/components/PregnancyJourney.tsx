
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Heart, Baby, Apple, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface PregnancyJourneyProps {
  className?: string;
}

const PregnancyJourney: React.FC<PregnancyJourneyProps> = ({ className }) => {
  const [kickCount, setKickCount] = useState(12);
  const isMobile = useIsMobile();
  
  return (
    <Card className={cn("overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-100/60 shadow-sm", className)}>
      <CardHeader className="pb-1 p-3">
        <div className="flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5 text-indigo-500" />
          <h3 className="text-xs font-medium">Pregnancy Journey</h3>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className={cn("grid gap-3", isMobile ? "grid-cols-2" : "grid-cols-4")}>
          <div className="rounded-xl bg-white/90 shadow-sm p-2.5 flex flex-col items-center">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-indigo-500" />
              <div className="text-[9px] font-medium">Due Date</div>
            </div>
            <div className="mt-1">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[8px] text-indigo-400">OCT</div>
                  <div className="text-indigo-600 font-bold text-sm">15</div>
                </div>
              </div>
            </div>
            <div className="text-[8px] text-indigo-500 font-medium mt-1.5">28 weeks to go</div>
            <div className="w-full bg-indigo-100 h-1 rounded-full mt-1 overflow-hidden">
              <div className="bg-indigo-400 h-full rounded-full" style={{ width: '28%' }}></div>
            </div>
          </div>
          
          <div className="rounded-xl bg-white/90 shadow-sm p-2.5 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 mb-1.5">
              <Baby className="h-3 w-3 text-pink-500" />
              <div className="text-[9px] font-medium">Development</div>
            </div>
            <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center mb-1.5">
              <span className="text-pink-600 font-bold text-[9px]">W12</span>
            </div>
            <div className="text-center text-[8px]">
              <p className="text-gray-500">Your baby is developing</p>
              <p className="text-pink-500 font-bold mt-0.5">LIMBS & ORGANS</p>
            </div>
          </div>
          
          <div className="rounded-xl bg-white/90 shadow-sm p-2.5 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 mb-1.5">
              <Apple className="h-3 w-3 text-green-500" />
              <div className="text-[9px] font-medium">Baby Size</div>
            </div>
            <div className="flex items-center justify-center mb-1.5">
              <img 
                src="/lovable-uploads/260a680b-22fa-4bf9-ab5c-2b844dd234fc.png" 
                alt="Apple for size comparison" 
                className="h-8 object-contain"
              />
            </div>
            <div className="text-center text-[8px] text-gray-500">
              <p>Your baby is now the size of</p>
              <p className="text-green-500 font-bold mt-0.5">AN APPLE</p>
            </div>
          </div>
          
          <div className="rounded-xl bg-white/90 shadow-sm p-2.5 flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-1">
                <Heart className="h-3 w-3 text-red-500" />
                <span className="text-[9px] font-medium">Kick Counter</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-red-500 mb-2">{kickCount}</div>
              <div className="text-[8px] text-center text-gray-500 mb-2">kicks recorded today</div>
              <Button 
                className="w-full bg-red-100 hover:bg-red-200 text-red-500 text-[9px] h-5 mt-auto"
                variant="ghost"
                onClick={() => setKickCount(kickCount + 1)}
              >
                Record Kick
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PregnancyJourney;
