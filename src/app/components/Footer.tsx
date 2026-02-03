import { Car } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-yellow-400 p-2 rounded-lg">
            <Car className="h-5 w-5 text-gray-900" />
          </div>
          <span className="text-lg">Alex Táxi Profissional</span>
        </div>
        <p className="text-gray-400 text-sm">
          © {currentYear} Alex Táxi Profissional. Todos os direitos reservados.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Transporte seguro e confiável 24 horas por dia
        </p>
      </div>
    </footer>
  );
}
