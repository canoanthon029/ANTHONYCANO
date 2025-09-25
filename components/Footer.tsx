
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-6 border-t border-gray-900">
            <div className="container mx-auto px-6 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} El Barrio Fino. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
