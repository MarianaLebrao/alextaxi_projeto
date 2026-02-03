import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Hero() {
  const whatsappNumber = "5517992778979"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de solicitar um táxi.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1765227115930-999c94d1ed3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0YXhpJTIwZHJpdmVyJTIweWVsbG93JTIwY2FifGVufDF8fHx8MTc3MDE0MzY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Táxi profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl mb-6">
          Transporte Seguro e Confiável
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Taxista profissional com anos de experiência. Atendimento 24 horas, 7 dias por semana.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Chamar no WhatsApp
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white px-8 py-6 text-lg backdrop-blur-sm"
            onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MapPin className="mr-2 h-5 w-5" />
            Conheça os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
}
