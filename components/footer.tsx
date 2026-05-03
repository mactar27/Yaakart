"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/yaakart_studio?igsh=MTR0MnBpa3lieGVoYw==",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@yaakart_studio",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.78a4.85 4.85 0 01-1-.09z"/>
      </svg>
    ),
  },
  {
    name: "Snapchat",
    href: "https://snapchat.com/t/ss7zvtm7",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C8.396 0 5.52 2.902 5.52 6.5c0 .42.04.83.115 1.228-.26.048-.522.085-.8.085-.42 0-.82-.065-1.2-.185l-.06-.02a.525.525 0 00-.16-.025c-.28 0-.52.19-.57.47-.06.33.16.64.49.71.87.19 1.63.45 2.26.77-.02.13-.03.27-.03.41 0 .54.11 1.06.3 1.54-.75.13-1.42.38-1.98.74-.48.31-.73.7-.73 1.09 0 .38.25.72.67.96.44.25.99.38 1.57.38.48 0 .95-.09 1.37-.26.28.64.74 1.19 1.34 1.58.66.43 1.44.65 2.27.65.12 0 .24-.01.36-.02.35.52.57 1.12.57 1.77 0 .38-.07.74-.2 1.08.41.14.82.21 1.23.21.5 0 .99-.11 1.44-.32.46.21.95.32 1.45.32.41 0 .82-.07 1.22-.21-.13-.34-.2-.7-.2-1.08 0-.65.22-1.25.57-1.77.12.01.24.02.36.02.83 0 1.61-.22 2.27-.65.6-.39 1.06-.94 1.34-1.58.42.17.89.26 1.37.26.58 0 1.13-.13 1.57-.38.42-.24.67-.58.67-.96 0-.39-.25-.78-.73-1.09-.56-.36-1.23-.61-1.98-.74.19-.48.3-1 .3-1.54 0-.14-.01-.28-.03-.41.63-.32 1.39-.58 2.26-.77.33-.07.55-.38.49-.71-.05-.28-.29-.47-.57-.47a.525.525 0 00-.16.025l-.06.02c-.38.12-.78.185-1.2.185-.278 0-.54-.037-.8-.085A6.474 6.474 0 0018.514 6.5C18.514 2.902 15.638 0 12.017 0z"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/221773298743",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:Yaakart.studio2024@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-tight text-foreground leading-none">
                {"Yaak'art"}
              </span>
              <span className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase block mt-1">
                Studio
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-[0.2em] text-accent uppercase">
              Œil pour œil
            </p>
            <p className="text-sm text-muted-foreground">
              Photographie artistique & storytelling visuel.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 border border-border hover:border-accent rounded-full flex items-center justify-center text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Yaak&apos;art Studio. Tous droits réservés.
            </p>
            <p className="text-[10px] text-muted-foreground/60 tracking-wider">
              <a 
                href="https://www.instagram.com/wockytech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
              >
                Réalisé par Wockytech
              </a>
            </p>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-xs text-muted-foreground hover:text-accent transition-colors duration-300">
              Accueil
            </Link>
            <Link href="/collections" className="text-xs text-muted-foreground hover:text-accent transition-colors duration-300">
              Collections
            </Link>
            <Link href="/about" className="text-xs text-muted-foreground hover:text-accent transition-colors duration-300">
              À propos
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-accent transition-colors duration-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
