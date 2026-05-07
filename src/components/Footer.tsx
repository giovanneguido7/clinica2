import {
  ADDRESS_LINE,
  CLINIC_NAME,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from '../constants/site'

/**
 * Rodapé institucional em azul marinho com texto claro.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-brand-navy py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-sm font-semibold tracking-tight text-white">
            {CLINIC_NAME}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">{ADDRESS_LINE}</p>
          <p className="mt-3 text-sm text-white/75">
            WhatsApp / telefone:{' '}
            <a
              href={PHONE_TEL_HREF}
              className="font-semibold text-white underline decoration-white/35 underline-offset-4 hover:decoration-white"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-end text-xs text-white/55 lg:text-right">
          <p>
            © {year} {CLINIC_NAME}. Todos os direitos reservados.
          </p>
          <p className="mt-2 max-w-xs lg:ml-auto">
            Informações sujeitas à atualização. Em caso de emergência, procure atendimento
            presencial ou serviço de urgência.
          </p>
        </div>
      </div>
    </footer>
  )
}
