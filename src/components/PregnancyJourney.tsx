
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Heart } from "lucide-react";
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
    <Card className={cn("overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100/60 shadow-sm", className)}>
      <CardHeader className="pb-1 p-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-purple-500" />
          <h3 className="text-sm font-medium">Pregnancy Journey</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className={cn("grid gap-3", isMobile ? "grid-cols-2" : "grid-cols-4")}>
          <div className="rounded-xl bg-white shadow-sm p-3 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-[6px] border-gray-100 flex items-center justify-center">
                <div className="relative">
                  <Calendar className="h-3 w-3 text-gray-800" />
                  <div className="text-[9px] font-medium mt-0.5 text-center">OCT 15</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="#f1f1f1"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="#f472b6"
                    strokeWidth="8"
                    strokeDasharray="276.5"
                    strokeDashoffset="200"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
            </div>
            <div className="text-center mt-24">
              <div className="font-medium text-[10px]">Due Date</div>
              <div className="text-[9px] text-gray-500">28 weeks to go</div>
            </div>
          </div>
          
          <div className="rounded-xl bg-white shadow-sm p-3 flex flex-col items-center justify-center">
            <div className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center mb-1">
              <span className="text-purple-600 font-bold text-[9px]">W12</span>
            </div>
            <div className="text-center text-[9px]">
              <p>Your baby is developing</p>
              <p className="text-purple-500 font-bold border-b-2 border-purple-200 inline-block">LIMBS</p>
            </div>
          </div>
          
          <div className="rounded-xl bg-white shadow-sm p-3 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-1">
              <img 
                src="/lovable-uploads/260a680b-22fa-4bf9-ab5c-2b844dd234fc.png" 
                alt="Apple for size comparison" 
                className="h-8 object-contain"
              />
            </div>
            <div className="text-center text-[9px]">
              <p>Your baby is the size of<br />an apple</p>
            </div>
          </div>
          
          <div className="rounded-xl bg-white shadow-sm p-3">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-1">
                <div className="bg-red-100 rounded-full w-5 h-5 flex items-center justify-center">
                  <Heart className="h-2.5 w-2.5 text-red-500" />
                </div>
                <span className="text-red-500 font-medium text-[10px]">Kick Counter</span>
              </div>
              <div className="text-lg font-bold text-red-500">{kickCount}</div>
            </div>
            <div className="text-[9px] text-center text-gray-500 mb-2">kicks today</div>
            <Button 
              className="w-full bg-red-100 hover:bg-red-200 text-red-500 text-[10px] h-6"
              variant="ghost"
              onClick={() => setKickCount(kickCount + 1)}
            >
              Record Kick
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PregnancyJourney;
