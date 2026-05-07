const photos = [
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47287a5?auto=format&fit=crop&w=900&q=80',
    alt: 'Consultório odontológico moderno com iluminação clara e equipamentos organizados',
  },
  {
    src: 'https://images.unsplash.com/photo-1631540575919-17cb9fef47bf?auto=format&fit=crop&w=900&q=80',
    alt: 'Recepção clean com tons claros e detalhes em azul',
  },
  {
    src: 'https://images.unsplash.com/photo-1629909615859-10d2f56e64c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Instrumentação organizada reforçando higiene e cuidado',
  },
] as const

/**
 * Galeria ilustrativa do tipo de ambiente da clínica — limpo, organizado e profissional.
 */
export function ClinicGallery() {
  return (
    <section
      id="ambiente"
      className="scroll-mt-24 border-y border-brand-navy/10 bg-brand-ice py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-royal">
            Ambiente
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
            Um espaço pensado para passar confiança
          </h2>
          <p className="mt-3 text-base text-[#1e3a5f]/80">
            Imagens ilustrativas de ambientes no estilo que você espera de uma clínica
            organizada: luz boa, cores claras e sensação de limpeza.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {photos.map((p) => (
            <figure
              key={p.src}
              className="group overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-md shadow-brand-navy/10 ring-1 ring-brand-navy/5"
            >
              <img
                src={p.src}
                alt={p.alt}
                width={900}
                height={675}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
