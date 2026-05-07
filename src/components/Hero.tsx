import {
  BRAND_TAGLINE,
  CLINIC_NAME,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from '../constants/site'
import { WhatsAppButton } from './WhatsAppButton'

/** Arte oficial da clínica em formato promocional (antes e depois — implante dentário). */
const HERO_IMAGE_SRC = '/hero-sorriso-osasco.png'

const praiseChips = [
  'Ótimo atendimento',
  'Ambiente agradável',
  'Equipe acolhedora',
  'Explicação clara',
] as const

/**
 * Seção principal com destaque visual da campanha oficial (imagem local),
 * fundo em azul marinho alinhado ao material impresso/digital da marca e CTAs para WhatsApp.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/10 bg-brand-navy text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle at 85% 20%, #ffffff 0, transparent 45%), radial-gradient(circle at 15% 80%, #2563eb 0, transparent 40%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
              <div
                className="pointer-events-none absolute -inset-6 rounded-[1.75rem] bg-gradient-to-br from-brand-royal/35 via-transparent to-transparent blur-2xl"
                aria-hidden
              />
              <figure className="relative">
                <div className="overflow-hidden rounded-xl bg-[#0a1f36] ring-[3px] ring-white/95 shadow-[0_28px_90px_-20px_rgba(0,0,0,0.65)]">
                  <img
                    src={HERO_IMAGE_SRC}
                    width={1080}
                    height={1080}
                    alt="Campanha Sorriso Osasco Odontologia — antes e depois de tratamento com implante dentário e chamada para agendar avaliação"
                    className="mx-auto block h-auto w-full max-h-[min(560px,78vh)] object-contain"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
                <figcaption className="mt-4 max-w-prose text-left text-xs leading-relaxed text-white/55 lg:text-sm">
                  Imagem de divulgação oficial da clínica. Todo tratamento é planejado após
                  avaliação clínica — cada caso é único.
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5">
            <div className="mx-auto max-w-lg lg:mx-0">
              <p className="animate-fade-up mb-4 inline-flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Sorriso Osasco Odontologia
                <span className="hidden h-px w-10 bg-white/25 sm:inline-block" aria-hidden />
                <span className="text-white/85">Osasco • Bussocaba</span>
              </p>

              <div
                className="animate-fade-up animate-delay-1 mb-5 h-px max-w-xs bg-gradient-to-r from-white/50 via-white/15 to-transparent"
                aria-hidden
              />

              <h1 className="font-display animate-fade-up animate-delay-1 text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.35rem]">
                Atendimento odontológico profissional, humanizado e perto de você
              </h1>

              <p className="animate-fade-up animate-delay-2 mt-4 text-base font-medium leading-relaxed text-white/90 sm:text-lg">
                {BRAND_TAGLINE}
              </p>
              <p className="animate-fade-up animate-delay-2 mt-4 text-base leading-relaxed text-white/75">
                Na {CLINIC_NAME}, organização e clareza guiam cada conversa. Pelo
                WhatsApp oficial, agendamos sua avaliação com praticidade — com retorno
                objetivo em horário comercial.
              </p>

              <div className="animate-fade-up animate-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <WhatsAppButton size="lg" variant="light">
                  Agendar avaliação pelo WhatsApp
                </WhatsAppButton>
                <a
                  href={PHONE_TEL_HREF}
                  className="text-center text-sm font-semibold text-white/95 underline decoration-white/35 underline-offset-4 transition hover:decoration-white sm:text-left"
                >
                  Telefone: {PHONE_DISPLAY}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {praiseChips.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-3 text-center sm:gap-4 sm:text-left">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur-md">
                  <dt className="text-[10px] font-semibold uppercase tracking-wide text-white/55 sm:text-[11px]">
                    Contato
                  </dt>
                  <dd className="mt-1 font-display text-sm font-semibold text-white sm:text-base">
                    WhatsApp
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur-md">
                  <dt className="text-[10px] font-semibold uppercase tracking-wide text-white/55 sm:text-[11px]">
                    Equipe
                  </dt>
                  <dd className="mt-1 font-display text-sm font-semibold text-white sm:text-base">
                    Atenta
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur-md">
                  <dt className="text-[10px] font-semibold uppercase tracking-wide text-white/55 sm:text-[11px]">
                    Avaliação
                  </dt>
                  <dd className="mt-1 font-display text-sm font-semibold text-white sm:text-base">
                    Sem pressa
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-20 bg-gradient-to-t from-white via-white/85 to-transparent"
        aria-hidden
      />
    </section>
  )
}
