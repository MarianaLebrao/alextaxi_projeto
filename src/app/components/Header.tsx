import { Car, Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Header() {
  const whatsappNumber = "5517992778979"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de solicitar um táxi.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 p-2 rounded-lg">
            <Car className="h-6 w-6 text-gray-900" />
          </div>
          <div>
            <h1 className="text-xl">Alex Táxi Profissional</h1>
            <p className="text-sm text-gray-600">Transporte Confiável</p>
          </div>
        </div>

        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <Phone className="mr-2 h-4 w-4" />
          Contato
        </Button>
      </div>
    </header>
  );
}
