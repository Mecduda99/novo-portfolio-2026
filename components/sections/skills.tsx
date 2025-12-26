import { Card, CardContent } from "@/components/ui/card"
import { Code2, Users, Server, Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Responsive Design"],
  },
  {
    title: "Liderança",
    icon: Users,
    skills: [
      "Liderança Técnica",
      "Gestão de Equipe",
      "Mentoria",
      "Code Review",
      "Arquitetura de Software",
      "Agile/Scrum",
    ],
  },
  {
    title: "Engenharia",
    icon: Server,
    skills: ["Design Patterns", "Clean Code", "Performance", "Acessibilidade", "SEO", "CI/CD"],
  },
  {
    title: "Ferramentas",
    icon: Sparkles,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Jest", "Storybook"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Habilidades</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Tecnologias e ferramentas que utilizo para criar experiências digitais de alta qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-foreground/80 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
