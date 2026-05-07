import { CLINIC_SHORT_NAME } from '../constants/site'

const services = [
  {
    name: 'Clínica geral',
    desc: 'Check-ups, restaurações, avaliações completas e orientação para prevenir problemas antes que apareçam.',
    Icon: IconStethoscope,
  },
  {
    name: 'Clareamento dental',
    desc: 'Clareamento supervisionado pela equipe, com explicação honesta do que funciona melhor para o seu tipo de dente.',
    Icon: IconSun,
  },
  {
    name: 'Implantes',
    desc: 'Reposição de dentes com planejamento organizado — para você entender etapas, cuidados e acompanhamento.',
    Icon: IconImplant,
  },
  {
    name: 'Ortodontia',
    desc: 'Aparelhos e opções mais discretas quando indicadas — sempre com conversa clara sobre tempo e rotina.',
    Icon: IconBraces,
  },
  {
    name: 'Limpeza dental',
    desc: 'Profilaxia para remover placa e tártaro, mantendo gengivas saudáveis e aquele frescor no sorriso.',
    Icon: IconToothbrush,
  },
] as const

/**
 * Serviços prioritários da clínica com linguagem simples e foco em avaliação inicial.
 */
export function Services() {
  return (
    <section
      id="servicos"
      className="scroll-mt-24 border-y border-brand-navy/10 bg-brand-mist py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-royal">
            Tratamentos em Osasco
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
            Serviços mais procurados na {CLINIC_SHORT_NAME}
          </h2>
          <p className="mt-3 text-base text-[#1e3a5f]/85">
            Se você busca{' '}
            <strong className="font-semibold text-brand-navy">
              implante dentário em Osasco
            </strong>
            ,{' '}
            <strong className="font-semibold text-brand-navy">
              clareamento dental em Osasco
            </strong>{' '}
            ou uma avaliação completa, começamos entendendo suas necessidades — sem
            pressão.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s) => (
            <article
              key={s.name}
              className="flex h-full flex-col rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm shadow-brand-navy/5 ring-1 ring-brand-navy/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-md xl:min-w-0"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-sm ring-4 ring-brand-royal/25">
                <s.Icon />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-navy">
                {s.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#1e3a5f]/85">
                {s.desc}
              </p>
              <p className="mt-4 text-xs font-semibold text-brand-royal">
                Agende uma avaliação e descubra o melhor caminho para o seu caso
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function IconStethoscope() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM7 7h2v5a5 5 0 0 0 10 0V7h2a1 1 0 0 1 1 1v6a7 7 0 0 1-14 0V8a1 1 0 0 1 1-1z"
      />
    </svg>
  )
}

function IconToothbrush() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M8 3h8v2H8V3zm1 4h6v2H9V7zm-2 4h10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V11zm2 2v6h6v-6H9z"
      />
    </svg>
  )
}

function IconSun() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-4h2v3h-2V3zm0 18h2v3h-2v-3zM4.93 5.34l2.12 2.12-1.41 1.41L3.52 6.76l1.41-1.42zm12.02 12.02 2.12 2.12-1.41 1.41-2.12-2.12 1.41-1.41zM3 11h3v2H3v-2zm15 0h3v2h-3v-2zM6.76 18.48l2.12 2.12-1.42 1.41-2.12-2.12 1.42-1.41z"
      />
    </svg>
  )
}

function IconImplant() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 1 7 7v3h-2V9a5 5 0 1 0-10 0v3H5V9a7 7 0 0 1 7-7zm-3 12h6v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-6zm2 2v4h2v-4h-2z"
      />
    </svg>
  )
}

function IconBraces() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M8 6h8v2h2v10h-2v2H8v-2H6V8h2V6zm2 2v2h4V8h-4zm-2 4v6h8v-6H8zm2 2h4v2h-4v-2z"
      />
    </svg>
  )
}
