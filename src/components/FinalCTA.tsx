import { WhatsAppButton } from './WhatsAppButton'

/**
 * CTA final com ênfase em WhatsApp como canal rápido e prático.
 */
export function FinalCTA() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 bg-gradient-to-br from-brand-navy via-[#0c2138] to-brand-royal py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
          Atendimento em Osasco
        </p>
        <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight sm:text-[2rem] sm:leading-snug">
          Fale agora com nossa equipe e agende sua avaliação de forma rápida e prática
          pelo WhatsApp
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
          Se você procura uma{' '}
          <strong className="font-semibold text-white">
            clínica odontológica em Osasco
          </strong>{' '}
          com ambiente acolhedor e um time próximo do paciente, mande uma mensagem.
          Quanto mais objetiva for sua mensagem (nome + melhor horário), mais rápido
          conseguimos organizar seu atendimento.
        </p>

        <div className="mt-9 flex justify-center">
          <WhatsAppButton
            size="lg"
            variant="primary"
            className="animate-wa-pulse px-8 shadow-xl shadow-black/25"
            message="Olá! Quero agendar uma avaliação na Sorriso Osasco Odontologia."
          >
            Agendar avaliação pelo WhatsApp agora
          </WhatsAppButton>
        </div>

        <p className="mt-6 text-xs text-white/75">
          Respostas em horário comercial • canal oficial para agendamento e orientações
          iniciais
        </p>
      </div>
    </section>
  )
}
