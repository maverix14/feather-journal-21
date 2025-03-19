
import React from "react";
import Header from "@/components/Header";
import BottomBar from "@/components/BottomBar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Bell, Volume2, Info, FileText, Monitor, Sun, Moon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/context/ThemeContext";

const Settings = () => {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="page-container">
      <Header />
      
      <main>
        <h1 className="heading-1 mb-6 animate-slide-down">Settings</h1>
        
        <div className="space-y-8 animate-fade-in">
          {/* Appearance Settings */}
          <div className="section-container">
            <div className="mb-4">
              <h2 className="section-title">APPEARANCE</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  <label className="text-sm font-medium">Theme</label>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    className="flex items-center justify-center gap-2"
                    onClick={() => {
                      setTheme("light");
                      toast({
                        title: "Theme updated",
                        description: "Light theme applied",
                        duration: 1000,
                      });
                    }}
                  >
                    <Sun className="h-4 w-4" />
                    <span>Light</span>
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    className="flex items-center justify-center gap-2"
                    onClick={() => {
                      setTheme("dark");
                      toast({
                        title: "Theme updated",
                        description: "Dark theme applied",
                        duration: 1000,
                      });
                    }}
                  >
                    <Moon className="h-4 w-4" />
                    <span>Dark</span>
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "outline"}
                    className="flex items-center justify-center gap-2"
                    onClick={() => {
                      setTheme("system");
                      toast({
                        title: "Theme updated",
                        description: "Using system preference",
                        duration: 1000,
                      });
                    }}
                  >
                    <Monitor className="h-4 w-4" />
                    <span>System</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Notifications Settings */}
          <div className="section-container">
            <div className="mb-4">
              <h2 className="section-title">NOTIFICATIONS</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    <label htmlFor="push-notifications" className="text-sm font-medium">
                      Push Notifications
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Receive notifications for new activity
                  </p>
                </div>
                <Switch 
                  id="push-notifications" 
                  defaultChecked 
                  onCheckedChange={(checked) => {
                    toast({
                      title: checked ? "Notifications enabled" : "Notifications disabled",
                      description: checked ? "You will receive push notifications" : "Push notifications turned off",
                      duration: 1000,
                    });
                  }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4" />
                    <label htmlFor="sound" className="text-sm font-medium">
                      Sound Effects
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Play sounds for app interactions
                  </p>
                </div>
                <Switch 
                  id="sound" 
                  onCheckedChange={(checked) => {
                    toast({
                      title: checked ? "Sound effects enabled" : "Sound effects disabled",
                      description: checked ? "You will hear sound effects" : "Sound effects turned off",
                      duration: 1000,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* About & Legal */}
          <div className="section-container">
            <div className="mb-4">
              <h2 className="section-title">ABOUT & LEGAL</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Info className="mr-2 h-4 w-4" />
                About Pregnancy Journal
              </Button>
              
              <Button variant="outline" className="w-full justify-start" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Terms & Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <BottomBar />
    </div>
  );
};

export default Settings;
