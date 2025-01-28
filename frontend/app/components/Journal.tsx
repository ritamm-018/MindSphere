import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface JournalProps {
  onClose: () => void
}

export function Journal({ onClose }: JournalProps) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSave = () => {
    console.log("Saving journal entry:", { title, content })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl bg-[#C5D3E8] rounded-xl shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold text-[#A6AEBF]">Journal Entry</CardTitle>
          <Button variant="ghost" onClick={onClose} className="text-[#A6AEBF] hover:text-[#FFF8DE]">
            <X className="h-6 w-6" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded-xl bg-[#FFF8DE] text-[#A6AEBF] placeholder-[#A6AEBF] border-[#A6AEBF]"
          />
          <Textarea
            placeholder="Write your thoughts here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-60 p-2 rounded-xl bg-[#FFF8DE] text-[#A6AEBF] placeholder-[#A6AEBF] border-[#A6AEBF]"
          />
          <Button
            className="w-full bg-[#D0E8C5] hover:bg-[#A6AEBF] text-[#A6AEBF] hover:text-[#FFF8DE] rounded-xl"
            onClick={handleSave}
          >
            Save Entry
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

