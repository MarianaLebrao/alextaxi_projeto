import { Phone, MapPin } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { getWhatsAppUrl } from "@/config/public-contact";
import heroImageUrl from "@/assets/images/hero.jpeg";

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageUrl}
          alt="Táxi em Rio Preto - Alex Táxi"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <h1 className="mb-6 text-5xl md:text-7xl">
          Táxi em Rio Preto <br />
          <span className="mt-4 block text-3xl md:text-5xl">Transporte Seguro e Confiável</span>
        </h1>
        <p className="mb-8 text-xl text-gray-200 md:text-2xl">
          Taxista profissional com anos de experiência. Atendimento 24 horas, 7 dias por semana.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-600 px-8 py-6 text-lg text-white hover:bg-green-700"
          >
            <Phone className="mr-2 h-5 w-5" />
            Chamar no WhatsApp
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-sm hover:bg-white/20"
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MapPin className="mr-2 h-5 w-5" />
            Conheça os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
}
