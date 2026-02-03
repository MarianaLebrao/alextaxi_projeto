import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const images = [
  {
    url: "https://images.unsplash.com/photo-1518614768202-663a3a0ecf59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjB0YXhpJTIwY2FyfGVufDF8fHx8MTc3MDA2NzI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Táxi amarelo profissional"
  },
  {
    url: "https://images.unsplash.com/photo-1759429025886-74fc0ea762e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXhpJTIwZHJpdmVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDExNzU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Motorista profissional"
  },
  {
    url: "https://images.unsplash.com/photo-1759421164564-65c4fe22d0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwdGF4aSUyMHNlcnZpY2V8ZW58MXx8fHwxNzcwMTQzNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Serviço de táxi na cidade"
  }
];

export function Gallery() {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Nosso Táxi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veículos confortáveis, limpos e sempre bem cuidados para sua segurança e conforto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 text-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl mb-4">
                Veículo Equipado
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="size-2 bg-yellow-400 rounded-full"></span>
                  <span>Ar condicionado</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-2 bg-yellow-400 rounded-full"></span>
                  <span>Som ambiente</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-2 bg-yellow-400 rounded-full"></span>
                  <span>Bancos confortáveis</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-2 bg-yellow-400 rounded-full"></span>
                  <span>Porta-malas espaçoso</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-2 bg-yellow-400 rounded-full"></span>
                  <span>Higienizado diariamente</span>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-400 text-gray-900 rounded-xl p-6 text-center">
              <p className="text-lg mb-4">Adicione suas próprias fotos aqui!</p>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-4xl">📸</span>
              </div>
              <p className="text-sm mt-4 text-gray-700">
                Substitua as imagens pelas fotos do seu táxi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
