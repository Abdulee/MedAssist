import React from 'react';

// FIX: Replaced JSX.Element with React.ReactNode to fix "Cannot find namespace 'JSX'" error.
const BenefitCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-slate-700 rounded-full mr-4 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400">
      {description}
    </p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Un Ecosistema de Beneficios</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Med Assist crea valor para cada actor del sistema sanitario, desde el paciente hasta la gestión del hospital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="Para los Pacientes"
            description="Informes claros y detallados al instante. Menos tiempo de espera y una atención médica centrada 100% en ellos."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
          />
          <BenefitCard
            title="Para los Doctores"
            description="Reducción drástica del tiempo de documentación. Menos 'burnout', más contacto visual con el paciente y más tiempo para la toma de decisiones clínicas."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
          />
          <BenefitCard
            title="Para los Hospitales"
            description="Optimización de los flujos de trabajo, aumento de la capacidad de atención y mejora de la calidad asistencial. Un salto cualitativo en eficiencia y rentabilidad."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15v5m-6 0v-5h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15v5m-6 0h6" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;