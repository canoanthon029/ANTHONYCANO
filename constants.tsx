
import React from 'react';
import type { Service, Barber, Testimonial } from './types';

// Icons
export const ScissorsIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8L18 8M6 16L18 16M9 5L15 19M15 5L9 19" />
    </svg>
);

export const RazorIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.118 18.065a4.5 4.5 0 01-2.183-5.565L5.7 3.73a1.5 1.5 0 012.333-1.002l1.088.628a1.5 1.5 0 01.62 1.956l-1.8 3.118a.5.5 0 00.866.5l3-1.732a1.5 1.5 0 011.96.619l2.857 4.949a4.5 4.5 0 01-5.565 2.183l-5.7-3.29z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 20.5a7.5 7.5 0 007.5-7.5" />
    </svg>
);

export const DesignIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
    </svg>
);

export const TreatmentIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9" />
    </svg>
);

// Data
export const SERVICES: Service[] = [
    { name: 'Corte Clásico', price: 'S/ 30', description: 'Corte a tijera y máquina, estilo tradicional.', icon: <ScissorsIcon className="w-12 h-12 gold-text mb-4"/> },
    { name: 'Perfilado de Barba', price: 'S/ 20', description: 'Definición y arreglo de barba con navaja.', icon: <RazorIcon className="w-12 h-12 gold-text mb-4"/> },
    { name: 'Diseños Tribales', price: 'S/ 40+', description: 'Cortes con diseños personalizados y creativos.', icon: <DesignIcon className="w-12 h-12 gold-text mb-4"/> },
    { name: 'Tratamiento Capilar', price: 'S/ 50', description: 'Hidratación profunda y fortalecimiento del cabello.', icon: <TreatmentIcon className="w-12 h-12 gold-text mb-4"/> },
];

export const BARBERS: Barber[] = [
    { id: 'juan', name: 'Juan Pérez', specialty: 'Especialista en fades', imageUrl: 'https://picsum.photos/400/400?random=1' },
    { id: 'luis', name: 'Luis Gonzáles', specialty: 'Experto en diseños', imageUrl: 'https://picsum.photos/400/400?random=2' },
];

export const TESTIMONIALS: Testimonial[] = [
    { name: 'Carlos R.', rating: 5, text: 'El mejor corte que he tenido en años. Juan es un verdadero artista.', imageUrl: 'https://picsum.photos/100/100?random=3' },
    { name: 'Miguel A.', rating: 5, text: 'El ambiente es genial y los barberos son muy profesionales. ¡Volveré pronto!', imageUrl: 'https://picsum.photos/100/100?random=4' },
    { name: 'Jorge S.', rating: 4, text: 'Excelente servicio y atención al detalle. Mi barba nunca se vio mejor.', imageUrl: 'https://picsum.photos/100/100?random=5' },
];
