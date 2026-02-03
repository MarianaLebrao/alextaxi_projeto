import { MapPin, Navigation, Clock } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Location() {
  // Substitua estas coordenadas pela localização real do ponto de táxi
  const address = "R. Delegado Pinto de Tolêdo, 3005 - Parque Industrial, São José do Rio Preto - SP";
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.452816258628!2d-49.38520048954964!3d-20.81341358070238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad5c36f8b7c7%3A0x3ad64e051f36ba03!2sR.%20Delegado%20Pinto%20de%20Tol%C3%AAdo%2C%203005%20-%20Parque%20Industrial%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015010-080!5e0!3m2!1spt-BR!2sbr!4v1770154880724!5m2!1spt-BR!2sbr";
  const wazeUrl = "https://waze.com/ul?ll=-20.81341358070238,-49.38520048954964&navigate=yes";

  const handleWazeClick = () => {
    window.open(wazeUrl, '_blank');
  };

  const handleGoogleMapsClick = () => {
    window.open("https://maps.google.com/?q=-20.81341358070238,-49.38520048954964", '_blank');
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Nosso Ponto de Táxi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Venha nos visitar ou solicite uma corrida pelo WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="w-full">
            <div className="rounded-lg overflow-hidden shadow-xl">
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

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Endereço</h3>
                  <p className="text-gray-700 text-lg">{address}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-700">
                    24 horas por dia<br />
                    7 dias por semana
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-6">
              <h3 className="text-xl mb-4 text-gray-900">Como Chegar</h3>
              <p className="text-gray-800 mb-6">
                Use seu aplicativo de navegação favorito para chegar até nosso ponto de táxi
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleGoogleMapsClick}
                  className="bg-white hover:bg-gray-100 text-gray-900 flex-1"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Google Maps
                </Button>
                <Button
                  onClick={handleWazeClick}
                  className="bg-blue-500 hover:bg-blue-600 text-white flex-1"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Waze
                </Button>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-lg p-6 text-center lg:col-span-2">
              <p className="text-lg mb-4">
                Ou solicite que vamos até você!
              </p>
              <Button
                onClick={() => window.open('https://wa.me/5517992778979', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white w-full"
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