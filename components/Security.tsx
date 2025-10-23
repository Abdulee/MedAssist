import React from 'react';

// FIX: Replaced JSX.Element with React.ReactNode to fix "Cannot find namespace 'JSX'" error.
const Feature: React.FC<{ title: string, description: string, icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="flex">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500/10 text-blue-400">
                {icon}
            </div>
        </div>
        <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-white">{title}</dt>
            <dd className="mt-2 text-base text-gray-400">{description}</dd>
        </div>
    </div>
);

const Security: React.FC = () => {
    return (
        <section id="seguridad" className="py-20 bg-slate-800/30">
            <div className="container mx-auto px-6">
                <div className="lg:text-center">
                    <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Confianza y Cumplimiento</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Seguridad como pilar fundamental
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                        Diseñamos nuestra infraestructura y modelos con los más altos estándares de seguridad y privacidad desde el primer día.
                    </p>
                </div>

                <div className="mt-12">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <Feature
                            title="Modelos Open Source y Auditables"
                            description="Utilizamos modelos de lenguaje de código abierto, afinados por nosotros. Esto garantiza transparencia total y evita la dependencia de 'cajas negras'."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>}
                        />
                        <Feature
                            title="Infraestructura Zero Trust"
                            description="Nuestra arquitectura de Confianza Cero significa que verificamos cada solicitud y acceso, protegiendo los datos de forma proactiva contra amenazas internas y externas."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                        />
                        <Feature
                            title="Alojamiento 100% en la UE"
                            description="Todos nuestros servidores y datos residen exclusivamente en centros de datos ubicados en la Unión Europea, garantizando el cumplimiento del GDPR y la soberanía de los datos."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.516L7.737 16.516a1 1 0 10-1.474-1.474l-1.474 1.474a1 1 0 101.474 1.474l1.474-1.474zM11 19h2" /><path d="M12 6c-2.485 0-4.5 2.015-4.5 4.5S9.515 15 12 15s4.5-2.015 4.5-4.5S14.485 6 12 6z" /><path d="M12 6V3m0 18v-3" /><path d="M12 6c-2.485 0-4.5 2.015-4.5 4.5S9.515 15 12 15s4.5-2.015 4.5-4.5S14.485 6 12 6z" /></svg>}
                        />
                        <Feature
                            title="Alta Disponibilidad"
                            description="Con una infraestructura redundante y sistemas de conmutación por error, garantizamos un tiempo de actividad del 99.9%, para que Med Assist esté siempre disponible cuando lo necesite."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a11 11 0 0115.556 0m-1.414-1.414a8 8 0 01-11.314 0" /></svg>}
                        />
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Security;