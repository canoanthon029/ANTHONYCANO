import React, { useState, useCallback } from 'react';
import { SERVICES, BARBERS } from '../constants';
// FIX: Import 'Service' and 'Barber' types.
import type { Service, Barber } from '../types';

// Define ChildInput as a standalone component outside ParentComponent
interface ChildInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const ChildInput: React.FC<ChildInputProps> = ({ id, label, type, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-gray-800 border-gray-700 text-white rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500 transition"
      required
    />
  </div>
);

// Define ChildSelect as a standalone component
interface ChildSelectProps<T> {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: T[];
  getOptionValue: (option: T) => string;
  getOptionLabel: (option: T) => string;
}

const ChildSelect = <T,>({ id, label, value, onChange, options, getOptionValue, getOptionLabel }: ChildSelectProps<T>) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="w-full bg-gray-800 border-gray-700 text-white rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500 transition"
      required
    >
      <option value="">Seleccione...</option>
      {options.map((option, index) => (
        <option key={index} value={getOptionValue(option)}>
          {getOptionLabel(option)}
        </option>
      ))}
    </select>
  </div>
);


const Booking: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        barber: ''
    });
    const [confirmation, setConfirmation] = useState('');

    const timeSlots = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

    const getDaysInMonth = useCallback((year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    }, []);

    const getFirstDayOfMonth = useCallback((year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    }, []);

    const today = new Date();

    const handleDateClick = (day: number) => {
        const clickedDate = new Date(date.getFullYear(), date.getMonth(), day);
        if (clickedDate >= today || clickedDate.toDateString() === today.toDateString()) {
            setSelectedDate(day);
        }
    };
    
    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
        setSelectedDate(null);
    };

    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
        setSelectedDate(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(selectedDate && selectedTime && formData.service && formData.barber) {
            const finalDate = new Date(date.getFullYear(), date.getMonth(), selectedDate).toLocaleDateString('es-ES');
            setConfirmation(`¡Gracias, ${formData.name}! Tu cita para un ${formData.service} con ${BARBERS.find(b=>b.id === formData.barber)?.name} el ${finalDate} a las ${selectedTime} ha sido confirmada. Recibirás una notificación.`);
            // Reset form
            setSelectedDate(null);
            setSelectedTime(null);
            setFormData({ name: '', phone: '', email: '', service: '', barber: ''});
        } else {
            setConfirmation('Por favor, completa todos los campos, incluyendo fecha y hora.');
        }
    };

    const renderCalendar = () => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
            const isSelected = day === selectedDate;
            const isPast = new Date(year, month, day) < today && !isToday;
            
            days.push(
                <div key={day} 
                     className={`p-2 text-center cursor-pointer rounded-full transition-colors duration-200 ${isPast ? 'text-gray-600 cursor-not-allowed' : 'hover:gold-bg hover:text-black'} ${isToday ? 'gold-border border' : ''} ${isSelected ? 'gold-bg text-black' : ''}`}
                     onClick={() => !isPast && handleDateClick(day)}>
                    {day}
                </div>
            );
        }

        return (
            <div>
                <div className="flex justify-between items-center mb-4">
                    <button onClick={handlePrevMonth} className="font-bold text-xl">&lt;</button>
                    <h3 className="text-xl font-bold gold-text">{date.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}</h3>
                    <button onClick={handleNextMonth} className="font-bold text-xl">&gt;</button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-gray-400 mb-2">
                    <div>D</div><div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {days}
                </div>
            </div>
        );
    };

    return (
        <section id="booking" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 uppercase">Reserva tu <span className="gold-text">Cita</span></h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-900/50 p-8 rounded-lg shadow-lg border border-gray-800">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">1. Elige Fecha y Hora</h3>
                        {renderCalendar()}
                        <h4 className="font-bold mt-6 mb-4">Horas Disponibles:</h4>
                        <div className="grid grid-cols-4 gap-2">
                            {timeSlots.map(time => (
                                <button key={time} onClick={() => setSelectedTime(time)} className={`p-2 rounded-md transition-colors duration-200 ${selectedTime === time ? 'gold-bg text-black' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">2. Completa tus Datos</h3>
                        {confirmation ? (
                             <div className="bg-green-900/50 border border-green-500 text-green-300 p-4 rounded-lg text-center">
                                {confirmation}
                             </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <ChildInput id="name" label="Nombre Completo" type="text" value={formData.name} onChange={handleInputChange} placeholder="Tu nombre" />
                                <ChildInput id="phone" label="Número de Celular" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="987654321" />
                                <ChildInput id="email" label="Correo Electrónico" type="email" value={formData.email} onChange={handleInputChange} placeholder="tu@correo.com" />
                                <ChildSelect<Service> id="service" label="Servicio" value={formData.service} onChange={handleInputChange} options={SERVICES} getOptionValue={s => s.name} getOptionLabel={s => `${s.name} - ${s.price}`} />
                                <ChildSelect<Barber> id="barber" label="Barbero de Preferencia" value={formData.barber} onChange={handleInputChange} options={BARBERS} getOptionValue={b => b.id} getOptionLabel={b => `${b.name} - ${b.specialty}`} />
                                <button type="submit" className="w-full gold-bg text-black font-bold py-3 px-6 text-lg uppercase tracking-wider rounded-md hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20 mt-4">
                                    Confirmar Reserva
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;