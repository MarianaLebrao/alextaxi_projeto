import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Contact() {
  const whatsappNumber = "5517992778979"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de solicitar um táxi.";
  const phoneNumber = "(17) 99277-8979"; // Substitua pelo número real
  const email = "alexmurauskas93@gmail.com"; // Substitua pelo email real
  const instagram = "@alex.taxiexecutivo.sjriopreto"; // Substitua pelo Instagram real

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${whatsappNumber}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagram.replace('@', '')}`, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6">
          Entre em Contato
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Solicite seu táxi agora mesmo! Estou sempre disponível para atendê-lo.
        </p>

        {/* WhatsApp Button - Destaque */}
        <div className="mb-12">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-8 text-xl shadow-2xl hover:scale-105 transition-transform"
          >
            <MessageCircle className="mr-3 h-7 w-7" />
            Chamar no WhatsApp
          </Button>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Button
            onClick={handlePhoneClick}
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white px-6 py-6 text-lg backdrop-blur-sm"
          >
            <Phone className="mr-2 h-5 w-5" />
            {phoneNumber}
          </Button>

          <Button
            onClick={handleEmailClick}
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white px-6 py-6 text-lg backdrop-blur-sm"
          >
            <Mail className="mr-2 h-5 w-5" />
            {email}
          </Button>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl mb-6">Siga nas Redes Sociais</h3>
          <div className="flex justify-center gap-4">
            <Button
              onClick={handleInstagramClick}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6"
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
