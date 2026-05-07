const items = [
  {
    title: 'Atendimento humanizado',
    text: 'Tempo para ouvir, acolher e explicar com calma — para você decidir com segurança.',
    Icon: IconHands,
  },
  {
    title: 'Agendamento rápido pelo WhatsApp',
    text: 'Fale direto com a equipe no canal oficial. Organizamos horários e tiramos dúvidas iniciais com clareza.',
    Icon: IconBolt,
  },
  {
    title: 'Equipe atenciosa',
    text: 'Profissionais próximos do paciente, com cuidado nos detalhes antes, durante e depois do procedimento.',
    Icon: IconPeople,
  },
  {
    title: 'Ambiente confortável',
    text: 'Espaço limpo, iluminado e agradável — para você se sentir bem desde a recepção.',
    Icon: IconSofa,
  },
  {
    title: 'Tecnologia moderna',
    text: 'Equipamentos atualizados para diagnóstico e tratamentos mais precisos, sempre com foco no seu bem-estar.',
    Icon: IconCpu,
  },
] as const

/**
 * Destaca os diferenciais da clínica em cartões com hierarquia visual azul e branco.
 */
export function Differentiators() {
  return (
    <section
      id="diferenciais"
      className="scroll-mt-24 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-royal">
            Por que a Sorriso Osasco
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
            Organização, confiança e um atendimento que respeita você
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1e3a5f]/85">
            Nossa prioridade é clareza no cuidado: você sabe o que será feito, como será
            feito — e encontra um time preparado para acolher de verdade.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-brand-navy/10 bg-gradient-to-b from-white to-brand-mist/50 p-6 shadow-sm shadow-brand-navy/5 ring-1 ring-brand-navy/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-brand-navy/10"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-brand-royal/15 blur-2xl" />
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-navy text-white shadow-sm ring-4 ring-brand-royal/30">
                <item.Icon />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1e3a5f]/85">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function IconHands() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 3c-1.65 0-3 1.35-3 3v6H7V8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 2.76 2.24 5 5 5h4c2.21 0 4-1.79 4-4v-6h2v6c0 2.21 1.79 4 4 4h1v2h2v-8c0-2.76-2.24-5-5-5h-1c-.83 0-1.61.21-2.3.58C18.14 8.05 16.19 7 14 7h-2V6c0-1.65-1.35-3-3-3zm0 2c.55 0 1 .45 1 1v7h2c1.65 0 3 1.35 3 3v1h-.34c-.94 0-1.66-.81-1.66-1.75V11c0-.55-.45-1-1-1s-1 .45-1 1v7H12c-1.66 0-3-1.34-3-3V8c0-.55.45-1 1-1z"
      />
    </svg>
  )
}

function IconBolt() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M11 21h2l1-7h6l-8-12v9H7l4 10z" />
    </svg>
  )
}

function IconPeople() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
      />
    </svg>
  )
}

function IconSofa() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M7 13c-1.1 0-2 .9-2 2v3h14v-3c0-1.1-.9-2-2-2H7zm-4 2c0-2.21 1.79-4 4-4h10c2.21 0 4 1.79 4 4v3H3v-3zm6-9c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v4H9V6z"
      />
    </svg>
  )
}

function IconCpu() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M8 7h8v10H8V7zm10-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 9h-2v2h2v-2zm0-4h-2v2h2V10zm-4 4h-2v2h2v-2zm0-4h-2v2h2V10zm-4 4H7v2h2v-2zm0-4H7v2h2V10z"
      />
    </svg>
  )
}
