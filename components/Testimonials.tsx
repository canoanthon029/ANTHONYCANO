
import React from 'react';
import { TESTIMONIALS } from '../constants';

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < rating} />)}
        </div>
    );
};


const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 uppercase">Opiniones de <span className="gold-text">Clientes</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 flex flex-col items-center text-center shadow-lg">
                            <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 gold-border"/>
                            <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                            <div className="mb-4">
                                <StarRating rating={testimonial.rating} />
                            </div>
                            <p className="text-gray-400 italic">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
