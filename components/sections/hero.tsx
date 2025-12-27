import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Olá, sou{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-shine">
              Maria Eduarda
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">Tech Lead Front End</p>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed text-pretty">
          Apaixonada por criar experiências digitais acessíveis e interfaces pixel-perfect que combinam design cuidadoso
          com engenharia robusta. Especializada em desenvolvimento web moderno e inovação tecnológica.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild className="group">
            <a href="#projects">
              Ver Projetos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Entrar em Contato</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button variant="ghost" size="icon" asChild className="hover:text-primary">
            <a href="https://github.com/Mecduda99" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:text-primary">
            <a
              href="https://www.linkedin.com/in/maria-eduarda-costa-vieira-05b15b212"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:text-primary">
            <a href="mailto:dudacav42@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
