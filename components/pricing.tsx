"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: [
      "Access to gym equipment",
      "5 group classes per month",
      "Locker room access",
      "Free Wi-Fi",
      "Mobile app access",
    ],
    recommended: false,
  },
  {
    name: "Pro",
    monthlyPrice: 89,
    yearlyPrice: 890,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "2 personal training sessions",
      "Nutrition consultation",
      "Guest passes (2/month)",
      "Access to spa facilities",
    ],
    recommended: true,
  },
  {
    name: "Elite",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Priority class booking",
      "Customized meal plans",
      "Recovery suite access",
      "24/7 gym access",
      "Exclusive events",
    ],
    recommended: false,
  },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-primary to-secondary"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Choose Your </span>
            <span className="text-primary text-glow">Plan</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Invest in yourself with our flexible membership options
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-muted rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-primary rounded-full transition-transform duration-300 ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              ></div>
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly
              <span className="ml-2 text-secondary">(Save 17%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-effect rounded-2xl p-8 ${
                plan.recommended ? "border-2 border-primary ring-4 ring-primary/20 scale-105" : "border border-border"
              } hover:scale-105 transition-all duration-300`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                  RECOMMENDED
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary text-glow">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/{isYearly ? "year" : "month"}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ripple-button py-6 text-lg font-semibold ${
                  plan.recommended
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                variant={plan.recommended ? "default" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
