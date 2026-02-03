import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Github, Mail, MapPin, FileText, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "./ui/button";
import { Link, useLocation } from "wouter";

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Papers', href: '/papers' },
  ];

  return (
    <aside className="w-full lg:w-[300px] lg:fixed lg:h-screen p-6 lg:p-12 flex flex-col justify-between bg-background/50 backdrop-blur-sm border-b lg:border-b-0 lg:border-r border-border z-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-primary/20">
            <img 
              src={personalInfo.avatar} 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{personalInfo.name}</h1>
            <p className="text-muted-foreground text-lg">{personalInfo.chineseName}</p>
          </div>
          <div className="space-y-1">
            <p className="font-medium text-primary">{personalInfo.title}</p>
            <p className="text-sm text-muted-foreground">{personalInfo.institution}</p>
          </div>
        </div>

        <nav className="space-y-2 hidden lg:block">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className={cn(
                "block transition-colors py-1 text-sm font-medium hover:translate-x-1 duration-200",
                location === item.href 
                  ? "text-primary font-semibold" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="space-y-6 mt-8 lg:mt-0">
        <div className="space-y-3 text-sm text-muted-foreground">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span className="truncate">{personalInfo.email}</span>
          </a>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
            <span>Github</span>
          </a>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
            <FileText className="w-4 h-4" />
            <span>Resume / CV</span>
          </a>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          className="rounded-full hover:bg-muted"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div>
    </aside>
  );
}
