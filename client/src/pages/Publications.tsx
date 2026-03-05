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
import { ArrowUpRight, Quote, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function PublicationItem({ pub }: { pub: typeof publications[0] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Citation copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative pl-4 border-l-2 border-border hover:border-primary transition-colors duration-300 flex flex-col md:flex-row justify-between items-start gap-6">
      <div className="space-y-2 flex-1">
        <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
          {pub.link ? (
            <a href={pub.link} target="_blank" rel="noreferrer" className="flex items-inline gap-1">
              {pub.title}
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            <span>{pub.title}</span>
          )}
        </h3>
        <p className="text-xs text-muted-foreground">
          {pub.authors}
        </p>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground/70">
          <span className="font-semibold text-foreground/80">{pub.journal}</span>
          <span>&bull;</span>
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
                    <pre className="text-xs font-mono whitespace-pre-wrap break-all">{pub.bibtex}</pre>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-2 top-2 h-6 w-6"
                      onClick={() => handleCopy(pub.bibtex || "")}
                    >
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="ieee" className="mt-4">
                  <div className="relative rounded-md bg-muted p-4">
                    <p className="text-sm">{pub.ieee}</p>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-2 top-2 h-6 w-6"
                      onClick={() => handleCopy(pub.ieee || "")}
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
    </div>
  );
}

export default function Publications() {
  const journalPapers = publications.filter((p) => p.type === "journal");
  const conferencePapers = publications.filter((p) => p.type === "conference");
  const workingPapers = publications.filter((p) => p.type === "working");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      
      <main className="flex-1 lg:ml-[300px] p-6 lg:p-12 max-w-4xl mx-auto space-y-12">
        <section className="space-y-8 pt-8 lg:pt-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Publications</h2>
            <p className="text-muted-foreground">Academic papers, conference proceedings, and journal articles.</p>
          </div>

          {/* Journal Papers */}
          {journalPapers.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-tight">Journal Papers</h3>
              <div className="space-y-8">
                {journalPapers.map((pub, index) => (
                  <PublicationItem key={`journal-${index}`} pub={pub} />
                ))}
              </div>
            </div>
          )}

          {/* Conference Papers */}
          {conferencePapers.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-tight">Conference Papers</h3>
              <div className="space-y-8">
                {conferencePapers.map((pub, index) => (
                  <PublicationItem key={`conf-${index}`} pub={pub} />
                ))}
              </div>
            </div>
          )}

          {/* Working Papers */}
          {workingPapers.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-tight">Working Papers</h3>
              <div className="space-y-8">
                {workingPapers.map((pub, index) => (
                  <PublicationItem key={`working-${index}`} pub={pub} />
                ))}
              </div>
            </div>
          )}
        </section>

        <footer className="pt-20 pb-8 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Yihui Li. Built with React & Tailwind.</p>
        </footer>
      </main>
    </div>
  );
}
