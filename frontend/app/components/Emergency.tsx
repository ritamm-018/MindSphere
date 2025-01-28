import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const emergencyContacts = [
  { name: "Your Doctor", number: "+1 (555) 123-4567" },
  { name: "National Suicide Prevention Lifeline", number: "1-800-273-8255" },
  { name: "Crisis Text Line", number: "Text HOME to 741741" },
  { name: "Emergency Services", number: "911" },
]

export function Emergency() {
  return (
    <Card className="w-full max-w-4xl bg-[#C5D3E8] rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#A6AEBF]">Emergency Contacts</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {emergencyContacts.map((contact, index) => (
          <Card key={index} className="bg-[#FFF8DE] rounded-xl shadow-sm">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <h3 className="text-lg font-semibold text-[#A6AEBF]">{contact.name}</h3>
                <p className="text-sm text-[#A6AEBF]">{contact.number}</p>
              </div>
              <Button className="bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-xl">
                <Phone className="mr-2 h-4 w-4" />
                Call
              </Button>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}

