import { LogoMark } from './LogoMark'

/**
 * Combina o selo (LogoMark) com o nome da clínica em tipografia próxima ao material oficial
 * (nome em serifada compacta + linha em destaque).
 *
 * @returns Bloco de marca para uso em cabeçalho e rodapé.
 */
export function BrandWordmark() {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <LogoMark size={40} />
      <span className="min-w-0">
        <span className="block font-serif text-[10px] font-bold uppercase leading-none tracking-[0.14em] text-brand-navy sm:text-[11px]">
          Sorriso Osasco
        </span>
        <span className="mt-0.5 block font-display text-[0.95rem] font-semibold leading-none tracking-tight text-brand-navy sm:text-base">
          Odontologia
        </span>
      </span>
    </span>
  )
}
