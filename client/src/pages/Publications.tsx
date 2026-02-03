import { Sidebar } from "@/components/Sidebar";
import { publications } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, ArrowUpRight, Quote, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Publications() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Citation copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      
      <main className="flex-1 lg:ml-[300px] p-6 lg:p-12 max-w-4xl mx-auto space-y-12">
        <section className="space-y-8 pt-8 lg:pt-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Publications</h2>
            <p className="text-muted-foreground">Academic papers, conference proceedings, and journal articles.</p>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="group relative pl-4 border-l-2 border-border hover:border-primary transition-colors duration-300 flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="space-y-2 flex-1">
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
                    <a href={pub.link} target="_blank" rel="noreferrer" className="flex items-inline gap-1">
                      {pub.title}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {pub.authors}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground/70">
                    <span className="font-semibold text-foreground/80">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                  </div>
                  
                  <div className="pt-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Quote className="h-3 w-3" />
                          Cite
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Cite this publication</DialogTitle>
                          <DialogDescription>
                            Copy the citation in BibTeX or IEEE format.
                          </DialogDescription>
                        </DialogHeader>
                        <Tabs defaultValue="bibtex" className="w-full">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="bibtex">BibTeX</TabsTrigger>
                            <TabsTrigger value="ieee">IEEE</TabsTrigger>
                          </TabsList>
                          <TabsContent value="bibtex" className="mt-4">
                            <div className="relative rounded-md bg-muted p-4">
                              <pre className="text-xs font-mono whitespace-pre-wrap break-all">{(pub as any).bibtex}</pre>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="absolute right-2 top-2 h-6 w-6"
                                onClick={() => handleCopy((pub as any).bibtex || "")}
                              >
                                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                              </Button>
                            </div>
                          </TabsContent>
                          <TabsContent value="ieee" className="mt-4">
                            <div className="relative rounded-md bg-muted p-4">
                              <p className="text-sm">{(pub as any).ieee}</p>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="absolute right-2 top-2 h-6 w-6"
                                onClick={() => handleCopy((pub as any).ieee || "")}
                              >
                                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                              </Button>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {/* Image Section */}
                {(pub as any).image && (
                  <div className="w-full md:w-40 aspect-video md:aspect-square rounded-lg overflow-hidden border border-border bg-muted shrink-0">
                    <img 
                      src={(pub as any).image} 
                      alt={pub.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                )}
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
