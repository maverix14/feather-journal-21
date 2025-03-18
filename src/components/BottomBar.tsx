
import React from "react";
import { HomeIcon, BookPlus, CalendarDays, Users, BarChart } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useSound } from "@/context/SoundContext";

const BottomBar = () => {
  const location = useLocation();
  const { playSound } = useSound();
  
  const handleNavClick = () => {
    playSound("click");
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent flex items-end z-10">
      <div className="flex items-center justify-between w-full bg-card/90 backdrop-blur-sm rounded-t-xl shadow-sm px-5 py-3">
        <NavLink
          to="/"
          onClick={handleNavClick}
          className={cn(
            "flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all",
            isActive("/") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
          )}
        >
          <HomeIcon size={20} />
          <span className="text-[10px] mt-0.5">Home</span>
        </NavLink>

        <NavLink
          to="/new"
          onClick={handleNavClick}
          className={cn(
            "flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all",
            isActive("/new") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
          )}
        >
          <BookPlus size={20} />
          <span className="text-[10px] mt-0.5">New</span>
        </NavLink>

        <NavLink
          to="/calendar"
          onClick={handleNavClick}
          className={cn(
            "flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all",
            isActive("/calendar") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
          )}
        >
          <CalendarDays size={20} />
          <span className="text-[10px] mt-0.5">Calendar</span>
        </NavLink>

        <NavLink
          to="/shared"
          onClick={handleNavClick}
          className={cn(
            "flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all",
            isActive("/shared") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
          )}
        >
          <Users size={20} />
          <span className="text-[10px] mt-0.5">Shared</span>
        </NavLink>

        <NavLink
          to="/insights"
          onClick={handleNavClick}
          className={cn(
            "flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all",
            isActive("/insights") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
          )}
        >
          <BarChart size={20} />
          <span className="text-[10px] mt-0.5">Insights</span>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomBar;
