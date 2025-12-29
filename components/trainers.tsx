"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const trainers = [
  {
    name: "Mike Johnson",
    specialty: "HIIT & Cardio",
    rating: 4.9,
    reviews: 156,
    image: "/muscular-male-fitness-trainer.jpg",
  },
  {
    name: "Sarah Chen",
    specialty: "Strength & Hypertrophy",
    rating: 5.0,
    reviews: 203,
    image: "/female-strength-coach.png",
  },
  {
    name: "David Martinez",
    specialty: "CrossFit & Functional",
    rating: 4.8,
    reviews: 142,
    image: "/male-crossfit-coach.jpg",
  },
  {
    name: "Emma Wilson",
    specialty: "Yoga & Mobility",
    rating: 4.9,
    reviews: 178,
    image: "/female-yoga-instructor.png",
  },
]

export function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (trainerName: string) => {
    setSelectedTrainer(trainerName)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedTrainer(null), 300)
  }

  return (
    <section id="trainers" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Meet Your </span>
            <span className="text-primary text-glow">Trainers</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class coaches dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl overflow-hidden glow-border hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{trainer.name}</h3>
                <p className="text-sm text-primary mb-3">{trainer.specialty}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(trainer.rating) ? "text-secondary" : "text-muted"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({trainer.reviews})</span>
                </div>

                <Button
                  onClick={() => openModal(trainer.name)}
                  className="w-full ripple-button bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Book Session
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="glass-effect rounded-2xl p-6 sm:p-8 max-w-md w-full border border-primary/30 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Book with {selectedTrainer}</h3>
              <button onClick={closeModal} className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Select Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Select Time</label>
                <select className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                  <option>09:00 AM</option>
                  <option>11:00 AM</option>
                  <option>02:00 PM</option>
                  <option>04:00 PM</option>
                  <option>06:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Session Type</label>
                <select className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                  <option>Personal Training (1 hour)</option>
                  <option>Assessment Session (30 min)</option>
                  <option>Consultation (15 min)</option>
                </select>
              </div>

              <Button className="w-full ripple-button bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 mt-6">
                Confirm Booking
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
