

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export function Contact() {

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Vamos Conversar?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades e colaborações. Entre em contato!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50 hover:border-primary/50 transition-colors ">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:dudacav42@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      dudacav42@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/maria-eduarda-costa-vieira-05b15b212"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/maria-eduarda-costa-vieira-05b15b212
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GitHub</h3>
                    <a
                      href="https://github.com/Mecduda99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/Mecduda99
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>

        <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Maria Eduarda. Desenvolvido com ♥ usando Next.js e Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  )
}
