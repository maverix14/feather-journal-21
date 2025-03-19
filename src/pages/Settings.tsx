
import React from "react";
import Header from "@/components/Header";
import BottomBar from "@/components/BottomBar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, Globe, Volume2, Bell, Info, FileText, Monitor } from "lucide-react";

const Settings = () => {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated",
    });
  };

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
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="h-4 w-4" />
                    <span>Light</span>
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    className="flex items-center justify-center gap-2"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="h-4 w-4" />
                    <span>Dark</span>
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "outline"}
                    className="flex items-center justify-center gap-2"
                    onClick={() => setTheme("system")}
                  >
                    <Monitor className="h-4 w-4" />
                    <span>System</span>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Moon className="w-4 h-4" />
                    <label htmlFor="dark-mode" className="text-sm font-medium">
                      Dark Mode
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Switch between light and dark themes
                  </p>
                </div>
                <Switch 
                  id="dark-mode" 
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  <label className="text-sm font-medium">Font Size</label>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  Adjust the size of text throughout the app
                </p>
                <Slider 
                  defaultValue={[16]} 
                  max={24} 
                  min={12} 
                  step={1}
                />
                <div className="flex justify-between text-xs text-muted-foreground pt-1">
                  <span>Small</span>
                  <span>Large</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <label className="text-sm font-medium">Language</label>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  Select your preferred language
                </p>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="pt">Português</SelectItem>
                  </SelectContent>
                </Select>
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
                <Switch id="push-notifications" defaultChecked />
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
                <Switch id="sound" />
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
          
          <Button onClick={handleSave} className="w-full neo-shadow hover:neo-inset transition-all duration-300">
            Save Changes
          </Button>
        </div>
      </main>
      
      <BottomBar />
    </div>
  );
};

export default Settings;
