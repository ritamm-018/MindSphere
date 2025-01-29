import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios" // Install axios for HTTP requests

export default function ChatbotGreeting() {
  const [response, setResponse] = useState("") // Chatbot's response
  const [userMessage, setUserMessage] = useState("") // User's input
  const [chatHistory, setChatHistory] = useState([]) // Chat history

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (userMessage.trim() === "") return

    // Add the user's message to the chat history
    setChatHistory((prev) => [...prev, { sender: "user", message: userMessage }])

    try {
      // Send user input to the Flask backend
      const { data } = await axios.post("http://127.0.0.1:5000/chat", { message: userMessage })

      // Add the chatbot's response to the chat history
      setChatHistory((prev) => [...prev, { sender: "bot", message: data.response }])
    } catch (error) {
      console.error("Error communicating with the chatbot API:", error)
      setChatHistory((prev) => [...prev, { sender: "bot", message: "Something went wrong. Please try again later." }])
    }

    // Clear the input field
    setUserMessage("")
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
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`text-${chat.sender === "user" ? "right" : "left"}`}>
                <p className={`text-${chat.sender === "user" ? "blue-500" : "green-500"} font-medium`}>
                  {chat.sender === "user" ? "You" : "Bot"}: {chat.message}
                </p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              type="text"
              placeholder="I'm feeling..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
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


