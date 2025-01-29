import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookingModal } from "./BookingModal"

const therapists = [
  {
    name: "Dr. Emily Johnson",
    specialty: "Cognitive Behavioral Therapy",
    type: "Online",
    avatar: "/avatars/emily.jpg",
    address: "123 Therapy St, Mindful City, MC 12345",
    availableTimes: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Psychodynamic Therapy",
    type: "In-person",
    avatar: "/avatars/michael.jpg",
    address: "456 Wellness Ave, Serenity Town, ST 67890",
    availableTimes: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
  },
  {
    name: "Dr. Sarah Williams",
    specialty: "Mindfulness-Based Therapy",
    type: "Online",
    avatar: "/avatars/sarah.jpg",
    address: "789 Calm Lane, Peaceful Village, PV 13579",
    availableTimes: ["9:30 AM", "11:30 AM", "2:30 PM", "4:30 PM"],
  },
  {
    name: "Dr. David Brown",
    specialty: "Family Therapy",
    type: "In-person",
    avatar: "/avatars/david.jpg",
    address: "101 Harmony Road, Supportive City, SC 24680",
    availableTimes: ["10:30 AM", "1:30 PM", "3:30 PM", "5:30 PM"],
  },
]

export function BookAppointment() {
  const [selectedTherapist, setSelectedTherapist] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBookClick = (therapist) => {
    setSelectedTherapist(therapist)
    setIsModalOpen(true)
  }

  return (
    <>
      <Card className="w-full max-w-4xl bg-[#C5D3E8] rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-[#A6AEBF]">Book an Appointment</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {therapists.map((therapist, index) => (
            <Card key={index} className="bg-[#FFF8DE] rounded-xl shadow-sm">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={therapist.avatar} alt={therapist.name} />
                    <AvatarFallback>
                      {therapist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-[#A6AEBF]">{therapist.name}</h3>
                    <p className="text-sm text-[#A6AEBF]">{therapist.specialty}</p>
                    <span
                      className={`inline-block px-2 py-1 mt-1 text-xs font-semibold rounded-full ${
                        therapist.type === "Online" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {therapist.type}
                    </span>
                  </div>
                </div>
                <Button
                  className="bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-xl"
                  onClick={() => handleBookClick(therapist)}
                >
                  Book
                </Button>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
      {selectedTherapist && (
        <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} therapist={selectedTherapist} />
      )}
    </>
  )
}

