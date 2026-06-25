import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { getWhatsAppUrl, publicContact } from "@/config/public-contact";

export function Contact() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  const handlePhoneClick = () => {
    window.open(`tel:${publicContact.whatsappNumber}`, "_blank");
  };

  const handleEmailClick = () => {
    window.open(`mailto:${publicContact.email}`, "_blank");
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${publicContact.instagram.replace("@", "")}`, "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl md:text-5xl">Entre em Contato</h2>
        <p className="mb-12 text-xl text-gray-300">
          Solicite seu táxi agora mesmo! Estou sempre disponível para atendê-lo.
        </p>

        <div className="mb-12">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-600 px-12 py-8 text-xl text-white shadow-2xl transition-transform hover:scale-105 hover:bg-green-700"
          >
            <MessageCircle className="mr-3 h-7 w-7" />
            Chamar no WhatsApp
          </Button>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Button
            onClick={handlePhoneClick}
            variant="outline"
            className="border-white bg-white/10 px-6 py-6 text-lg text-white backdrop-blur-sm hover:bg-white/20"
          >
            <Phone className="mr-2 h-5 w-5" />
            {publicContact.phoneDisplay}
          </Button>

          <Button
            onClick={handleEmailClick}
            variant="outline"
            className="border-white bg-white/10 px-6 py-6 text-lg text-white backdrop-blur-sm hover:bg-white/20"
          >
            <Mail className="mr-2 h-5 w-5" />
            {publicContact.email}
          </Button>
        </div>

        <div>
          <h3 className="mb-6 text-2xl">Siga nas Redes Sociais</h3>
          <div className="flex justify-center gap-4">
            <Button
              onClick={handleInstagramClick}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6 text-white hover:from-purple-700 hover:to-pink-700"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
