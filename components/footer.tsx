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
        <path d="M12 0c-.86 0-1.74.07-2.61.22-.1.01-.1.15 0 .16.86-.14 1.74-.21 2.61-.21s1.75.07 2.61.21c.1-.01.1-.15 0-.16-.87-.15-1.75-.22-2.61-.22zM12.017 1.5c-3.15 0-5.8 2.31-5.8 5.15 0 .44.06.87.16 1.28.02.09.12.11.18.04.53-.7 1.4-1.14 2.37-1.14 1.15 0 2.11.64 2.53 1.54.02.04.07.05.1.02.42-.9 1.38-1.54 2.53-1.54.97 0 1.84.44 2.37 1.14.06.07.16.05.18-.04.1-.41.16-.84.16-1.28 0-2.84-2.65-5.15-5.8-5.15zM5.31 10.42c-.44 0-.85-.14-1.22-.38-.2-.13-.41-.18-.63-.12-.22.06-.39.23-.46.45-.07.22-.03.46.12.65.34.45.83.74 1.38.82.08.01.12.11.07.18-.3.45-.52.97-.64 1.52-.02.09-.12.11-.18.04-.62-.71-1.54-1.12-2.55-1.12-.46 0-.89.09-1.29.27-.47.2-.76.66-.76 1.17s.29.97.76 1.17c.4.18.83.27 1.29.27 1.01 0 1.93-.41 2.55-1.12.06-.07.16-.05.18.04.12.55.34 1.07.64 1.52.05.07.01.17-.07.18-.55.08-1.04.37-1.38.82-.15.19-.19.43-.12.65.07.22.24.39.46.45.22.06.43.01.63-.12.37-.24.78-.38 1.22-.38s.85.14 1.22.38c.2.13.41.18.63.12.22-.06.39-.23.46-.45.07-.22.03-.46-.12-.65-.34-.45-.83-.74-1.38-.82-.08-.01-.12-.11-.07-.18.3-.45.52-.97.64-1.52.02-.09.12-.11.18-.04.62.71 1.54 1.12 2.55 1.12s1.93-.41 2.55-1.12c.06-.07.16-.05.18.04.12.55.34 1.07.64 1.52.05.07.01.17-.07.18-.55.08-1.04.37-1.38.82-.15.19-.19.43-.12.65.07.22.24.39.46.45.22.06.43.01.63-.12.37-.24.78-.38 1.22-.38s.85.14 1.22.38c.2.13.41.18.63.12.22-.06.39-.23.46-.45.07-.22.03-.46-.12-.65-.34-.45-.83-.74-1.38-.82-.08-.01-.12-.11-.07-.18-.3-.45-.52-.97-.64-1.52-.02-.09-.12-.11-.18-.04.62.71 1.54 1.12 2.55 1.12.46 0 .89-.09 1.29-.27.47-.2.76-.66-.76-1.17s-.29-.97-.76-1.17c-.4-.18-.83-.27-1.29-.27-1.01 0-1.93.41-2.55 1.12-.06.07-.16.05-.18-.04-.12-.55-.34-1.07-.64-1.52-.05-.07.01-.17-.07-.18-.55-.08-1.04-.37-1.38-.82-.15-.19-.19-.43-.12-.65.07-.22.24-.39.46-.45.22-.06.43-.01.63-.12.37-.24.78-.38 1.22-.38z"/>
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
              <span className="text-2xl font-semibold tracking-tight text-foreground">
                {"Yaak'art"}
              </span>
              <span className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase block">
                Studio
              </span>
            </Link>
            <p className="mt-4 text-xs tracking-[0.2em] text-accent uppercase">
              Œil pour œil
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
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
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Yaak&apos;art Studio. Tous droits réservés.
          </p>
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
