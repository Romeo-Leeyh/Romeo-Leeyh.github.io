import { Sidebar } from "@/components/Sidebar";
import { personalInfo, education, researchInterests, awards, academicLeadership } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      
      <main className="flex-1 lg:ml-[300px] p-6 lg:p-12 max-w-4xl mx-auto space-y-20">
        
        {/* About Section */}
        <section id="about" className="space-y-12 pt-8 lg:pt-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">About</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {personalInfo.bio}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-1">
                    <div className="font-medium">{edu.degree}</div>
                    <div className="text-sm text-muted-foreground">{edu.school}, {edu.year}</div>
                    {edu.details && <div className="text-xs text-muted-foreground/80 mt-1">{edu.details}</div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Honors & Awards</h3>
              <ul className="space-y-2">
                {awards.map((award, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    <span>
                      {award.name}
                      <span className="ml-1 text-xs text-muted-foreground/60">({award.year})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="opacity-50" />

          {/* Research Interests */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Research Interests</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {researchInterests.map((item, index) => (
                <Card key={index} className="glass-card border-none shadow-none bg-secondary/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="opacity-50" />

          {/* Academic Leadership */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Academic Leadership</h3>
            <div className="space-y-6">
              {academicLeadership.map((item, index) => (
                <div key={index} className="space-y-1 pl-4 border-l-2 border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-medium text-sm">{item.title}</div>
                    <span className="text-xs text-muted-foreground/70 shrink-0">{item.period}</span>
                  </div>
                  <div className="text-sm text-primary/80 font-medium">{item.role}</div>
                  <div className="text-xs text-muted-foreground/80">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="pt-20 pb-8 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Yihui Li. Built with React & Tailwind.</p>
        </footer>

      </main>
    </div>
  );
}
