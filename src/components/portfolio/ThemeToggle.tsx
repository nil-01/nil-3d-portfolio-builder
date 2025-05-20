
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/ThemeContext";
import { SunIcon, MoonIcon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <SunIcon className={`h-4 w-4 ${theme === 'light' ? 'text-yellow-500' : 'text-portfolio-light/50'}`} />
      <Switch 
        checked={theme === 'dark'} 
        onCheckedChange={toggleTheme} 
        className="data-[state=checked]:bg-portfolio-primary data-[state=unchecked]:bg-slate-400"
      />
      <MoonIcon className={`h-4 w-4 ${theme === 'dark' ? 'text-portfolio-primary' : 'text-slate-400'}`} />
    </div>
  );
};

export default ThemeToggle;
