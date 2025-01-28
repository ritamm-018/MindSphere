import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ChatbotGreeting() {
  const [response, setResponse] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("User response:", response)
    setResponse("")
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center mb-4">
        <div className="animate-bounce">
          <div className="w-16 h-16 bg-[#D0E8C5] rounded-full flex items-center justify-center">
            <span className="text-4xl" role="img" aria-label="Cute bot">
              🤖
            </span>
          </div>
        </div>
      </div>
      <Card className="bg-[#C5D3E8] shadow-sm rounded-xl">
        <CardHeader>
          <CardTitle className="text-center text-[#A6AEBF]">Welcome to Mindsphere</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-lg font-medium text-[#A6AEBF]">How are you today?</p>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              type="text"
              placeholder="I'm feeling..."
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="flex-grow bg-[#FFF8DE] text-[#A6AEBF] placeholder-[#A6AEBF] border-[#A6AEBF] rounded-xl"
            />
            <Button
              type="submit"
              className="bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-xl"
            >
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

