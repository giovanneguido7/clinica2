import { ADDRESS_LINE, MAP_EMBED_SRC, MAP_EXTERNAL_HREF } from '../constants/site'

/**
 * Localização da clínica na Av. Valter Boveri com mapa embutido e link para rotas.
 */
export function Location() {
  return (
    <section id="localizacao" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-royal">
            Onde estamos
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
            Dentista em Osasco — fácil de chegar na Av. Valter Boveri
          </h2>
          <p className="mt-3 text-base text-[#1e3a5f]/80">
            Estamos na região da Bussocaba. Use o mapa para planejar sua ida — se
            preferir, peça referências de acesso pelo WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-brand-navy/10 bg-brand-mist p-6 shadow-sm ring-1 ring-brand-navy/5">
              <p className="text-sm font-semibold text-brand-navy">Endereço</p>
              <p className="mt-2 text-sm leading-relaxed text-[#1e3a5f]/90">
                {ADDRESS_LINE}
              </p>
              <p className="mt-4 text-sm text-[#1e3a5f]/75">
                Região com fluxo de transporte público e estacionamentos na vizinhança —
                confirme detalhes ao agendar.
              </p>
              <a
                href={MAP_EXTERNAL_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-brand-royal underline-offset-4 hover:underline"
              >
                Traçar rota no Google Maps
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-brand-navy/10 shadow-lg shadow-brand-navy/10 ring-1 ring-brand-navy/10">
              <iframe
                title="Mapa da região da Sorriso Osasco Odontologia"
                className="aspect-[16/10] w-full"
                src={MAP_EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-xs text-[#1e3a5f]/55">
              Visualização aproximada via OpenStreetMap — para navegação precisa, use o
              Google Maps pelo botão acima.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
