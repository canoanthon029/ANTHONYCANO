
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 uppercase">Nuestros <span className="gold-text">Servicios</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES.map((service, index) => (
                        <div key={index} className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                            {service.icon}
                            <h3 className="text-2xl font-bold gold-text mb-2">{service.name}</h3>
                            <p className="text-gray-400 mb-4 flex-grow">{service.description}</p>
                            <p className="text-2xl font-black gold-text">{service.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
