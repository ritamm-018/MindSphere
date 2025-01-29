import { Button } from "@/components/ui/button"
import { Dumbbell, BarChart2, TrendingUp, Users, Info, X, Home } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onItemClick: (item: string) => void
}

export default function Sidebar({ isOpen, onClose, onItemClick }: SidebarProps) {
  const sidebarItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Exercises", icon: Dumbbell, href: "/exercises" },
    { name: "Mood Tracker", icon: BarChart2, href: "/mood-tracker" },
    { name: "Progress", icon: TrendingUp, href: "/progress" },
    { name: "Connect", icon: Users, href: "/connect" },
  ]

  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} w-64 bg-[#D0E8C5] shadow-lg transition-transform duration-300 ease-in-out z-20 flex flex-col justify-between p-6`}
    >
      <div>
        <div className="flex justify-end">
          <Button variant="ghost" className="p-1 rounded-full" onClick={onClose}>
            <X className="h-6 w-6 text-[#A6AEBF]" />
          </Button>
        </div>
        <div className="space-y-4 mt-4">
          {sidebarItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="w-full justify-start rounded-full text-[#A6AEBF] hover:text-[#C5D3E8] hover:bg-[#A6AEBF]"
              onClick={() => onItemClick(item.name)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Button>
          ))}
        </div>
      </div>
      <Button
        variant="ghost"
        className="w-full justify-start rounded-full text-[#A6AEBF] hover:text-[#C5D3E8] hover:bg-[#A6AEBF] mt-auto"
        onClick={() => onItemClick("About")}
      >
        <Info className="mr-2 h-4 w-4" />
        About Us
      </Button>
    </aside>
  )
}

