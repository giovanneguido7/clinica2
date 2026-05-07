import {
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from '../constants/site'

const reviews = [
  {
    name: 'Fernanda R.',
    quote:
      'Fui muito bem atendida. Me explicaram tudo com paciência e eu saí mais tranquila sobre o procedimento.',
    time: 'avaliação recente',
  },
  {
    name: 'Carlos E.',
    quote:
      'Equipe acolhedora e ambiente agradável. Gostei da clareza nas orientações — parece um lugar organizado.',
    time: 'paciente da região',
  },
  {
    name: 'Priscila M.',
    quote:
      'Profissionais atenciosos e um consultório limpo. Senti que me ouviram antes de sugerir qualquer coisa.',
    time: 'primeira consulta',
  },
] as const

/**
 * Renderiza estrelas proporcionais à nota média (ex.: 3,7 de 5).
 *
 * @param value - Nota de 0 a 5 (suporta uma casa decimal).
 * @param label - Texto acessível para leitores de tela.
 */
function RatingStars({
  value,
  label,
}: {
  value: number
  label: string
}) {
  const pct = Math.min(100, Math.max(0, (value / 5) * 100))
  const stars = (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="size-5 shrink-0"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="m12 3 2.92 5.91 6.54.95-4.73 4.6 1.12 6.51L12 17.77 6.15 21.97l1.12-6.51L2.54 9.86l6.54-.95L12 3z"
          />
        </svg>
      ))}
    </>
  )

  return (
    <div className="relative inline-flex" aria-label={label}>
      <div className="flex gap-0.5 text-brand-mist">{stars}</div>
      <div
        className="absolute left-0 top-0 flex gap-0.5 overflow-hidden text-brand-royal"
        style={{ width: `${pct}%` }}
      >
        {stars}
      </div>
    </div>
  )
}

/**
 * Depoimentos humanizados e selo de reputação no Google com nota média informada.
 */
export function Testimonials() {
  const ratingLabel = `${GOOGLE_RATING.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} de 5 estrelas no Google`

  return (
    <section
      id="depoimentos"
      className="scroll-mt-24 border-y border-brand-navy/20 bg-brand-navy py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Confiança e experiência
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Histórias que parecem com o que a gente ouve no consultório
            </h2>
            <p className="mt-3 text-base text-white/75">
              Trechos inspirados no jeito como pacientes descrevem uma boa experiência —
              atendimento humanizado, clareza e um lugar agradável para se cuidar.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/15 bg-white px-5 py-4 shadow-lg shadow-black/20">
            <GoogleGlyph />
            <div className="text-brand-navy">
              <RatingStars value={GOOGLE_RATING} label={ratingLabel} />
              <p className="mt-2 text-lg font-semibold">
                {GOOGLE_RATING.toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}{' '}
                no Google
              </p>
              <p className="text-xs text-[#1e3a5f]/70">
                Mais de {GOOGLE_REVIEW_COUNT} avaliações públicas (média pode variar com o
                tempo)
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {reviews.map((r) => (
            <li
              key={r.name}
              className="rounded-2xl border border-white/15 bg-white p-6 text-brand-navy shadow-xl shadow-black/15 ring-1 ring-brand-navy/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-royal">
                {r.time}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#1e3a5f]/90">
                “{r.quote}”
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-navy">{r.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function GoogleGlyph() {
  return (
    <svg className="size-11 shrink-0" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  )
}
