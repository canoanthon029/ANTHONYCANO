
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main>
                <Hero />
                <Services />
                <About />
                <Booking />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
