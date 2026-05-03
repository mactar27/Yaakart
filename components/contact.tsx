"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construction de l'URL mailto avec les données du formulaire
    const subject = encodeURIComponent(`${formData.subject} - Via Yaak'art Studio`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:Yaakart.studio2024@gmail.com?subject=${subject}&body=${body}`;
    
    // Ouverture du client mail par défaut
    window.location.href = mailtoUrl;
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs tracking-[0.3em] text-accent uppercase">
                Contact
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mt-4">
                Créons quelque chose d&apos;unique
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Disponible pour collaborations, shootings et événements.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 pt-8 border-t border-border">
              <a
                href="mailto:Yaakart.studio2024@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors duration-300 group"
              >
                <span className="w-10 h-10 border border-border group-hover:border-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Yaakart.studio2024@gmail.com
              </a>

              <a
                href="https://wa.me/221773298743"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors duration-300 group"
              >
                <span className="w-10 h-10 border border-border group-hover:border-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </span>
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/yaakart_studio?igsh=MTR0MnBpa3lieGVoYw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors duration-300 group"
              >
                <span className="w-10 h-10 border border-border group-hover:border-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                @yaakart.studio
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Nom</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="sr-only">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-foreground text-background text-sm tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 relative h-80 overflow-hidden"
        >
          <div className="absolute inset-0 bg-secondary" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border border-accent rounded-full flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="mt-4 text-sm tracking-wider text-muted-foreground">
                Yaak&apos;art Studio • Dakar, Sénégal
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
