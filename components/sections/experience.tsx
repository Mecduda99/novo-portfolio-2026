import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Tech Lead Front End",
    company: "FIAP",
    period: "2023 — Presente",
    description:
      "Lidero a SQUAD Front-end responsável por sustentar, refatorar e inovar as Landing Pages de aulas da plataforma de Ensino Online Superior e MBA para alunos de todo o Brasil. Foco em entregar experiências de aprendizagem dinâmicas, escaláveis e de alta performance, garantindo as melhores práticas de desenvolvimento e arquitetura front-end.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Liderança Técnica", "Arquitetura Front-end"],
  },
  {
    title: "Programadora Júnior",
    company: "FIAP",
    period: "2021 — 2023",
    description:
      "Desenvolvi Landing Pages de aulas para a plataforma de Ensino Online Superior e MBA, contribuindo para uma nova experiência de aprendizagem dinâmica para alunos de todo o Brasil. Participei ativamente da implementação de componentes reutilizáveis e da otimização de performance das páginas.",
    technologies: ["JavaScript", "React", "HTML/CSS", "Git"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Experiência</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="self-start whitespace-nowrap">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-background">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
