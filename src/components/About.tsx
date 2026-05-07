import { CLINIC_NAME } from '../constants/site'

const clinicPhoto =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80'

/**
 * História da clínica com foco em acolhimento, organização e continuidade do cuidado.
 */
export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-royal">
              Sobre a clínica
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
              Odontologia em Osasco com cara de consultório moderno — e atendimento de
              verdade
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#1e3a5f]/85">
              A {CLINIC_NAME} foi pensada para reunir organização, tecnologia e um time
              próximo do paciente. Aqui, a prioridade é você entender o tratamento: o
              que é urgente, o que pode esperar — e qual caminho faz mais sentido para o
              seu dia a dia.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#1e3a5f]/85">
              Sabemos que confiança não se constrói só no consultório: por isso damos
              atenção especial ao contato pelo WhatsApp e ao acompanhamento após os
              procedimentos. Queremos que você se sinta apoiado — da primeira mensagem ao
              retorno.
            </p>

            <div className="mt-8 rounded-2xl border border-brand-navy/15 bg-brand-mist/80 p-5 ring-1 ring-brand-navy/10">
              <p className="text-sm font-semibold text-brand-navy">
                Compromissos que guiam o nosso trabalho
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#1e3a5f]/90">
                <li className="flex gap-2">
                  <span className="mt-0.5 font-bold text-brand-royal" aria-hidden>
                    •
                  </span>
                  Biossegurança e higiene com rotina bem definida
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 font-bold text-brand-royal" aria-hidden>
                    •
                  </span>
                  Explicação clara: você sabe o que está sendo feito — e por quê
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 font-bold text-brand-royal" aria-hidden>
                    •
                  </span>
                  Continuidade no cuidado: dúvidas e orientações também contam
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <figure className="overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-white shadow-lg shadow-brand-navy/10 ring-1 ring-brand-navy/10">
              <img
                src={clinicPhoto}
                width={1200}
                height={900}
                alt="Ambiente da Sorriso Osasco Odontologia — consultório organizado e iluminado"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="border-t border-brand-navy/10 px-6 py-5 text-left">
                <p className="font-display text-lg font-semibold text-brand-navy">
                  {CLINIC_NAME}
                </p>
                <p className="mt-1 text-sm text-[#1e3a5f]/75">
                  Equipe multidisciplinar • foco em conforto, segurança e excelência no
                  atendimento
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
