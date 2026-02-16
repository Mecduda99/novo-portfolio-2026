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
    { label: <><Memoji /></>, href: "#about" },
    { label: <><Butterfly /></>, href: "#experience" },
    { label: <><Computer /></>, href: "#projects" },
    { label: <><Heart /></>, href: "#skills" },
    { label: <><Briefcase /></>, href: "#" },
    { label: <><Button variant="ghost" className="rounded-full text-foreground/80 bg-primary hover:bg-secondary">Contate-me</Button></>, href: "#contact" },  
  ]

  return (
    <nav
      className={`${isScrolled ? "fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border mt-3 rounded-full" : "fixed top-0 left-0 right-0 z-50 transition-all duration-300"}`} 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 sm:h-20">
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
            className="md:hidden"
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
                className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-accent rounded-md transition-colors"
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
