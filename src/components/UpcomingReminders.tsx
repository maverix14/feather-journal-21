
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
        return <Calendar className="h-4 w-4" />;
      case 'yoga':
        return <Calendar className="h-4 w-4" />;
      case 'ultrasound':
        return <Calendar className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <Card className={cn("overflow-hidden bg-blue-50/60", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-blue-500" />
            <h3 className="text-lg font-medium">Upcoming Reminders</h3>
          </div>
          <a href="#" className="text-sm text-blue-500 hover:underline">View all</a>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {reminders.map(reminder => (
            <div key={reminder.id} className="rounded-xl bg-white p-3">
              <div className="flex gap-3 items-start">
                <div className={cn("rounded-md p-1.5", reminder.color)}>
                  {getIcon(reminder.icon)}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500">
                    {reminder.date}, {reminder.time}
                  </div>
                  <div className="font-medium">{reminder.title}</div>
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
