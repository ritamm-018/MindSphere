import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BreathingExercise } from "./BreathingExercise"

const exercises = [
  { title: "Breathing", icon: "🫁", component: BreathingExercise },
  { title: "Yoga", icon: "🧘" },
  { title: "Sleep", icon: "😴" },
  { title: "Meditation", icon: "🧘‍♀️" },
  { title: "Music", icon: "🎵" },
]

export function ExerciseCards() {
  const [selectedExercise, setSelectedExercise] = useState(null)

  return (
    <div className="w-full max-w-4xl mx-auto">
      {selectedExercise ? (
        <div>
          <Button
            onClick={() => setSelectedExercise(null)}
            className="mb-4 bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-xl"
          >
            Back to Exercises
          </Button>
          {selectedExercise.component && <selectedExercise.component />}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <Card
              key={exercise.title}
              className="bg-[#C5D3E8] rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{exercise.icon}</span>
                  <h3 className="text-xl font-semibold text-[#A6AEBF]">{exercise.title}</h3>
                </div>
                <Button
                  className="bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-xl"
                  onClick={() => setSelectedExercise(exercise)}
                >
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

