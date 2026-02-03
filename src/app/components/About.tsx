export function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1759890709185-da2bc44d64ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwdHJhbnNwb3J0YXRpb24lMjBuaWdodCUyMHRheGl8ZW58MXx8fHwxNzcwMTQzNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Serviço de táxi noturno"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Sobre o Motorista
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Com mais de 10 anos de experiência como taxista profissional, ofereço um serviço de 
              transporte confiável e seguro para toda a cidade e região metropolitana.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Meu compromisso é proporcionar conforto, pontualidade e segurança em cada corrida. 
              Seja para ir ao aeroporto, trabalho, eventos ou qualquer outro destino, você pode 
              contar comigo.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Veículo sempre limpo, manutenção em dia e atendimento cordial. Aceito pagamento em 
              dinheiro, PIX e cartão de crédito/débito.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-2">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">5000+</div>
                <div className="text-gray-600">Corridas Realizadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">100%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
