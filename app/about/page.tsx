"use client"

import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Philosophy } from "@/components/philosophy"
import { Footer } from "@/components/footer"
import { FilmGrain } from "@/components/film-grain"
import { BackgroundEffects } from "@/components/background-effects"
import { SmoothScroll } from "@/components/smooth-scroll"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function AboutPage() {
  return (
    <SmoothScroll>
      <FilmGrain />
      <BackgroundEffects />
      <Navigation />
      <main className="pt-20">
        <About />
        <Philosophy />
      </main>
      <Footer />
      <WhatsAppButton />
    </SmoothScroll>
  )
}
