import { Button } from "@/components/ui/button"
import Link from "next/link"
import Logo from "./Logo"
import { User, Menu } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
  onNavItemClick: (item: string) => void
}

export default function Header({ onMenuClick, onNavItemClick }: HeaderProps) {
  return (
    <header className="bg-[#C5D3E8] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" className="mr-4 p-1 rounded-full" onClick={onMenuClick}>
            <Menu className="h-6 w-6 text-[#A6AEBF]" />
          </Button>
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="rounded-full text-[#A6AEBF] hover:text-[#D0E8C5] hover:bg-[#A6AEBF]"
            onClick={() => onNavItemClick("Book Appointment")}
          >
            Book Appointment
          </Button>
          <Button
            variant="ghost"
            className="rounded-full text-[#A6AEBF] hover:text-[#D0E8C5] hover:bg-[#A6AEBF]"
            onClick={() => onNavItemClick("Emergency")}
          >
            Emergency
          </Button>
          <Button
            variant="outline"
            className="rounded-full text-[#A6AEBF] hover:text-[#D0E8C5] hover:bg-[#A6AEBF]"
            asChild
          >
            <Link href="/profile">
              <User className="w-4 h-4 mr-2" />
              Profile
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

