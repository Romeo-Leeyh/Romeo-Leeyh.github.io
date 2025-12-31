import { Sidebar } from "@/components/Sidebar";
import { personalInfo, education, researchInterests, projects, publications, awards } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      
      <main className="flex-1 lg:ml-[300px] p-6 lg:p-12 max-w-4xl mx-auto space-y-20">
        
        {/* About Section */}
        <section id="about" className="space-y-8 pt-8 lg:pt-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">About</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {personalInfo.bio}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
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
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Separator className="opacity-50" />

        {/* Research Interests */}
        <section id="research" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h2 className="text-2xl font-bold tracking-tight">Research Interests</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {researchInterests.map((item, index) => (
              <Card key={index} className="glass-card border-none shadow-none bg-secondary/30">
                <CardHeader>
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
        </section>

        <Separator className="opacity-50" />

        {/* Projects */}
        <section id="projects" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <h2 className="text-2xl font-bold tracking-tight">Selected Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card group">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit font-normal text-xs">
                      {project.period}
                    </Badge>
                  </div>
                  <CardDescription className="font-medium text-primary/80">
                    {project.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal bg-background/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="opacity-50" />

        {/* Publications */}
        <section id="publications" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <h2 className="text-2xl font-bold tracking-tight">Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="group relative pl-4 border-l-2 border-border hover:border-primary transition-colors duration-300">
                <div className="space-y-1">
                  <h3 className="font-medium leading-snug group-hover:text-primary transition-colors">
                    <a href={pub.link} target="_blank" rel="noreferrer" className="flex items-inline gap-1">
                      {pub.title}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pub.authors}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                    <span className="font-medium text-foreground/80">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="pt-20 pb-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Yihui Li. Built with React & Tailwind.</p>
        </footer>

      </main>
    </div>
  );
}
