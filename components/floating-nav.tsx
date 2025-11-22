"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

// Custom 9-dot grid icon that transforms to symmetric X when open
const MenuIcon = ({ className = "", isOpen = false }: { className?: string; isOpen?: boolean }) => {
  if (isOpen) {
    // Symmetric X icon
    return (
      <svg 
        width="18" 
        height="18" 
        viewBox="0 0 18 18" 
        className={`transform transition-all duration-300 ease-in-out ${className}`}
      >
        <line 
          x1="4" 
          y1="4" 
          x2="14" 
          y2="14" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <line 
          x1="14" 
          y1="4" 
          x2="4" 
          y2="14" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
    )
  }

  // 9-dot grid icon
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 18 18" 
      className={`transform transition-all duration-300 ease-in-out ${className}`}
    >
      {/* Top row */}
      <circle cx="3" cy="3" r="1.5" fill="currentColor" className="transition-all duration-300" />
      <circle cx="9" cy="3" r="1.5" fill="currentColor" className="transition-all duration-300" />
      <circle cx="15" cy="3" r="1.5" fill="currentColor" className="transition-all duration-300" />
      
      {/* Middle row */}
      <circle cx="3" cy="9" r="1.5" fill="currentColor" className="transition-all duration-300" />
      <circle cx="9" cy="9" r="1.5" fill="currentColor" className="transition-all duration-300" />
      <circle cx="15" cy="9" r="1.5" fill="currentColor" className="transition-all duration-300" />
      
      {/* Bottom row */}
      <circle cx="3" cy="15" r="1.5" fill="currentColor" className="transition-all duration-300" />
      <circle cx="9" cy="15" r="1.5" fill="currentColor" className="transition-all duration-300" />
      <circle cx="15" cy="15" r="1.5" fill="currentColor" className="transition-all duration-300" />
    </svg>
  )
}

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["hero", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobileMenuOpen) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMobileMenuOpen])

  const navItems = [
    { href: "#hero", label: "Home", id: "hero", number: "01" },
    { href: "#experience", label: "Experience", id: "experience", number: "02" },
    { href: "#projects", label: "Projects", id: "projects", number: "03" },
    { href: "#skills", label: "Skills", id: "skills", number: "04" },
    { href: "#contact", label: "Contact", id: "contact", number: "05" },
  ]

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Ultra Minimalist Navbar */}
      <nav
        className={`fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "scale-90 opacity-90 translate-y-1"
            : "scale-100 opacity-100 translate-y-0"
        }`}
      >
        <div className="bg-white/5 dark:bg-black/20 backdrop-blur-3xl border border-white/10 dark:border-white/5 rounded-2xl px-6 py-3 flex items-center gap-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/30">
          {/* Desktop Navigation - Clean text with spotlight effect */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-all duration-500 hover:scale-110 transform group ${
                  activeSection === item.id 
                    ? "text-primary scale-125 text-base" 
                    : "text-foreground/60 hover:text-primary text-sm"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Enhanced spotlight effect for active item */}
                {activeSection === item.id && (
                  <div className="absolute inset-0 -inset-x-4 -inset-y-2 bg-gradient-radial from-primary/25 via-primary/15 to-transparent rounded-xl animate-pulse" />
                )}
                
                {/* Hover spotlight effect */}
                <div className="absolute inset-0 -inset-x-3 -inset-y-1 bg-gradient-radial from-primary/20 via-primary/8 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Underline animation with gradient */}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-500 ${
                    activeSection === item.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle with enhanced animation */}
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.preventDefault()
                setTheme(theme === "dark" ? "light" : "dark")
              }}
              className="rounded-xl w-10 h-10 p-0 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:rotate-180 group"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-foreground group-hover:text-primary transition-all duration-300" />
              ) : (
                <Moon className="h-4 w-4 text-foreground group-hover:text-primary transition-all duration-300" />
              )}
            </Button>

            {/* Mobile Menu Toggle - 9-dot grid to symmetric X animation */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden rounded-xl w-10 h-10 p-0 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 hover:scale-110 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon 
                className="text-primary group-hover:text-secondary transition-colors duration-300" 
                isOpen={isMobileMenuOpen}
              />
            </Button>
          </div>
        </div>
      </nav>

      {/* Powerful Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Enhanced Backdrop */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-2xl animate-in fade-in duration-500"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Dynamic Mouse Glow Effect */}
          <div
            className="absolute w-96 h-96 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              transform: `scale(${isMobileMenuOpen ? 1 : 0})`,
            }}
          />

          {/* Menu Content with staggered animations */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
              {/* Navigation Items with enhanced animations */}
              <div className="space-y-4">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group block animate-in slide-in-from-left duration-700 fill-mode-both"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 150}ms`,
                      }}
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-primary/30 group">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <span className="text-primary/60 font-mono text-sm font-light">
                              {item.number}
                            </span>
                            <h2 className={`text-xl font-light tracking-wider transition-all duration-500 ${
                              isActive ? 'text-primary' : 'text-white group-hover:text-primary'
                            }`}>
                              {item.label}
                            </h2>
                          </div>
                          
                          {/* Active indicator with spotlight effect */}
                          {isActive && (
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-gradient-radial from-primary to-primary/60 animate-pulse shadow-lg shadow-primary/50" />
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '200ms' }} />
                            </div>
                          )}
                        </div>
                        
                        {/* Enhanced hover effect with spotlight */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Active item spotlight effect */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-primary/8 to-transparent animate-pulse" />
                        )}
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
