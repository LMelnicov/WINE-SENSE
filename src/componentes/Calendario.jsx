import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css"
import '../App.css';
import dayjs from 'dayjs';
import "dayjs/locale/es";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



dayjs.locale("es");

// Imágenes
import Wine from "../assets/logo1.png";
import Fondo from "../assets/fondovino.png";
import Viamonte from "../assets/viamonte.jpg";
import A16 from "../assets/a16.jpg";
import Andeluna from "../assets/andeluna.jpg";
import Maal from "../assets/maal.jpg";
import Trivento from "../assets/trivento.jpg";
import Sinfin from "../assets/sinfin.jpg";

const Calendario = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Handles para manejar las rutas
    const handleVisitas = () => navigate('/visitas');
    const handleSunsets = () => navigate('/sunsets');
    const handleHome = () => navigate('/home');
    const handleCalendario = () => navigate('/calendario');

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/login'); // Redirige al usuario a la pantalla de login después de cerrar sesión
            })
            .catch((error) => {
                console.error("Error al cerrar sesión: ", error);
            });
    };

    const localizer = dayjsLocalizer(dayjs);

    // Personalización de los botones del calendario
    const CustomToolbar = (toolbar) => {
        return (
            <div className="rbc-toolbar text-uppercase font-bold">
                <span className="rbc-btn-group">
                    <button onClick={() => toolbar.onNavigate('PREV')}><FaArrowLeft /></button>
                </span>
                <span className="rbc-toolbar-label">{toolbar.label}</span>
                <span className="rbc-btn-group">
                    <button onClick={() => toolbar.onNavigate('NEXT')}><FaArrowRight /></button>
                </span>
            </div>
        );
    };

    // Array de eventos
    const events = [
        {
            start: dayjs('2024-11-01T19:00:00').toDate(),
            end: dayjs('2024-11-01T21:00:00').toDate(),
            title: "Viamonte",
            imagen: Viamonte,
            reservas: 400
        },
        {
            start: dayjs('2024-11-02T19:00:00').toDate(),
            end: dayjs('2024-11-02T21:00:00').toDate(),
            title: "A16",
            imagen: A16,
            reservas: 350
        },
        {
            start: dayjs('2024-11-09T19:00:00').toDate(),
            end: dayjs('2024-11-09T21:00:00').toDate(),
            title: "Andeluna",
            imagen: Andeluna,
            reservas: 300
        },
        {
            start: dayjs('2024-11-08T19:00:00').toDate(),
            end: dayjs('2024-11-08T21:00:00').toDate(),
            title: "MAAL",
            imagen: Maal,
            reservas: 300
        },
        {
            start: dayjs('2024-11-16T19:00:00').toDate(),
            end: dayjs('2024-11-16T21:00:00').toDate(),
            title: "Viamonte",
            imagen: Viamonte,
            reservas: 350
        },
        {
            start: dayjs('2024-11-17T19:00:00').toDate(),
            end: dayjs('2024-11-17T21:00:00').toDate(),
            title: "Viamonte",
            imagen: Viamonte,
            reservas: 250
        },
        {
            start: dayjs('2024-11-15T19:00:00').toDate(),
            end: dayjs('2024-11-15T21:00:00').toDate(),
            title: "Trivento",
            imagen: Trivento,
            reservas: 250
        },
        {
            start: dayjs('2024-11-22T19:00:00').toDate(),
            end: dayjs('2024-11-22T21:00:00').toDate(),
            title: "Trivento",
            imagen: Trivento,
            reservas: 150
        },
        {
            start: dayjs('2024-11-23T19:00:00').toDate(),
            end: dayjs('2024-11-23T21:00:00').toDate(),
            title: "Andeluna",
            imagen: Andeluna,
            reservas: 100
        },
        {
            start: dayjs('2024-11-29T19:00:00').toDate(),
            end: dayjs('2024-11-29T21:00:00').toDate(),
            title: "Sin Fin",
            imagen: Sinfin,
            reservas: 100
        },
        {
            start: dayjs('2024-11-30T19:00:00').toDate(),
            end: dayjs('2024-11-30T21:00:00').toDate(),
            title: "Sin Fin",
            imagen: Sinfin,
            reservas: 100
        },
    ];

    // Función que aplica estilos e imágenes a días específicos
    const dayPropGetter = (date) => {
        // Verificar si el día actual tiene una imagen asociada
        const diaEspecial = events.find(d => d.start.toDateString() === date.toDateString());

        if (diaEspecial) {
            return {
                style: {
                    backgroundImage: `url(${diaEspecial.imagen})`,
                    filter: 'opacity(0.7)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    border: '1px solid rgba(0, 0, 0, 0.1)'
                }
            };
        }
        // Si no es un día especial, se retorna sin estilos especiales
        return {};
    };


    const CustomEvent = ({ event }) => {
        const { reservas } = event;
        const [showTooltip, setShowTooltip] = useState(false);

        let backgroundColor;
        let tooltipContent = '';

        // Determina el color en base a reservas
        if (reservas < 200) {
            backgroundColor = 'green';
            tooltipContent = 'Entradas disponibles';
        } else if (reservas < 300) {
            backgroundColor = 'yellow';
            tooltipContent = 'Mas del 50% de entradas vendidas';
        } else {
            backgroundColor = 'red';
            tooltipContent = 'Últimas entradas';
        }

        return (
            <div
                style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: backgroundColor,
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '5px',
                    cursor: 'pointer'
                }}
                onMouseEnter={() => setShowTooltip(true)} // Mostrar tooltip al pasar el mouse
                onMouseLeave={() => setShowTooltip(false)} // Ocultar tooltip al salir el mouse
            >
                {showTooltip && (
                    <div
                        style={{
                            position: 'absolute',
                            backgroundColor: 'rgba(0, 0, 0, 0.75)',
                            color: 'white',
                            padding: '5px',
                            borderRadius: '4px',
                            marginLeft: '18px'
                        }}
                    >
                        {tooltipContent}
                    </div>
                )}
            </div>
        );
    };



    return (
        <div style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', minHeight: '100vh' }}>
            <nav className="bg-red">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-10 w-auto" src={Wine} alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                    <a onClick={handleHome} class="rounded-md  px-3 py-2 text-sm font-medium text-red-900" aria-current="page" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>INICIO</a>
                                    <a onClick={handleVisitas} class="rounded-md px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>VISITAS</a>
                                    <a onClick={handleSunsets} class="rounded-md px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>SUNSETS</a>
                                    <a onClick={handleCalendario} class="rounded-md bg-red-900 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>CALENDARIO</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <form role="search" onSubmit={(e) => e.preventDefault()}>
                                <button
                                    className="btn btn-dark position-absolute top-0 end-0 mt-3 p-0.5" // Reduce el padding aquí
                                    style={{
                                        width: '120px',
                                        fontFamily: 'Merriweather, serif',
                                        fontSize: '0.8rem',
                                        padding: '4px 8px'
                                    }}
                                    onClick={handleLogout}
                                >
                                    Cerrar Sesión
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div style={{
                    padding: "40px",
                    width: "100vw",
                    height: "90vh",
                    maxWidth: "1200px",
                }}>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        tooltipAccessor={null}
                        views={['month']}
                        defaultView='month'
                        formats={{
                            weekdayFormat: (date, culture, localizer) => {
                                const day = localizer.format(date, 'dddd', culture);
                                return day.charAt(0).toUpperCase() + day.slice(1, 3);
                            }
                        }}
                        dayPropGetter={dayPropGetter}
                        components={{
                            toolbar: CustomToolbar,
                            event: CustomEvent,
                        }}
                    />
                </div>
            </div>

            <footer className="bg-black text-white py-4">
                <div className="container mx-auto text-center" style={{ fontFamily: 'Lora, serif' }}>
                    <p className="text-sm">
                        2024 - Copyright WINE SENSE | Powered by Lucas Melnicov & Franco Diaz
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Calendario;