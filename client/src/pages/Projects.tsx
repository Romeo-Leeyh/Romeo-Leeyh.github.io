import { Sidebar } from "@/components/Sidebar";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      
      <main className="flex-1 lg:ml-[300px] p-6 lg:p-12 max-w-4xl mx-auto space-y-12">
        <section className="space-y-8 pt-8 lg:pt-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
            <p className="text-muted-foreground">A collection of research and development projects I have led or contributed to.</p>
          </div>
          
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card group overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="w-fit font-normal text-xs shrink-0">
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
                  </div>

                  {/* Right-side image */}
                  {(project as any).image && (
                    <div className="md:w-56 md:shrink-0 border-t md:border-t-0 md:border-l border-border overflow-hidden bg-muted/20">
                      <img
                        src={(project as any).image}
                        alt={project.title}
                        className="w-full h-44 md:h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </Card>
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
