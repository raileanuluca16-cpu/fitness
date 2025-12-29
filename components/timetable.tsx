"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const schedule = {
  Monday: [
    { time: "06:00 AM", class: "HIIT Bootcamp", trainer: "Mike Johnson", type: "Cardio", spots: 12 },
    { time: "09:00 AM", class: "Strength & Power", trainer: "Sarah Chen", type: "Strength", spots: 8 },
    { time: "12:00 PM", class: "Yoga Flow", trainer: "Emma Wilson", type: "Group", spots: 20 },
    { time: "05:00 PM", class: "CrossFit", trainer: "David Martinez", type: "Strength", spots: 15 },
    { time: "07:00 PM", class: "Spin Class", trainer: "Lisa Anderson", type: "Cardio", spots: 18 },
  ],
  Tuesday: [
    { time: "06:00 AM", class: "Morning Cardio", trainer: "Mike Johnson", type: "Cardio", spots: 15 },
    { time: "10:00 AM", class: "Hypertrophy Training", trainer: "Sarah Chen", type: "Strength", spots: 10 },
    { time: "01:00 PM", class: "Pilates Core", trainer: "Emma Wilson", type: "Group", spots: 16 },
    { time: "06:00 PM", class: "Boxing Fitness", trainer: "David Martinez", type: "Cardio", spots: 14 },
  ],
  Wednesday: [
    { time: "06:00 AM", class: "HIIT Bootcamp", trainer: "Mike Johnson", type: "Cardio", spots: 12 },
    { time: "09:00 AM", class: "Strength & Power", trainer: "Sarah Chen", type: "Strength", spots: 8 },
    { time: "12:00 PM", class: "Yoga Flow", trainer: "Emma Wilson", type: "Group", spots: 20 },
    { time: "05:00 PM", class: "CrossFit", trainer: "David Martinez", type: "Strength", spots: 15 },
  ],
  Thursday: [
    { time: "06:00 AM", class: "Morning Cardio", trainer: "Mike Johnson", type: "Cardio", spots: 15 },
    { time: "10:00 AM", class: "Hypertrophy Training", trainer: "Sarah Chen", type: "Strength", spots: 10 },
    { time: "01:00 PM", class: "Pilates Core", trainer: "Emma Wilson", type: "Group", spots: 16 },
    { time: "06:00 PM", class: "Boxing Fitness", trainer: "David Martinez", type: "Cardio", spots: 14 },
  ],
  Friday: [
    { time: "06:00 AM", class: "HIIT Bootcamp", trainer: "Mike Johnson", type: "Cardio", spots: 12 },
    { time: "09:00 AM", class: "Strength & Power", trainer: "Sarah Chen", type: "Strength", spots: 8 },
    { time: "05:00 PM", class: "Friday Night Burn", trainer: "David Martinez", type: "Cardio", spots: 20 },
  ],
  Saturday: [
    { time: "08:00 AM", class: "Weekend Warrior", trainer: "Sarah Chen", type: "Strength", spots: 12 },
    { time: "10:00 AM", class: "Yoga & Stretch", trainer: "Emma Wilson", type: "Group", spots: 25 },
    { time: "12:00 PM", class: "Team Training", trainer: "Mike Johnson", type: "Group", spots: 30 },
  ],
  Sunday: [
    { time: "09:00 AM", class: "Recovery Yoga", trainer: "Emma Wilson", type: "Group", spots: 20 },
    { time: "11:00 AM", class: "Open Gym", trainer: "All Trainers", type: "Group", spots: 50 },
  ],
}

export function Timetable() {
  const [selectedDay, setSelectedDay] = useState("Monday")
  const [filterType, setFilterType] = useState("All")

  const filteredClasses =
    filterType === "All"
      ? schedule[selectedDay as keyof typeof schedule]
      : schedule[selectedDay as keyof typeof schedule].filter((c) => c.type === filterType)

  return (
    <section id="timetable" className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Class </span>
            <span className="text-primary text-glow">Schedule</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect time for your training sessions
          </p>
        </div>

        {/* Day Tabs */}
        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex gap-2 min-w-max mx-auto justify-center">
            {days.map((day) => (
              <Button
                key={day}
                onClick={() => setSelectedDay(day)}
                variant={selectedDay === day ? "default" : "outline"}
                className={`${
                  selectedDay === day
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                {day}
              </Button>
            ))}
          </div>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {["All", "Cardio", "Strength", "Group"].map((type) => (
            <Button
              key={type}
              size="sm"
              onClick={() => setFilterType(type)}
              variant={filterType === type ? "default" : "outline"}
              className={`${
                filterType === type
                  ? "bg-secondary text-secondary-foreground"
                  : "border-border text-foreground hover:bg-muted"
              }`}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="glass-effect rounded-2xl p-6 sm:p-8">
          <div className="space-y-4">
            {filteredClasses.map((classItem, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary font-mono text-sm font-bold bg-primary/10 px-4 py-2 rounded-lg whitespace-nowrap">
                    {classItem.time}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{classItem.class}</h4>
                    <p className="text-sm text-muted-foreground">with {classItem.trainer}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      classItem.type === "Cardio"
                        ? "bg-red-500/20 text-red-400"
                        : classItem.type === "Strength"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {classItem.type}
                  </span>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{classItem.spots} spots left</span>
                  <Button
                    size="sm"
                    className="ripple-button bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
