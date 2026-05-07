type LogoMarkProps = {
  /** Tamanho visual do ícone em pixels (largura e altura iguais). */
  size?: number
  /** Classe Tailwind extra (ex.: sombra). */
  className?: string
}

/**
 * Selo circular da marca em tons de azul (institucional), com ícone de dente em branco.
 *
 * @param size - Diâmetro do selo em px (padrão: 44).
 * @param className - Classes CSS adicionais aplicadas ao elemento raiz `<span>`.
 * @returns Um `<span>` com SVG acessível (`role="img"` + nome da clínica).
 */
export function LogoMark({ size = 44, className = '' }: LogoMarkProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full shadow-md shadow-brand-navy/20 ring-2 ring-white ${className}`}
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(155deg, #2563eb 0%, #1a4a8c 42%, #0f2744 100%)',
      }}
      role="img"
      aria-label="Sorriso Osasco Odontologia"
    >
      <svg
        width={Math.round(size * 0.58)}
        height={Math.round(size * 0.58)}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M24 8c-4.5 0-8 3.2-8 8.2 0 2.1.6 3.8 1.4 5.5.8 1.6 1.6 3.2 1.6 5.1 0 2.4-.9 4.4-2 6.1-.5.8-.2 1.8.7 2.1 2.4.9 5.1 1.5 7.3 1.5s4.9-.6 7.3-1.5c.9-.3 1.2-1.3.7-2.1-1.1-1.7-2-3.7-2-6.1 0-1.9.8-3.5 1.6-5.1.8-1.7 1.4-3.4 1.4-5.5C32 11.2 28.5 8 24 8z"
          stroke="#ffffff"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M24 18v14"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M24 18c-2 0-3.5 1.6-3.5 3.6h7c0-2-1.6-3.6-3.5-3.6z"
          stroke="#ffffff"
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M22 26h4v6h-4z"
          stroke="#ffffff"
          strokeWidth="1.6"
          fill="rgba(255,255,255,0.12)"
        />
      </svg>
    </span>
  )
}
