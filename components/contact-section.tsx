"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-card/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-pretty mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent/5 transition-colors">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">kartinicopa@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent/5 transition-colors">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">081248430740</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent/5 transition-colors">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Bandung, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/kartini-copa" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/kartinicops" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://drive.google.com/file/d/1m_y924CzBNn5i2lXSRWvD-nMHgVfZ1QF/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download CV"
                >
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <Card className="animate-scale-in animate-delay-200">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell me about your project or just say hello!" rows={5} />
                </div>

                <Button type="submit" className="w-full group">
                  <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
