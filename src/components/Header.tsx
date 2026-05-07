import { useEffect, useState } from 'react'
import { BrandWordmark } from './BrandWordmark'
import { WhatsAppButton } from './WhatsAppButton'

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#ambiente', label: 'Ambiente' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#faq', label: 'Dúvidas' },
] as const

/**
 * Cabeçalho fixo com marca, navegação por âncoras e CTA para WhatsApp.
 *
 * Em telas pequenas, exibe menu em painel deslizante.
 */
export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
          className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-brand-navy/10 bg-white/95 shadow-md shadow-brand-navy/10 backdrop-blur-md'
          : 'border-brand-navy/10 bg-white/95 shadow-sm shadow-brand-navy/5 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <a href="#inicio" className="min-w-0 focus-visible:outline-none">
          <BrandWordmark />
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-2.5 py-2 text-sm text-brand-navy/80 transition hover:bg-brand-mist hover:text-brand-navy lg:px-3"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <WhatsAppButton size="md" variant="primary">
            Agendar pelo WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-brand-navy/15 p-2 text-brand-navy transition hover:bg-brand-mist xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menu</span>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-brand-navy/10 bg-white px-4 py-4 xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-brand-navy hover:bg-brand-mist"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <WhatsAppButton size="lg" variant="primary" className="w-full">
                Agendar avaliação pelo WhatsApp
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

function IconMenu() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
      />
    </svg>
  )
}

function IconClose() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M18.3 5.71 12 12l6.3 6.29-1.42 1.42L10.59 13.4 4.29 19.7 2.86 18.3 9.17 12 2.86 5.71 4.29 4.3 10.59 10.6l6.29-6.3z"
      />
    </svg>
  )
}
