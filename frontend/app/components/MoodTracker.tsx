import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smile, Meh, Frown, Angry, Heart } from "lucide-react"
import { Journal } from "./Journal"

const moods = [
  { icon: Smile, label: "Happy", color: "text-green-500" },
  { icon: Meh, label: "Neutral", color: "text-yellow-500" },
  { icon: Frown, label: "Sad", color: "text-blue-500" },
  { icon: Angry, label: "Angry", color: "text-red-500" },
  { icon: Heart, label: "Loved", color: "text-pink-500" },
]

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [showJournal, setShowJournal] = useState(false)

  return (
    <div className="relative w-full max-w-4xl">
      <Button
        className="absolute top-0 right-0 bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-xl"
        onClick={() => setShowJournal(true)}
      >
        Journal →
      </Button>
      <Card className="w-full bg-[#C5D3E8] rounded-xl shadow-lg mt-12">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-[#A6AEBF]">How are you feeling today?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center space-x-4 mb-6">
            {moods.map((mood) => (
              <Button
                key={mood.label}
                variant="outline"
                className={`flex flex-col items-center p-4 rounded-xl border-2 ${
                  selectedMood === mood.label ? "border-[#A6AEBF]" : "border-transparent"
                } hover:border-[#A6AEBF] transition-all`}
                onClick={() => setSelectedMood(mood.label)}
              >
                <mood.icon className={`w-12 h-12 ${mood.color}`} />
                <span className="mt-2 text-sm font-medium text-[#A6AEBF]">{mood.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="mt-4 flex justify-center">
        <Button
          className="bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-xl px-8 py-2"
          onClick={() => console.log(`Logged mood: ${selectedMood}`)}
        >
          Log Feeling
        </Button>
      </div>
      {showJournal && <Journal onClose={() => setShowJournal(false)} />}
    </div>
  )
}

