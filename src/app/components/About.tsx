import aboutImageUrl from "@/assets/images/aeroportoguarulhos.jpeg";

export function About() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src={aboutImageUrl}
              alt="Serviço de táxi noturno"
              className="h-[500px] w-full rounded-lg object-cover shadow-xl"
            />
          </div>

          <div>
            <h2 className="mb-6 text-4xl md:text-5xl">Sobre o Motorista</h2>
            <p className="mb-4 text-lg text-gray-700">
              Com mais de 10 anos de experiência como taxista profissional, ofereço um serviço de
              transporte confiável e seguro para toda a cidade de São José do Rio Preto e região.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Meu compromisso é proporcionar conforto, pontualidade e segurança em cada corrida.
              Seja para ir ao aeroporto, realizar agendamentos de madrugada, ir ao trabalho, eventos
              ou qualquer outro destino, você pode contar comigo.
            </p>
            <p className="mb-6 text-lg text-gray-700">
              Veículo sempre limpo, manutenção em dia e atendimento cordial. Aceito pagamento em
              dinheiro, PIX e cartão de crédito/débito.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mb-2 text-4xl">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl">5000+</div>
                <div className="text-gray-600">Atendimentos</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl">100%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
