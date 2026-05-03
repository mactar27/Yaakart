"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Eye, EyeOff, Lock } from "lucide-react"
import Link from "next/link"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple password check (in production, use proper authentication)
    // Default password: "yaakart2024"
    if (password === "yaakart2024") {
      localStorage.setItem("admin_token", "authenticated")
      router.push("/yaak-studio-2024")
    } else {
      setError("Mot de passe incorrect")
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-3xl font-semibold text-foreground">Yaak&apos;art</h1>
            <span className="text-xs tracking-widest text-accent uppercase">Studio</span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 rounded-full bg-accent/10">
            <Lock className="w-5 h-5 text-accent" />
          </div>

          <h2 className="text-xl font-medium text-center text-foreground mb-2">
            Administration
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Entrez votre mot de passe pour accéder au panneau d&apos;administration
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm text-muted-foreground mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive text-center"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  Connexion...
                </span>
              ) : (
                "Se connecter"
              )}
            </button>
          </form>
        </div>

        {/* Back to site */}
        <p className="text-center mt-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
            Retour au site
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
