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
    { name: 'Publications', href: '/publications' },
    { name: 'Travel', href: '/travel' },
  ];

  return (
    <aside className="z-10 flex w-full flex-col justify-between border-b border-border bg-background/50 p-5 backdrop-blur-sm lg:fixed lg:h-screen lg:w-[300px] lg:border-b-0 lg:border-r lg:p-12">
      <div className="space-y-5 lg:space-y-8">
        <div className="flex items-center gap-4 lg:block lg:space-y-4">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20 lg:size-24">
            <img 
              src={personalInfo.avatar} 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 space-y-2 lg:space-y-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">{personalInfo.name}</h1>
            </div>
            <div className="space-y-0.5 lg:space-y-1">
              <p className="text-sm font-medium text-primary lg:text-base">{personalInfo.title}</p>
              <p className="text-xs text-muted-foreground lg:text-sm">{personalInfo.institution}</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-1 lg:block lg:space-y-2">
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

      <div className="mt-3 flex items-center lg:mt-0 lg:block lg:space-y-6">
        <div className="hidden space-y-3 text-sm text-muted-foreground lg:block">
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
