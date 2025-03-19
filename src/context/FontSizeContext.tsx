
import React, { createContext, useContext, useEffect, useState } from "react";

// Define font size options
type FontSize = "small" | "medium" | "large";

interface FontSizeProviderProps {
  children: React.ReactNode;
  defaultFontSize?: FontSize;
}

interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (fontSize: FontSize) => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export function FontSizeProvider({
  children,
  defaultFontSize = "medium",
}: FontSizeProviderProps) {
  // Initialize from localStorage if available
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    const savedSize = localStorage.getItem("fontSize");
    return (savedSize === "small" || savedSize === "medium" || savedSize === "large") 
      ? savedSize as FontSize 
      : defaultFontSize;
  });

  // Apply font size class to document root when it changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove previous font size classes
    root.classList.remove("text-size-small", "text-size-medium", "text-size-large");
    
    // Add the current font size class
    root.classList.add(`text-size-${fontSize}`);
    
    // Add CSS variables for scaling
    if (fontSize === "small") {
      root.style.setProperty("--font-size-scale", "0.85");
    } else if (fontSize === "medium") {
      root.style.setProperty("--font-size-scale", "1.0");
    } else if (fontSize === "large") {
      root.style.setProperty("--font-size-scale", "1.2");
    }
    
    // Save to localStorage
    localStorage.setItem("fontSize", fontSize);
    
    console.log("Font size updated:", fontSize);
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
};
