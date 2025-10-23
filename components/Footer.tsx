
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Logo className="h-10 w-auto mb-4" />
            <p className="text-gray-400">
              Transformando la sanidad en Málaga, Andalucía y toda España.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Soluciones</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#solucion" className="text-base text-gray-300 hover:text-white">Demostración</a></li>
                <li><a href="#beneficios" className="text-base text-gray-300 hover:text-white">Beneficios</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Precios</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Empresa</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Carreras</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Contacto</a></li>
              </ul>
            </div>
             <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacidad</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Términos</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Med Assist. Todos los derechos reservados.</p>
           <p className="text-sm text-gray-500 mt-1">Con sede en Málaga, España.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
