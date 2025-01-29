import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress as ProgressBar } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const mockData = [
  { week: "Week 1", happy: 4, sad: 2, anxious: 1 },
  { week: "Week 2", happy: 3, sad: 3, anxious: 2 },
  { week: "Week 3", happy: 5, sad: 1, anxious: 1 },
  { week: "Week 4", happy: 4, sad: 2, anxious: 3 },
]

export function Progress() {
  return (
    <Card className="w-full max-w-4xl bg-[#C5D3E8] rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#A6AEBF]">Your Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#A6AEBF]">Mood Log Progress</h3>
          <ProgressBar
            value={75}
            className="w-full h-4 rounded-xl bg-[#FFF8DE]"
            indicatorClassName="bg-[#D0E8C5] rounded-xl"
          />
          <p className="text-sm text-[#A6AEBF]">You've logged your mood 21 out of 28 days this month!</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#A6AEBF]">Monthly Mood Comparison</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#A6AEBF" />
                <XAxis dataKey="week" stroke="#A6AEBF" />
                <YAxis stroke="#A6AEBF" />
                <Tooltip contentStyle={{ backgroundColor: "#FFF8DE", border: "none", borderRadius: "8px" }} />
                <Legend />
                <Line type="monotone" dataKey="happy" stroke="#4CAF50" strokeWidth={2} />
                <Line type="monotone" dataKey="sad" stroke="#2196F3" strokeWidth={2} />
                <Line type="monotone" dataKey="anxious" stroke="#FFC107" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

