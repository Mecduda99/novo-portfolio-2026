"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Briefcase, Heart, Menu, X } from "lucide-react"
import { Butterfly } from "../icons/butterfly"
import { Computer } from "../icons/computer"
import { Memoji } from "../icons/memoji"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: <><Memoji /> <span className="md:hidden text-sm">Sobre</span></>, href: "#about" },
    { label: <><Butterfly /> <span className="md:hidden text-sm">Experiência</span></>, href: "#experience" },
    { label: <><Computer /> <span className="md:hidden text-sm">Projetos</span></>, href: "#projects" },
    { label: <><Heart /> <span className="md:hidden text-sm">Habilidades</span></>, href: "#skills" },
    { label: <><Briefcase /> <span className="md:hidden text-sm">Portfólio</span></>, href: "#" },
    { label: <><Button variant="ghost" className="rounded-full text-foreground/80 bg-primary hover:bg-secondary">Contate-me</Button></>, href: "#contact" },  
  ]

  return (
    <nav
      className={`z-50 mt-3 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "md:bg-background/80 md:border md:backdrop-blur-md" : "border-none bg-transparent"} ${isMobileMenuOpen ? "left-0 right-0 bg-transparent backdrop-blur-md" : "left-1/2 -translate-x-1/2 rounded-full"}`} 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end md:justify-center h-16 sm:h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className="group text-sm lg:text-base rounded-full text-foreground/80 hover:bg-transparent hover:text-secondary"
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden bg-transparent backdrop-blur-md ${!isMobileMenuOpen ? "-mr-[5rem]" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-foreground/80 hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
