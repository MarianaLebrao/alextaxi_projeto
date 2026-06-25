const env = import.meta.env;

export const publicContact = {
  whatsappNumber: env.VITE_PUBLIC_WHATSAPP_NUMBER ?? "",
  whatsappMessage: env.VITE_PUBLIC_WHATSAPP_MESSAGE ?? "Olá! Gostaria de solicitar um táxi.",
  phoneDisplay: env.VITE_PUBLIC_PHONE_DISPLAY ?? "",
  email: env.VITE_PUBLIC_EMAIL ?? "",
  instagram: env.VITE_PUBLIC_INSTAGRAM ?? "",
};

export function getWhatsAppUrl(message = publicContact.whatsappMessage) {
  return `https://wa.me/${publicContact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
