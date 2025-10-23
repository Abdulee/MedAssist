
import React from 'react';

const Solution: React.FC = () => {
  const medicalEntities = ['Cefalea tensional', 'Hipertensión arterial (HTA)', 'Ansiedad generalizada', 'Ibuprofeno 600mg', 'Revisión en 4 semanas'];

  return (
    <section id="solucion" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Vea Med Assist en Acción</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Nuestra interfaz intuitiva convierte la conversación en un informe clínico estructurado en tiempo real.
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-700 shadow-2xl p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Panel 1: Transcripción en Vivo */}
          <div className="lg:col-span-1 flex flex-col">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              Transcripción en Vivo
            </h3>
            <div className="bg-slate-800 rounded-lg p-4 flex-grow text-sm text-gray-300 space-y-3 h-64 overflow-y-auto">
              <p><span className="font-semibold text-white">Doctor:</span> Buenos días, María. ¿Qué le trae por aquí?</p>
              <p><span className="font-semibold text-sky-300">Paciente:</span> Hola doctor. Vengo por un dolor de cabeza que no se me quita. Es como una presión en toda la cabeza, y llevo así casi dos semanas.</p>
              <p><span className="font-semibold text-white">Doctor:</span> Entiendo. ¿Ha notado algún otro síntoma? ¿Náuseas, sensibilidad a la luz?</p>
              <p><span className="font-semibold text-sky-300">Paciente:</span> No, nada de eso. Solo el dolor y a veces me siento un poco ansiosa. Además, la tensión me ha subido un poco últimamente.</p>
              <p><span className="font-semibold text-white">Doctor:</span> De acuerdo. Vamos a empezar con Ibuprofeno 600mg cada 8 horas y le veré en revisión en 4 semanas para controlar esa tensión.</p>
            </div>
          </div>
          
          {/* Panel 2: Entidades Médicas Clave */}
          <div className="lg:col-span-1 flex flex-col">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 8v5c0 .512.195 1.024.586 1.414l5 5L14 14l-5-5-5 5V8a2 2 0 012-2z" /></svg>
              Términos Clínicos Extraídos
            </h3>
            <div className="bg-slate-800 rounded-lg p-4 flex-grow flex flex-wrap gap-2 content-start">
                {medicalEntities.map((entity, index) => (
                    <span key={index} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full border border-cyan-700">
                        {entity}
                    </span>
                ))}
            </div>
          </div>

          {/* Panel 3: Informe Generado */}
          <div className="lg:col-span-1 flex flex-col">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Informe Preliminar
            </h3>
            <div className="bg-slate-800 rounded-lg p-4 flex-grow text-sm text-gray-300 space-y-2 h-64 overflow-y-auto">
              <p><strong className="text-white">Anamnesis:</strong> Paciente de 45 años que acude por cefalea de dos semanas de evolución, tipo opresivo, holocraneal, sin otra sintomatología neurológica acompañante.</p>
              <p><strong className="text-white">Antecedentes:</strong> Refiere cifras tensionales elevadas y sintomatología ansiosa.</p>
              <p><strong className="text-white">Juicio Clínico:</strong> Cefalea tensional. HTA en estudio. Trastorno de ansiedad generalizada.</p>
              <p><strong className="text-white">Plan:</strong> Se pauta tratamiento con Ibuprofeno 600mg/8h. Se solicita control de TA y se cita para revisión en 4 semanas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
