import { Car } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="rounded-lg bg-yellow-400 p-2">
            <Car className="h-5 w-5 text-gray-900" />
          </div>
          <span className="text-lg">Alex Táxi Profissional</span>
        </div>
        <p className="text-sm text-gray-400">
          © {currentYear} Alex Táxi Profissional. Todos os direitos reservados.
        </p>
        <p className="mt-2 text-sm text-gray-500">Transporte seguro e confiável 24 horas por dia</p>
      </div>
    </footer>
  );
}
