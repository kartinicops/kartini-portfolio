"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Frontend Developer",
    company: "PT Dua Puluh Tiga",
    location: "Jakarta, Indonesia",
    period: "Jun 2024 - Dec 2024",
    type: "Full-time",
    description: [
      "Developed Sales Monitoring and Purchasing Dashboard features",
      "Implemented design, API integration, and testing across multiple projects",
      "Collaborated on frontend development for various enterprise solutions",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "PT. Bank Rakyat Indonesia (Persero) Tbk",
    location: "Jakarta, Indonesia",
    period: "Jul 2024 - Sep 2024",
    type: "Internship",
    description: [
      "Developed and optimized frontend features for the Merchant Management System platform",
      "Collaborated with backend developers to integrate RESTful APIs for managing merchant data",
      "Participated in team meetings to discuss project progress and implemented feedback",
    ],
  },
  {
    title: "Staff",
    company: "HMIF ITB",
    location: "Bandung, Indonesia",
    period: "Aug 2022 - Present",
    type: "Organization",
    description: [
      "Mentored new students during SPARTA 2022 orientation",
      "Contributed to organizing the HMIF July 2022 graduation ceremony",
      "Engaged in ongoing activities within HMIF ITB, fostering a supportive community",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            My professional journey in frontend development and community engagement
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">{exp.title}</CardTitle>
                    <p className="text-lg font-medium text-muted-foreground mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="secondary">{exp.type}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
