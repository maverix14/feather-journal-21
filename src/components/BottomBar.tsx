
import React from "react";
import { HomeIcon, BookPlus, BarChart } from "lucide-react";
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
      <div className="flex items-center justify-center w-full gap-8 py-3 px-4 backdrop-blur-md bg-background/60 shadow-lg rounded-t-xl border-t border-border/40">
        <NavLink
          to="/"
          onClick={handleNavClick}
          className={cn(
            "flex flex-col items-center justify-center p-2 rounded-full transition-all",
            isActive("/") 
              ? "text-primary bg-primary/10" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
          )}
        >
          <HomeIcon size={24} />
          <span className="text-[10px] mt-1">Home</span>
        </NavLink>

        <NavLink
          to="/new"
          onClick={handleNavClick}
          className={cn(
            "flex flex-col items-center justify-center p-2 rounded-full transition-all",
            isActive("/new") 
              ? "text-primary bg-primary/10" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
          )}
        >
          <BookPlus size={24} />
          <span className="text-[10px] mt-1">New</span>
        </NavLink>

        <NavLink
          to="/insights"
          onClick={handleNavClick}
          className={cn(
            "flex flex-col items-center justify-center p-2 rounded-full transition-all",
            isActive("/insights") 
              ? "text-primary bg-primary/10" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
          )}
        >
          <BarChart size={24} />
          <span className="text-[10px] mt-1">Insights</span>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomBar;
