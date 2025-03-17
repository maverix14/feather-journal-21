
import React from "react";
import { cn } from "@/lib/utils";
import { Bell, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Reminder {
  date: string;
  time: string;
  title: string;
}

interface UpcomingRemindersProps {
  reminders: Reminder[];
  className?: string;
}

const UpcomingReminders: React.FC<UpcomingRemindersProps> = ({
  reminders,
  className,
}) => {
  return (
    <div className={cn("rounded-xl bg-blue-50/50 p-4", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
            <Bell className="w-3 h-3 text-blue-500" />
          </div>
          <h3 className="font-medium">Upcoming Reminders</h3>
        </div>
        <Button variant="link" size="sm" className="text-blue-500 p-0 h-auto">
          View all
        </Button>
      </div>
      
      <div className="space-y-3 mt-2">
        {reminders.map((reminder, index) => (
          <div key={index} className="flex gap-3 p-2 rounded-lg hover:bg-blue-50">
            <div className="mt-0.5">
              <Calendar className="w-4 h-4 text-purple-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{reminder.date}, {reminder.time}</p>
              <p className="font-medium">{reminder.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingReminders;
