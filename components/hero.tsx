"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/30 rounded-full filter blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-secondary/30 rounded-full filter blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>

        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              animation: "grid-move 20s linear infinite",
            }}
          ></div>
        </div>

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-foreground animate-slide-right" style={{ animationDelay: "0.1s" }}>
                PUSH YOUR
              </span>
              <span className="block text-foreground animate-slide-right" style={{ animationDelay: "0.2s" }}>
                LIMITS
              </span>
              <span className="block text-primary text-glow animate-slide-right" style={{ animationDelay: "0.3s" }}>
                BEYOND
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-muted-foreground max-w-xl text-pretty animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Elite training programs designed by world-class athletes. Transform your body, elevate your mind, achieve
              the impossible.
            </p>

            <div
              className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="ripple-button bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 font-bold w-full sm:w-auto group"
              >
                Start Your Journey
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("programs")}
                className="ripple-button border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 font-bold w-full sm:w-auto"
              >
                Explore Programs
              </Button>
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              {[
                { value: "5000+", label: "Members" },
                { value: "50+", label: "Trainers" },
                { value: "100+", label: "Classes" },
                { value: "98%", label: "Success" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="space-y-2 group cursor-pointer hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary text-glow group-hover:animate-pulse">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-[600px]">
              <div
                className="absolute top-0 right-0 w-80 h-96 glass-effect rounded-2xl p-6 animate-float"
                style={{
                  transform: `rotate(5deg) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                  transition: "transform 0.2s ease-out",
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-primary opacity-50" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="absolute top-20 right-12 w-80 h-96 glass-effect rounded-2xl p-6 glow-border animate-float-delayed"
                style={{
                  transform: `rotate(-3deg) translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
                  transition: "transform 0.2s ease-out",
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Active Today</div>
                      <div className="text-2xl font-bold text-primary">2,847</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Weekly Goal</span>
                      <span className="text-sm font-bold text-primary">87%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-secondary w-[87%] animate-progress"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute top-40 right-24 w-80 h-96 glass-effect rounded-2xl p-6 glow-border animate-pulse-slow"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  transition: "transform 0.2s ease-out",
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-24 h-24 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xl font-bold text-foreground">Premium Training</div>
                    <div className="text-sm text-muted-foreground">Join 5000+ elite athletes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection("programs")}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
