import { Car, Phone } from "lucide-react";

import { Button } from "@/app/components/ui/button";

export function Header() {
  const whatsappNumber = "5517992778979";
  const whatsappMessage = "Olá! Gostaria de solicitar um táxi.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-md backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-yellow-400 p-2">
            <Car className="h-6 w-6 text-gray-900" />
          </div>
          <div>
            <h1 className="text-xl">Alex Táxi Profissional</h1>
            <p className="text-sm text-gray-600">Transporte Confiável</p>
          </div>
        </div>

        <Button onClick={handleWhatsAppClick} className="bg-green-600 text-white hover:bg-green-700">
          <Phone className="mr-2 h-4 w-4" />
          Contato
        </Button>
      </div>
    </header>
  );
}
