
import React from "react";
import { cn } from "@/lib/utils";
import { Bell, CalendarCheck, Yoga, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface Reminder {
  id: string;
  title: string;
  date: string;
  time: string;
  color: string;
  icon: 'calendar' | 'yoga' | 'ultrasound';
}

interface UpcomingRemindersProps {
  className?: string;
}

const UpcomingReminders: React.FC<UpcomingRemindersProps> = ({ className }) => {
  const isMobile = useIsMobile();
  
  const reminders: Reminder[] = [
    {
      id: '1',
      title: 'Prenatal checkup with Dr. Smith',
      date: 'Tomorrow',
      time: '10:00 AM',
      color: 'bg-blue-100 text-blue-500',
      icon: 'calendar'
    },
    {
      id: '2',
      title: 'Pregnancy yoga class',
      date: 'Mar 10',
      time: '5:00 PM',
      color: 'bg-pink-100 text-pink-500',
      icon: 'yoga'
    },
    {
      id: '3',
      title: 'Ultrasound appointment',
      date: 'Mar 15',
      time: '2:30 PM',
      color: 'bg-purple-100 text-purple-500',
      icon: 'ultrasound'
    }
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'calendar':
        return <CalendarCheck className="h-2.5 w-2.5" />;
      case 'yoga':
        return <Yoga className="h-2.5 w-2.5" />;
      case 'ultrasound':
        return <Stethoscope className="h-2.5 w-2.5" />;
      default:
        return <CalendarCheck className="h-2.5 w-2.5" />;
    }
  };

  return (
    <Card className={cn("overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-100/60 shadow-sm", className)}>
      <CardHeader className="pb-1 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-3.5 w-3.5 text-cyan-500" />
            <h3 className="text-xs font-medium">Upcoming Reminders</h3>
          </div>
          <a href="#" className="text-[9px] text-cyan-500 hover:underline">View all</a>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className={cn("space-y-1.5", isMobile && "pt-1")}>
          {reminders.map(reminder => (
            <div key={reminder.id} className="rounded-lg bg-white/90 shadow-sm p-2 hover:bg-white transition-colors">
              <div className="flex gap-2 items-start">
                <div className={cn("rounded-md p-0.5", reminder.color)}>
                  {getIcon(reminder.icon)}
                </div>
                <div className="flex-1">
                  <div className="text-[8px] text-gray-500">
                    {reminder.date}, {reminder.time}
                  </div>
                  <div className="font-medium text-[9px]">{reminder.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingReminders;
