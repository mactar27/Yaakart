"use client"

import { Navigation } from "@/components/navigation"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FilmGrain } from "@/components/film-grain"
import { BackgroundEffects } from "@/components/background-effects"
import { SmoothScroll } from "@/components/smooth-scroll"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ContactPage() {
  return (
    <SmoothScroll>
      <FilmGrain />
      <BackgroundEffects />
      <Navigation />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </SmoothScroll>
  )
}
