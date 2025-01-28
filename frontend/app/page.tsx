"use client"

import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ChatbotGreeting from "./components/ChatbotGreeting"
import { ExerciseCards } from "./components/ExerciseCards"
import { MoodTracker } from "./components/MoodTracker"
import { Progress } from "./components/Progress"
import { Connect } from "./components/Connect"
import { BookAppointment } from "./components/BookAppointment"
import { Emergency } from "./components/Emergency"

export default function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeComponent, setActiveComponent] = useState<string>("Home")

  const handleSidebarItemClick = (item: string) => {
    setActiveComponent(item)
    setSidebarOpen(false)
  }

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <ChatbotGreeting />
      case "Exercises":
        return <ExerciseCards />
      case "Mood Tracker":
        return <MoodTracker />
      case "Progress":
        return <Progress />
      case "Connect":
        return <Connect />
      case "Book Appointment":
        return <BookAppointment />
      case "Emergency":
        return <Emergency />
      default:
        return <ChatbotGreeting />
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8DE] flex flex-col">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} onNavItemClick={setActiveComponent} />
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onItemClick={handleSidebarItemClick} />
        <main className="flex-1 p-6 flex items-center justify-center">{renderActiveComponent()}</main>
      </div>
    </div>
  )
}

