
import React from "react";
import { cn } from "@/lib/utils";
import { Bell, CalendarClock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
        return <Calendar className="h-3 w-3" />;
      case 'yoga':
        return <Calendar className="h-3 w-3" />;
      case 'ultrasound':
        return <Calendar className="h-3 w-3" />;
      default:
        return <Calendar className="h-3 w-3" />;
    }
  };

  return (
    <Card className={cn("overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/60 shadow-sm", className)}>
      <CardHeader className="pb-1 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-blue-500" />
            <h3 className="text-sm font-medium">Upcoming Reminders</h3>
          </div>
          <a href="#" className="text-xs text-blue-500 hover:underline">View all</a>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-2">
          {reminders.map(reminder => (
            <div key={reminder.id} className="rounded-lg bg-white shadow-sm p-2">
              <div className="flex gap-2 items-start">
                <div className={cn("rounded-md p-1", reminder.color)}>
                  {getIcon(reminder.icon)}
                </div>
                <div className="flex-1">
                  <div className="text-[10px] text-gray-500">
                    {reminder.date}, {reminder.time}
                  </div>
                  <div className="font-medium text-xs">{reminder.title}</div>
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
