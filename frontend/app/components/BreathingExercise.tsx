import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function BreathingExercise() {
  const [isBreathing, setIsBreathing] = useState(false)
  const [breatheIn, setBreatheIn] = useState(true)
  const circleRef = useRef(null)

  useEffect(() => {
    let interval
    if (isBreathing) {
      interval = setInterval(() => {
        setBreatheIn((prev) => !prev)
      }, 4000) // Switch every 4 seconds
    }
    return () => clearInterval(interval)
  }, [isBreathing])

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.animate(
        [
          { r: "100", opacity: 0.3 },
          { r: breatheIn ? "150" : "100", opacity: breatheIn ? 0.7 : 0.3 },
        ],
        {
          duration: 4000,
          fill: "forwards",
          easing: "ease-in-out",
        },
      )
    }
  }, [breatheIn])

  return (
    <Card className="w-full bg-[#C5D3E8] rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#A6AEBF]">Breathing Exercise</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6">
        <div className="w-64 h-64 relative">
          <svg width="100%" height="100%" viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="100" fill="#D0E8C5" ref={circleRef} />
            <text x="150" y="160" textAnchor="middle" fill="#A6AEBF" fontSize="24">
              {breatheIn ? "Breathe In" : "Breathe Out"}
            </text>
          </svg>
        </div>
        <div className="flex space-x-4">
          <Button
            onClick={() => setIsBreathing(true)}
            disabled={isBreathing}
            className="bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-xl"
          >
            Start
          </Button>
          <Button
            onClick={() => setIsBreathing(false)}
            disabled={!isBreathing}
            className="bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-xl"
          >
            Stop
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

