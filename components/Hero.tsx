
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-32 text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-700/[0.05] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-6 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          <span className="block">Revolucionando la consulta médica.</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Menos teclado, más humanidad.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
          Med Assist es la solución de IA que transcribe y redacta informes médicos, permitiendo a los doctores centrarse en lo que más importa: sus pacientes.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#contacto"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Solicitar una Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
