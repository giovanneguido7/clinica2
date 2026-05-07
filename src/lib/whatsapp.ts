/**
 * Constrói uma URL do WhatsApp Web/App para iniciar uma conversa com a clínica.
 *
 * O número deve estar apenas com dígitos (código do país + DDD + número),
 * sem espaços, parênteses ou hífens — por exemplo, para o Brasil: `5511999999999`.
 *
 * @param phoneDigits - Número do WhatsApp em formato internacional, somente dígitos.
 * @param presetMessage - Texto opcional que já vem preenchido na conversa (útil para CTAs).
 * @returns Uma string `https://wa.me/...` pronta para usar em `href` de links e botões.
 */
export function buildWhatsAppUrl(
  phoneDigits: string,
  presetMessage?: string,
): string {
  const base = `https://wa.me/${phoneDigits}`
  if (!presetMessage?.trim()) {
    return base
  }
  const encoded = encodeURIComponent(presetMessage.trim())
  return `${base}?text=${encoded}`
}
