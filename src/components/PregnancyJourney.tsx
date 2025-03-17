
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Heart } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BabyKickTracker from "@/components/BabyKickTracker";

interface PregnancyJourneyProps {
  className?: string;
}

const PregnancyJourney: React.FC<PregnancyJourneyProps> = ({ className }) => {
  const [kickCount, setKickCount] = useState(12);
  
  return (
    <Card className={cn("overflow-hidden bg-purple-50/60", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-purple-500" />
          <h3 className="text-lg font-medium">Pregnancy Journey</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white p-4 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-[12px] border-gray-100 flex items-center justify-center">
                <div className="relative">
                  <Calendar className="h-6 w-6 text-gray-800" />
                  <div className="text-xs font-medium mt-1 text-center">OCT 15</div>
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
                    strokeWidth="12"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="#f472b6"
                    strokeWidth="12"
                    strokeDasharray="276.5"
                    strokeDashoffset="200"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
            </div>
            <div className="text-center mt-36">
              <div className="font-medium">Due Date</div>
              <div className="text-sm text-gray-500">28 weeks to go</div>
            </div>
          </div>
          
          <div className="grid grid-rows-2 gap-4">
            <div className="rounded-xl bg-white p-4 flex flex-col items-center justify-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-purple-600 font-bold">W12</span>
              </div>
              <div className="text-center text-sm">
                <p>Your baby is developing</p>
                <p className="text-purple-500 font-bold border-b-2 border-purple-200 inline-block">LIMBS</p>
              </div>
            </div>
            
            <div className="rounded-xl bg-white p-4 grid grid-rows-2">
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/260a680b-22fa-4bf9-ab5c-2b844dd234fc.png" 
                  alt="Apple for size comparison" 
                  className="h-14 object-contain"
                />
              </div>
              <div className="text-center text-sm">
                <p>Your baby is the size of<br />an apple</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl bg-white p-4 col-span-2">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center">
                  <Heart className="h-4 w-4 text-red-500" />
                </div>
                <span className="text-red-500 font-medium">Kick Counter</span>
              </div>
              <div className="text-3xl font-bold text-red-500">{kickCount}</div>
            </div>
            <div className="text-sm text-center text-gray-500 mb-3">kicks today</div>
            <Button 
              className="w-full bg-red-100 hover:bg-red-200 text-red-500"
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
