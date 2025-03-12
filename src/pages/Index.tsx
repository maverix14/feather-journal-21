
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after component mounts
    setLoaded(true);
  }, []);

  return (
    <div 
      className={cn(
        "page-container min-h-screen w-screen flex items-center justify-center bg-background",
        !loaded && "opacity-0"
      )}
    >
      <div 
        className="dot w-4 h-4 rounded-full bg-primary"
        aria-hidden="true"
      />
    </div>
  );
};

export default Index;
