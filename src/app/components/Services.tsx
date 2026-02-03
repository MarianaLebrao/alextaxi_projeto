import { Clock, Shield, Star, MapPin, Users, Briefcase, Navigation } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';

const services = [
  {
    icon: Clock,
    title: 'Disponível 24/7',
    description: 'Atendimento a qualquer hora do dia ou da noite, todos os dias da semana.',
  },
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'Veículo em perfeito estado e motorista experiente e capacitado.',
  },
  {
    icon: Star,
    title: 'Serviço Premium',
    description: 'Carro limpo, ar condicionado e atendimento cordial sempre.',
  },
  {
    icon: MapPin,
    title: 'Conhecimento Local',
    description: 'Conheço todos os atalhos e as melhores rotas da cidade.',
  },
  {
    icon: Users,
    title: 'Corridas Particulares',
    description: 'Transporte para eventos, festas, aeroportos e viagens.',
  },
  {
    icon: Navigation,
    title: 'Viagens Longas',
    description: 'Viagens para outras cidades e estados com conforto e segurança.',
  },
  {
    icon: Briefcase,
    title: 'Corporativo',
    description: 'Serviço especializado para executivos e empresas.',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos transporte de qualidade com pontualidade e segurança
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-gray-900" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}