
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=10')" }}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 p-6 flex flex-col items-center">
                <h1 className="text-6xl md:text-8xl font-black uppercase gold-text tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    El Barrio Fino
                </h1>
                <p className="mt-4 mb-8 text-xl md:text-2xl font-light text-white tracking-widest">
                    Estilo que marca diferencia
                </p>
                <a href="#booking" className="gold-bg text-black font-bold py-4 px-10 text-lg uppercase tracking-wider rounded-sm hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                    Reservar tu corte ahora
                </a>
            </div>
        </section>
    );
};

export default Hero;
