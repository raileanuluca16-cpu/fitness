"use client"

import type React from "react"

import { useState } from "react"

const faqs = [
  {
    question: "What are your gym hours?",
    answer:
      "We're open Monday to Friday from 5:00 AM to 11:00 PM, Saturday and Sunday from 7:00 AM to 9:00 PM. Elite members have 24/7 access.",
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Yes! We have certified personal trainers available for one-on-one sessions, small group training, and customized programs. Pro and Elite members get complimentary sessions.",
  },
  {
    question: "Can I pause my membership?",
    answer:
      "Yes, you can pause your membership for up to 3 months per year. Simply notify us 7 days in advance and we'll handle the rest.",
  },
  {
    question: "What equipment do you have?",
    answer:
      "We have a full range of cardio equipment, free weights, resistance machines, functional training areas, Olympic platforms, and specialized equipment for all training styles.",
  },
  {
    question: "Do you offer trial passes?",
    answer:
      "Yes! We offer a complimentary 3-day trial pass so you can experience our facilities and classes before committing to a membership.",
  },
  {
    question: "Are there locker rooms and showers?",
    answer:
      "We have spacious, clean locker rooms with showers, changing areas, and complimentary toiletries. Pro and Elite members also get access to our spa facilities.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      toggleFAQ(index)
    }
  }

  return (
    <section id="faq" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Frequently Asked </span>
            <span className="text-primary text-glow">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about joining EliteFit
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-primary"
            >
              <button
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-foreground pr-8">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
