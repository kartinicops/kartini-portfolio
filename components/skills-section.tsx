"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Award } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "Python", "C++", "C#", "Go", "Java", "Kotlin", "PHP"],
  },
  {
    title: "Frontend Technologies",
    icon: Code,
    skills: ["React.js", "Vue.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Flutter"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "Laravel/Lumen", "Django", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git", "Docker", "Figma", "Postman", "PgAdmin", "Object Oriented Programming"],
  },
]

const certifications = [
  "BRILiaN Internship Program in Application Management & Operation Division by PT Bank Rakyat Indonesia (Persero) Tbk (Sep 2024)",
]

const languages = ["Indonesian", "English"]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Technical skills and certifications I've acquired throughout my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 group-hover:text-accent transition-colors">
                    <IconComponent className="h-5 w-5" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="animate-scale-in animate-delay-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-5 w-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in animate-delay-400">
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, i) => (
                  <Badge key={i} variant="outline">
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
