import { About } from './components/About'
import { ClinicGallery } from './components/ClinicGallery'
import { Differentiators } from './components/Differentiators'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Location } from './components/Location'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhatsAppFloat } from './components/WhatsAppFloat'

/**
 * Landing page da Sorriso Osasco Odontologia — composição das seções e CTAs globais.
 */
function App() {
  return (
    <div className="min-h-svh bg-brand-ice text-[#1e3a5f] antialiased">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-navy focus:shadow-lg focus:ring-2 focus:ring-brand-royal/40"
      >
        Ir para o conteúdo principal
      </a>

      <Header />
      <main>
        <Hero />
        <Differentiators />
        <Services />
        <About />
        <Testimonials />
        <ClinicGallery />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
