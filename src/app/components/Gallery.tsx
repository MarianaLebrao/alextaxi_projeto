import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/components/ui/carousel";

import caldasNovasImg from "@/assets/images/caldasnovas.jpeg";
import linsImg from "@/assets/images/lins.jpeg";
import pocosDeCaldasImg from "@/assets/images/pocos-de-caldas.jpeg";
import ribeiraoPretoHotelImg from "@/assets/images/ribeiraopretohotel.jpeg";
import rodoviaEngenheiroRonanRochaImg from "@/assets/images/rodovia-engenheiro-ronan-rocha.jpeg";
import saoCarlosParadaImg from "@/assets/images/sao-carlos-parada.jpeg";
import saoCarlosImg from "@/assets/images/saocarlos.jpeg";
import varginhaImg from "@/assets/images/varginha.jpeg";

const images = [
  {
    url: saoCarlosImg,
    alt: "Táxi em São Carlos",
    location: "São Carlos",
  },
  {
    url: linsImg,
    alt: "Táxi em Lins",
    location: "Lins",
  },
  {
    url: ribeiraoPretoHotelImg,
    alt: "Táxi em Ribeirão Preto",
    location: "Ribeirão Preto",
  },
  {
    url: saoCarlosParadaImg,
    alt: "Táxi em São Carlos",
    location: "São Carlos",
  },
  {
    url: pocosDeCaldasImg,
    alt: "Táxi em Poços de Caldas",
    location: "Poços de Caldas",
  },
  {
    url: rodoviaEngenheiroRonanRochaImg,
    alt: "Táxi na Rodovia Engenheiro Ronan Rocha",
    location: "Rodovia Engenheiro Ronan Rocha",
  },
  {
    url: varginhaImg,
    alt: "Táxi em Varginha",
    location: "Varginha",
  },
];

const featuredImage = {
  url: caldasNovasImg,
  alt: "Táxi em Caldas Novas",
  location: "Caldas Novas",
};

export function Gallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api || isPaused) return;

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => window.clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section id="galeria" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Nosso Táxi</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Veículos confortáveis, limpos e sempre bem cuidados para sua segurança e conforto
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-7xl px-10 md:px-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <CarouselContent className="-ml-6">
            {images.map((image, index) => (
              <CarouselItem
                key={`${image.location}-${index}`}
                className="pl-6 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <ImageWithFallback
                      src={image.url}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="flex items-center gap-2 text-yellow-500 drop-shadow-md">
                        <MapPin className="size-5 fill-yellow-500 text-black" />
                        <span className="text-sm font-bold uppercase tracking-wide">
                          {image.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 border-yellow-400 bg-white/95 text-gray-900 hover:bg-yellow-400 disabled:opacity-40" />
          <CarouselNext className="right-0 border-yellow-400 bg-white/95 text-gray-900 hover:bg-yellow-400 disabled:opacity-40" />
        </Carousel>

        <div className="mt-12 rounded-2xl bg-gray-900 p-8 text-white md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl md:text-3xl">Veículo Equipado</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-yellow-400"></span>
                  <span>Ar condicionado</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-yellow-400"></span>
                  <span>Som ambiente</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-yellow-400"></span>
                  <span>Bancos confortáveis</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-yellow-400"></span>
                  <span>Porta-malas espaçoso</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-yellow-400"></span>
                  <span>Higienizado diariamente</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-yellow-400 p-6 text-center text-gray-900">
              <div className="group relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <img
                  src={featuredImage.url}
                  alt={featuredImage.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-2 text-yellow-500 drop-shadow-md">
                    <MapPin className="size-5 fill-yellow-500 text-black" />
                    <span className="text-sm font-bold uppercase tracking-wide">
                      {featuredImage.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
