
import type React from 'react';

export interface Service {
    name: string;
    price: string;
    description: string;
    icon: React.ReactNode;
}

export interface Barber {
    id: string;
    name: string;
    specialty: string;
    imageUrl: string;
}

export interface Testimonial {
    name: string;
    rating: number;
    text: string;
    imageUrl: string;
}
