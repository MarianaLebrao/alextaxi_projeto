import virtusCapaImg from "@/assets/images/virtusCapa.jpeg";
import virtus2Img from "@/assets/images/virtus2.jpeg";
import virtus3Img from "@/assets/images/virtus3.jpeg";

export function NewCar() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-600">
            Novidade na Frota
          </p>
          <h2 className="mb-4 text-4xl md:text-5xl">Novo Virtus para mais conforto nas viagens</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            O atendimento agora conta com um novo veículo, trazendo ainda mais conforto, espaço e
            elegância para corridas na cidade, traslados e viagens mais longas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src={virtusCapaImg}
              alt="Novo Volkswagen Virtus do Alex Táxi"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl bg-gray-900 p-8 text-white shadow-xl">
              <h3 className="mb-4 text-2xl">Mais conforto para cada corrida</h3>
              <p className="mb-6 text-gray-300">
                Um sedã moderno, confortável e bem equipado para manter o padrão de qualidade no
                atendimento e oferecer uma experiência ainda melhor aos passageiros.
              </p>
              <ul className="space-y-3 text-sm uppercase tracking-wide text-yellow-400">
                <li>Espaço interno amplo</li>
                <li>Conforto para viagens</li>
                <li>Visual moderno e elegante</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                <img
                  src={virtus2Img}
                  alt="Lateral do novo Virtus do Alex Táxi"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                <img
                  src={virtus3Img}
                  alt="Frente do novo Virtus do Alex Táxi"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
