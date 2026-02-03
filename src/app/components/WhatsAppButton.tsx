import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5517992778979"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 size-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 animate-bounce hover:animate-none"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
