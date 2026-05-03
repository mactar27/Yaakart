"use client"

import { useState, useEffect } from "react"
import { Loader } from "@/components/loader"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Collections } from "@/components/collections"
import { Featured } from "@/components/featured"
import { SignatureWork } from "@/components/signature-work"
import { About } from "@/components/about"
import { Philosophy } from "@/components/philosophy"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

import { WhatsAppButton } from "@/components/whatsapp-button"
import { SmoothScroll } from "@/components/smooth-scroll"
import { BackgroundEffects } from "@/components/background-effects"
import { FilmGrain } from "@/components/film-grain"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Incrémenter les vues réelles dans MySQL
    fetch('/api/stats', { method: 'POST' }).catch(err => console.error(err))
  }, [])

  return (
    <SmoothScroll>
      <FilmGrain />
      <BackgroundEffects />
      
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <main className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <Navigation />
        <Hero />
        <Featured />
        <SignatureWork />
        <Footer />
        <WhatsAppButton />
      </main>
    </SmoothScroll>
  )
}
