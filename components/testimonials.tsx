"use client"

import { useState } from "react"

const testimonials = [
  {
    name: "Marcus Thompson",
    role: "Software Engineer",
    rating: 5,
    text: "This gym has completely transformed my life. The trainers are exceptional, the equipment is top-notch, and the community is incredibly supportive.",
    avatar: "/professional-man-headshot.png",
  },
  {
    name: "Jennifer Lee",
    role: "Marketing Director",
    rating: 5,
    text: "Best investment I've ever made in myself. The personalized training programs and nutrition guidance have helped me achieve results I never thought possible.",
    avatar: "/professional-woman-headshot.png",
  },
  {
    name: "Robert Garcia",
    role: "Business Owner",
    rating: 5,
    text: "The attention to detail and commitment to member success is unparalleled. I've been to many gyms, but this one stands out in every way.",
    avatar: "/mature-man-headshot.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Teacher",
    rating: 5,
    text: "The community here is amazing. Everyone is supportive and encouraging. The classes are challenging but fun, and I always leave feeling accomplished.",
    avatar: "/young-woman-headshot.png",
  },
]

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">What Our </span>
            <span className="text-primary text-glow">Members Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied members transforming their lives
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary"
                />
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
