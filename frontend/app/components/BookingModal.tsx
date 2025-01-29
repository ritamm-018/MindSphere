import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  therapist: {
    name: string
    address: string
    availableTimes: string[]
  }
}

export function BookingModal({ isOpen, onClose, therapist }: BookingModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", { name, email, phone, selectedTime })
    // Here you would typically send this data to your backend
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#C5D3E8] text-[#A6AEBF] rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Book Appointment with {therapist.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" value={therapist.address} disabled className="bg-[#FFF8DE] text-[#A6AEBF]" />
          </div>
          <div>
            <Label htmlFor="time">Available Times</Label>
            <Select onValueChange={setSelectedTime}>
              <SelectTrigger className="bg-[#FFF8DE] text-[#A6AEBF]">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {therapist.availableTimes.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-[#FFF8DE] text-[#A6AEBF]"
            />
          </div>
          <div>
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#FFF8DE] text-[#A6AEBF]"
            />
          </div>
          <div>
            <Label htmlFor="phone">Your Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-[#FFF8DE] text-[#A6AEBF]"
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-xl"
            >
              Book Appointment
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

