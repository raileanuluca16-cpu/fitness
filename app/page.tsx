"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Programs } from "@/components/programs"
import { Timetable } from "@/components/timetable"
import { Trainers } from "@/components/trainers"
import { Pricing } from "@/components/pricing"
import { Transformations } from "@/components/transformations"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { FloatingActions } from "@/components/floating-actions"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Timetable />
      <Trainers />
      <Pricing />
      <Transformations />
      <Testimonials />
      <FAQ />
      <Contact />
      <FloatingActions />
    </main>
  )
}
