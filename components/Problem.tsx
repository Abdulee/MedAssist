import React from 'react';
import medicoBurnout from '@/imgs/medicoBurnout.png';

// FIX: Replaced JSX.Element with React.ReactNode to fix "Cannot find namespace 'JSX'" error.
const StatCard: React.FC<{ value: string; label: string; icon: React.ReactNode }> = ({ value, label, icon }) => (
  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
    <div className="flex justify-center mb-4 text-cyan-400">
      {icon}
    </div>
    <p className="text-4xl font-bold text-white">{value}</p>
    <p className="text-gray-400 mt-1">{label}</p>
  </div>
);

const Problem: React.FC = () => {
  return (
    <section id="problema" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            El Reto del Sistema Sanitario en España
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Las largas listas de espera y el agotamiento del personal médico son barreras críticas para una atención de calidad. Los datos lo confirman.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            value="120+ Días"
            label="de espera media para especialistas en Andalucía."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
          />
          <StatCard
            value="4-6 Horas"
            label="diarias dedicadas a tareas administrativas por médico."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <StatCard
            value="60%"
            label="de los médicos reportan síntomas de 'burnout'."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
        </div>
        <div className="mt-16 text-center">
            <img src={medicoBurnout} alt="Médico estresado mirando un ordenador" className="rounded-lg mx-auto shadow-2xl opacity-70"/>
            <p className="text-gray-500 italic mt-4">Un profesional de la salud no debería pasar más tiempo con un teclado que con sus pacientes.</p>
        </div>
      </div>
    </section>
  );
};

export default Problem;