"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  stargazers_count: number
  language: string | null
}

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch("https://api.github.com/users/Mecduda99/repos?sort=updated&per_page=10")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("[v0] Erro ao buscar repositórios:", error)
        setLoading(false)
      })
  }, [])

  const visibleRepos = repos.slice(currentIndex, currentIndex + 4)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(repos.length - 4, prev + 1))
  }

  if (loading) {
    return (
      <section id="projects" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">Carregando projetos...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Projetos em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Confira meus projetos mais recentes do GitHub demonstrando minhas habilidades em desenvolvimento front-end.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {visibleRepos.map((repo) => (
              <Card
                key={repo.id}
                className="overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
                    <Github className="h-5 w-5 text-primary" />
                    {repo.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed min-h-[3rem]">
                    {repo.description || "Sem descrição disponível"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.language && <Badge variant="secondary">{repo.language}</Badge>}
                    {repo.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="outline">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button size="sm" asChild>
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          {repos.length > 4 && (
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={handlePrev} disabled={currentIndex === 0}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleNext} disabled={currentIndex >= repos.length - 4}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
