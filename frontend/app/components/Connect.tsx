import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const events = [
  { title: "Mindfulness Webinar", date: "June 15, 2023", type: "Webinar" },
  { title: "Local Meditation Group", date: "Every Tuesday", type: "Community" },
  { title: "Stress Management Seminar", date: "July 1, 2023", type: "Seminar" },
  { title: "Yoga for Beginners", date: "Every Saturday", type: "Community" },
  { title: "Mental Health Awareness Talk", date: "July 10, 2023", type: "Webinar" },
]

export function Connect() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
  }

  return (
    <Card className="w-full max-w-4xl bg-[#C5D3E8] rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#A6AEBF]">Connect with Others</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event, index) => (
              <div key={index} className="w-full flex-shrink-0 p-4">
                <Card className="bg-[#FFF8DE] rounded-xl shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#A6AEBF] mb-2">{event.title}</h3>
                    <p className="text-[#A6AEBF] mb-2">{event.date}</p>
                    <span className="inline-block bg-[#D0E8C5] text-[#A6AEBF] px-3 py-1 rounded-full text-sm">
                      {event.type}
                    </span>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="ghost"
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </CardContent>
    </Card>
  )
}

