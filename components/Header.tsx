
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { href: '#home', text: 'Inicio' },
        { href: '#services', text: 'Servicios' },
        { href: '#about', text: 'Nosotros' },
        { href: '#booking', text: 'Reservas' },
        { href: '#contact', text: 'Contacto' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm shadow-md shadow-black/30">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#home" className="text-2xl font-black uppercase gold-text">
                    El Barrio Fino
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-white hover:gold-text transition duration-300 font-semibold">
                            {link.text}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black/90">
                    <nav className="flex flex-col items-center py-4">
                         {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-white py-2 hover:gold-text transition duration-300 font-semibold">
                                {link.text}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
