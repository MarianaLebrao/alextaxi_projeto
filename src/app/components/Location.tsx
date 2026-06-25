import { MapPin, Navigation, Clock } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { publicContact } from "@/config/public-contact";

export function Location() {
  const address = "R. Delegado Pinto de Tolêdo, 3005 - Parque Industrial, São José do Rio Preto - SP";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const wazeUrl = `https://waze.com/ul?q=${encodedAddress}&navigate=yes`;

  const handleWazeClick = () => {
    window.open(wazeUrl, "_blank");
  };

  const handleGoogleMapsClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank");
  };

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl">Nosso Ponto de Táxi</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Venha nos visitar ou solicite uma corrida pelo WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="w-full">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Ponto de Táxi"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-yellow-400 p-3">
                  <MapPin className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl">Endereço</h3>
                  <p className="text-lg text-gray-700">{address}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-yellow-400 p-3">
                  <Clock className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl">Horário de Atendimento</h3>
                  <p className="text-gray-700">
                    24 horas por dia
                    <br />
                    7 dias por semana
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 p-6">
              <h3 className="mb-4 text-xl text-gray-900">Como Chegar</h3>
              <p className="mb-6 text-gray-800">
                Use seu aplicativo de navegação favorito para chegar até nosso ponto de táxi
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={handleGoogleMapsClick}
                  className="flex-1 bg-white text-gray-900 hover:bg-gray-100"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Google Maps
                </Button>
                <Button
                  onClick={handleWazeClick}
                  className="flex-1 bg-blue-500 text-white hover:bg-blue-600"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Waze
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-gray-900 p-6 text-center text-white lg:col-span-2">
              <p className="mb-4 text-lg">Ou solicite que vamos até você!</p>
              <Button
                onClick={() => window.open(`https://wa.me/${publicContact.whatsappNumber}`, "_blank")}
                className="w-full bg-green-600 text-white hover:bg-green-700"
              >
                Chamar pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
