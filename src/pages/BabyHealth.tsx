import React, { useState } from "react";
import Header from "@/components/Header";
import BottomBar from "@/components/BottomBar";
import BabyDevelopment from "@/components/BabyDevelopment";
import PregnancyJourney from "@/components/PregnancyJourney";
import MomsHealth from "@/components/MomsHealth";
import BabyKickTracker from "@/components/BabyKickTracker";
import UpcomingReminders from "@/components/UpcomingReminders";
import DailyTips from "@/components/DailyTips";
import { featureFlags } from "@/config/features";

const BabyHealth = () => {
  const [kickCount, setKickCount] = useState(12);
  
  // Sample data for components
  const babyDevelopmentData = {
    week: 12,
    highlights: "Your baby's lungs are forming air sacs, eyes shifting to the front, and ears moving to the sides!"
  };
  
  const pregnancyJourneyData = {
    currentWeek: 12,
    dueDate: "October 15",
    weeksToGo: 28,
    developingPart: "LIMBS"
  };
  
  const momsHealthData = {
    weight: { value: 0.5, unit: "kg", period: "this week" },
    nutrition: { protein: 75, hydration: 60, vitamins: 90 },
    babySize: "apple"
  };
  
  const remindersData = [
    { date: "Tomorrow", time: "10:00 AM", title: "Prenatal checkup with Dr. Smith" },
    { date: "Mar 10", time: "5:00 PM", title: "Pregnancy yoga class" },
    { date: "Mar 15", time: "2:30 PM", title: "Ultrasound appointment" }
  ];
  
  const tipsData = [
    { 
      title: "Healthy eating habits", 
      description: "Focus on nutrient-rich foods like fruits, vegetables, lean proteins, and whole grains." 
    },
    { 
      title: "Safe exercises", 
      description: "Swimming, walking, and prenatal yoga are excellent low-impact options." 
    },
    { 
      title: "Managing back pain", 
      description: "Maintain good posture and consider using a pregnancy support belt." 
    }
  ];
  
  if (!featureFlags.babyHealthEnabled) {
    // Render the "coming soon" component if feature flag is disabled
    return (
      <div className="min-h-screen pb-24 px-4 bg-red-50/30">
        <Header />
        
        <main className="max-w-xl mx-auto">
          <h1 className="text-2xl font-medium tracking-tight mb-6 animate-slide-down">Baby Health</h1>
          
          <div className="space-y-1 mb-8 animate-fade-in">
            <h2 className="text-sm text-muted-foreground font-medium">COMING SOON</h2>
            <div className="h-px bg-border w-full"></div>
          </div>
          
          <div className="rounded-xl neo-shadow p-8 text-center animate-fade-in">
            <h3 className="text-xl font-medium mb-4">Pregnancy Tracking & Baby Health</h3>
            <p className="text-muted-foreground mb-6">
              This feature is coming soon! You'll be able to track your pregnancy journey, including:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-lg glass-morphism">
                <h4 className="font-medium mb-2">Baby Development</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Week-by-week size visualization</li>
                  <li>• Development milestones</li>
                  <li>• Fetal health articles</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg glass-morphism">
                <h4 className="font-medium mb-2">Mother's Health</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Symptom tracking</li>
                  <li>• Weight monitoring</li>
                  <li>• Appointment reminders</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <AdCard variant="medium" />
          </div>
        </main>
        
        <BottomBar />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 px-4 bg-red-50/30">
      <Header />
      
      <main className="max-w-xl mx-auto">
        <h1 className="text-2xl font-medium tracking-tight mb-6 animate-slide-down">Baby Health</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Top row */}
          <BabyDevelopment 
            week={babyDevelopmentData.week} 
            highlights={babyDevelopmentData.highlights} 
            className="animate-fade-in"
          />
          
          <PregnancyJourney
            currentWeek={pregnancyJourneyData.currentWeek}
            dueDate={pregnancyJourneyData.dueDate}
            weeksToGo={pregnancyJourneyData.weeksToGo}
            developingPart={pregnancyJourneyData.developingPart}
            className="animate-fade-in"
          />
          
          {/* Middle row */}
          <div className="md:col-span-2">
            <MomsHealth
              weight={momsHealthData.weight}
              nutrition={momsHealthData.nutrition}
              babySize={momsHealthData.babySize}
              className="animate-fade-in"
            />
          </div>
          
          {/* Kick counter */}
          <div className="bg-white p-4 rounded-xl shadow-sm animate-fade-in">
            <div className="text-center mb-2">
              <h3 className="text-red-500 font-medium">Kick Counter</h3>
              <p className="text-5xl font-bold text-red-500 my-2">{kickCount}</p>
              <p className="text-xs text-muted-foreground">kicks today</p>
            </div>
            
            <BabyKickTracker 
              kickCount={kickCount} 
              onKickCountChange={setKickCount} 
              className="mt-3"
            />
            
            <button 
              className="w-full mt-3 bg-red-100 hover:bg-red-200 text-red-500 py-2 rounded-lg text-sm font-medium transition-colors"
              onClick={() => {}}
            >
              Record Kick
            </button>
          </div>
          
          {/* Bottom row */}
          <UpcomingReminders
            reminders={remindersData}
            className="md:col-span-1 animate-fade-in"
          />
          
          <DailyTips
            tips={tipsData}
            className="animate-fade-in"
          />
        </div>
      </main>
      
      <BottomBar />
    </div>
  );
};

export default BabyHealth;
