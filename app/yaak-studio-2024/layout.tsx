"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { 
  LayoutDashboard, 
  Images, 
  FolderOpen, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react"

const navItems = [
  { href: "/yaak-studio-2024", label: "Dashboard", icon: LayoutDashboard },
  { href: "/yaak-studio-2024/photos", label: "Photos", icon: Images },
  { href: "/yaak-studio-2024/collections", label: "Collections", icon: FolderOpen },
  { href: "/yaak-studio-2024/settings", label: "Paramètres", icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isLoginPage = pathname === "/yaak-studio-2024/login"

  useEffect(() => {
    if (isLoginPage) {
      setIsLoading(false)
      return
    }

    // Check authentication
    const token = localStorage.getItem("admin_token")
    if (!token) {
      router.push("/yaak-studio-2024/login")
    } else {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [router, isLoginPage])

  const handleLogout = () => {
    localStorage.removeItem("admin_token")
    router.push("/yaak-studio-2024/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (isLoginPage) {
    return <>{children}</>
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-border"
      >
        {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <Link href="/" className="block">
              <h1 className="text-xl font-semibold text-foreground">Yaak&apos;art</h1>
              <span className="text-xs text-muted-foreground">Admin Panel</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-border">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Déconnexion</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen lg:ml-0">
        {children}
      </main>
    </div>
  )
}
