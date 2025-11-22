"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Linkedin, Github, ExternalLink, Code, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden bg-gradient-minimal dark:bg-gradient-minimal-dark pt-20 sm:pt-24 md:pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 6 : 12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-gentle-float hover-glow"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {!isMobile && (
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      )}

      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        <div className={`space-y-6 md:space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Mobile Profile Image */}
          <div className="lg:hidden flex justify-center mb-6 md:mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl hover-lift transition-all duration-500 group-hover:border-primary/80 group-hover:shadow-primary/25">
                <Image
                  src="/my-profile.jpeg"
                  alt="Kartini Copa"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center animate-subtle-glow shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Code className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-background border-2 border-primary/40 rounded-full flex items-center justify-center shadow-lg hover:border-primary/60 hover:scale-110 transition-all duration-300">
                <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-primary animate-pulse" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-balance leading-tight tracking-tight text-center lg:text-left">
              <span className="animate-fade-in-up animate-delay-300 block text-foreground hover:text-primary transition-colors duration-500">
                Kartini
              </span>
              <span className="animate-fade-in-up animate-delay-400 block text-foreground hover:text-primary transition-all duration-300 inline-block">
                Copa
              </span>
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              <Badge
                variant="secondary"
                className="animate-fade-in-up animate-delay-100 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Frontend Developer
              </Badge>
              <Badge
                variant="outline"
                className="animate-fade-in-up animate-delay-200 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm font-medium border-primary/50 hover:border-primary/80 hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                ITB Student
              </Badge>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed animate-fade-in-up animate-delay-500 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Creating beautiful, functional web experiences with modern technologies. Passionate about clean code and
              innovative solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 sm:space-y-3 animate-fade-in-up animate-delay-600 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group cursor-pointer">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
              <span className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300">
                Bandung, Indonesia
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group cursor-pointer">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
              <span className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300 break-all sm:break-normal">
                kartinicopa@gmail.com
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group cursor-pointer">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
              <span className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300">081248430740</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 animate-fade-in-up animate-delay-700">
            <Button
              asChild
              size="lg"
              className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 font-medium hover:scale-105 hover-glow transition-all duration-300 bg-primary hover:bg-primary/90 w-full xs:w-auto text-sm sm:text-base"
            >
              <a href="#contact">Let's Work Together</a>
            </Button>
            <div className="flex gap-2 w-full xs:w-auto">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="flex-1 xs:flex-none px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 font-medium hover:scale-105 transition-all duration-300 bg-transparent hover:bg-primary/10 border-primary/50 hover:border-primary/80 group text-xs sm:text-sm"
              >
                <a
                  href="https://drive.google.com/file/d/1m_y924CzBNn5i2lXSRWvD-nMHgVfZ1QF/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 sm:gap-2"
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  My CV
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="flex-1 xs:flex-none px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 font-medium hover:scale-105 transition-all duration-300 bg-transparent hover:bg-primary/10 border-primary/50 hover:border-primary/80 group text-xs sm:text-sm"
              >
                <a
                  href="https://drive.google.com/file/d/1e35TWXsqHyx36qMcmd_N3Qs42dHUOK0b/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 sm:gap-2"
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Certificate
                </a>
              </Button>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-2 justify-center xs:justify-start w-full xs:w-auto">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover:scale-110 hover:bg-primary/15 transition-all duration-300 p-2 sm:p-3 rounded-full"
              >
                <a href="https://linkedin.com/in/kartini-copa" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 hover:text-primary transition-colors duration-300" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover:scale-110 hover:bg-primary/15 transition-all duration-300 p-2 sm:p-3 rounded-full"
              >
                <a href="https://github.com/kartinicops" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5 hover:text-primary transition-colors duration-300" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Profile Image */}
        <div className={`hidden lg:block ${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}>
          <div className="relative flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl group-hover:from-primary/20 transition-all duration-500"></div>
              <div className="relative w-64 xl:w-72 h-64 xl:h-72 rounded-2xl overflow-hidden border-4 border-primary/40 shadow-2xl bg-gradient-accent-subtle hover:border-primary/70 transition-all duration-500 hover-lift group-hover:shadow-primary/30">
                <Image
                  src="/my-profile.jpeg"
                  alt="Kartini Copa"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-subtle-glow shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:shadow-primary/50">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-background border-2 border-primary/40 rounded-full flex items-center justify-center shadow-lg hover:border-primary/60 hover:scale-110 transition-all duration-300">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-secondary/80 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
                <div className="w-2 h-2 bg-background rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
