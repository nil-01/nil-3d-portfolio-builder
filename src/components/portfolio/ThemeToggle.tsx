
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/ThemeContext";
import { SunIcon, MoonIcon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-2 bg-portfolio-primary/10 dark:bg-portfolio-primary/20 rounded-full px-4 py-2 transition-all duration-300 hover:shadow-md">
      <SunIcon className={`h-4 w-4 transition-all duration-300 ${theme === 'light' ? 'text-yellow-500 animate-pulse-custom' : 'text-portfolio-light/50'}`} />
      <Switch 
        checked={theme === 'dark'} 
        onCheckedChange={toggleTheme} 
        className="data-[state=checked]:bg-portfolio-primary data-[state=unchecked]:bg-slate-400 transition-colors"
      />
      <MoonIcon className={`h-4 w-4 transition-all duration-300 ${theme === 'dark' ? 'text-portfolio-primary animate-pulse-custom' : 'text-slate-400'}`} />
    </div>
  );
};

export default ThemeToggle;
