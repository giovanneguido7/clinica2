const faqs = [
  {
    q: 'Quanto tempo demora para responder no WhatsApp?',
    a: 'O WhatsApp é o nosso canal oficial para agendamento e dúvidas rápidas. Em horário comercial, buscamos responder com organização e prioridade para quem quer marcar avaliação — especialmente quando você já envia nome e melhor período.',
  },
  {
    q: 'Depois do tratamento, vocês acompanham dúvidas?',
    a: 'Sim. Orientações de pós-atendimento fazem parte do cuidado — e, quando necessário, combinamos retornos para você evoluir com segurança e tranquilidade.',
  },
  {
    q: 'Dói colocar implante?',
    a: 'O procedimento é realizado com anestesia para você não sentir dor durante a intervenção. Depois, pode existir um incômodo leve — e nossa equipe explica como cuidar da forma mais confortável possível.',
  },
  {
    q: 'Quanto tempo dura um tratamento?',
    a: 'Depende do seu caso: ortodontia, implantes e clareamento têm ritmos diferentes. Na avaliação, apresentamos etapas e uma previsão transparente — sem promessa genérica.',
  },
  {
    q: 'Aceita convênio?',
    a: 'Alguns procedimentos podem variar entre particular e convênio. Para não ter erro, envie pelo WhatsApp qual é o seu plano e o que você precisa — a equipe orienta certinho.',
  },
  {
    q: 'Quanto custa a primeira avaliação?',
    a: 'Na avaliação entendemos história, expectativa e necessidades. Valores podem mudar conforme exames — fale com a recepção pelo WhatsApp para uma orientação inicial objetiva.',
  },
] as const

/**
 * FAQ acessível usando `<details>` (sem JavaScript extra) para expansão simples.
 */
export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-brand-navy/10 bg-brand-mist py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-center text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
          Perguntas frequentes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-[#1e3a5f]/80">
          Respostas objetivas — com foco em segurança, continuidade do cuidado e um
          contato bem organizado.
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm shadow-brand-navy/5 open:border-brand-navy/20 open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-medium text-brand-navy">
                <span className="flex items-start justify-between gap-3">
                  {item.q}
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-brand-navy/15 bg-brand-mist text-brand-navy transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-[#1e3a5f]/85">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
