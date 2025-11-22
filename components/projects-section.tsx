"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const projects = [
  {
    title: "Face Recognition System",
    period: "Nov 2022 - Present",
    description:
      "Computer vision system utilizing Eigenfaces methodology for accurate facial recognition and real-time identification.",
    tech: ["Python", "Computer Vision"],
    category: "Computer Vision",
    github: "https://github.com/kartinicops/Algeo02-21026",
  },
  {
    title: "Simple Chat-GPT",
    period: "Apr 2023 - Present",
    description:
      "Intelligent chatbot leveraging advanced string matching algorithms for efficient natural language query processing.",
    tech: ["String Matching", "KMP", "Boyer-Moore"],
    category: "NLP",
    github: "https://github.com/kartinicops/TUBES3_13521026",
  },
  {
    title: "Treasure Maze Solver",
    period: "Mar 2023 - Present",
    description:
      "Advanced maze solving application implementing BFS and DFS algorithms with optimal treasure collection routes.",
    tech: ["C#", ".NET"],
    category: "Algorithm",
    github: "https://github.com/kartinicops/Tubes2_BikiniBot",
  },
  {
    title: "Finding Home",
    period: "Apr 2023 - Present",
    description:
      "Intelligent pathfinding application utilizing advanced algorithms for optimal route calculation on Bandung city infrastructure.",
    tech: ["Python"],
    category: "AI/ML",
    github: "https://github.com/kartinicops/Tucil3_13521016_13521026",
  },
  {
    title: "Galaxio Game AI",
    period: "Apr 2023 - Present",
    description:
      "Strategic artificial intelligence bot for competitive gaming with dynamic tactical decision-making capabilities.",
    tech: ["Java", "NodeJS", ".Net Core 3.1"],
    category: "Game Dev",
    github: "https://github.com/kartinicops/Tubes1_muggle",
  },
  {
    title: "Concurrency Control Protocol",
    period: "Dec 2023 - Present",
    description:
      "Advanced transaction management system implementing sophisticated concurrency control algorithms for database optimization.",
    tech: ["HTML", "JavaScript", "Python"],
    category: "Algorithm",
    github: "https://concurrency-control.vercel.app",
    isLiveDemo: true,
  },
  {
    title: "SweepIn",
    period: "Apr 2024 - Present",
    description:
      "Revolutionary attendance management system with QR code functionality for efficient personnel tracking and real-time monitoring.",
    tech: ["Next.js", "Express.js", "MySQL"],
    category: "Full-Stack",
    github: "https://gitlab.informatika.org/sweepin",
    isGitlab: true,
  },
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      }
    }, 4000)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isDragging])

  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    setTranslateX(diff)
  }

  const handleEnd = () => {
    if (!isDragging) return

    const threshold = isMobile ? 50 : 100
    if (translateX > threshold) {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    } else if (translateX < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }

    setIsDragging(false)
    setTranslateX(0)
  }

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-4 sm:mb-6">Projects</h2>
          <div className="w-12 h-px bg-foreground/20 mx-auto"></div>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-x"
            onMouseDown={(e) => !isMobile && handleStart(e.clientX)}
            onMouseMove={(e) => !isMobile && handleMove(e.clientX)}
            onMouseUp={() => !isMobile && handleEnd()}
            onMouseLeave={() => !isMobile && handleEnd()}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? translateX : 0}px))`,
              }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight text-foreground/10 leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <Badge variant="outline" className="text-xs font-light px-3 py-1">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight px-4 sm:px-0">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-mono">{project.period}</p>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm sm:max-w-lg mx-auto px-4 sm:px-0">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 px-4 sm:px-0">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs text-muted-foreground/70 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center gap-4 pt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs font-light"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        {project.isLiveDemo ? (
                          <>
                            <ExternalLink className="w-3 h-3 mr-2" />
                            Live Demo
                          </>
                        ) : (
                          <>
                            <Github className="w-3 h-3 mr-2" />
                            {project.isGitlab ? "View on GitLab" : "View Code"}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full opacity-0 md:opacity-50 hover:opacity-100 transition-opacity hidden sm:flex"
            onClick={prevProject}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full opacity-0 md:opacity-50 hover:opacity-100 transition-opacity hidden sm:flex"
            onClick={nextProject}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          <div className="flex justify-center gap-1 sm:gap-1.5 mt-8 sm:mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 sm:w-1 sm:h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-foreground w-4 sm:w-6" : "bg-foreground/20"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
