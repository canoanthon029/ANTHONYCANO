
import React from 'react';
import { BARBERS } from '../constants';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 uppercase"><span className="gold-text">Nuestra</span> Historia</h2>
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="md:w-1/2">
                        <img src="https://picsum.photos/800/600?random=6" alt="Interior de la barbería" className="rounded-lg shadow-lg w-full"/>
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Desde 2015, "El Barrio Fino" ha sido más que una simple barbería; es un santuario de estilo y masculinidad en el corazón de la ciudad. Nacimos de la pasión por el arte del barbero tradicional, fusionándolo con las últimas tendencias urbanas. Nuestro compromiso es ofrecer una experiencia única, donde cada cliente no solo recibe un corte perfecto, sino un momento de relajación y confianza.
                        </p>
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-center mb-10 uppercase">Nuestro <span className="gold-text">Equipo</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {BARBERS.map((barber) => (
                        <div key={barber.id} className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                            <img src={barber.imageUrl} alt={barber.name} className="w-32 h-32 rounded-full object-cover border-4 gold-border"/>
                            <div>
                                <h4 className="text-2xl font-bold gold-text">{barber.name}</h4>
                                <p className="text-white font-semibold">{barber.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
