"use client"

import { useState } from "react"

const transformations = [
  {
    name: "John Smith",
    duration: "6 months",
    program: "Strength Training",
    beforeImage: "/overweight-man-before-fitness.jpg",
    afterImage: "/fit-muscular-man-after-fitness.jpg",
  },
  {
    name: "Lisa Martinez",
    duration: "4 months",
    program: "HIIT & Nutrition",
    beforeImage: "/woman-before-fitness.png",
    afterImage: "/fit-woman-transformation.png",
  },
  {
    name: "David Chen",
    duration: "8 months",
    program: "Hypertrophy",
    beforeImage: "/skinny-man-before.png",
    afterImage: "/muscular-man-after-muscle-gain.jpg",
  },
]

export function Transformations() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
  }

  return (
    <section id="transformations" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Success </span>
            <span className="text-primary text-glow">Stories</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real transformations from real people
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Slider */}
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="relative">
              {transformations.map((transformation, index) => (
                <div
                  key={index}
                  className={`${index === currentIndex ? "block" : "hidden"} transition-all duration-500`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Before */}
                    <div className="relative group overflow-hidden">
                      <div className="absolute top-4 left-4 bg-muted/90 text-foreground px-4 py-2 rounded-lg font-bold text-sm z-10">
                        BEFORE
                      </div>
                      <img
                        src={transformation.beforeImage || "/placeholder.svg"}
                        alt={`${transformation.name} before`}
                        className="w-full h-[400px] sm:h-[500px] object-cover"
                      />
                    </div>

                    {/* After */}
                    <div className="relative group overflow-hidden">
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm z-10">
                        AFTER
                      </div>
                      <img
                        src={transformation.afterImage || "/placeholder.svg"}
                        alt={`${transformation.name} after`}
                        className="w-full h-[400px] sm:h-[500px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 sm:p-8 bg-card/50">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{transformation.name}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {transformation.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        {transformation.program}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Previous transformation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Next transformation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
                aria-label={`Go to transformation ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
