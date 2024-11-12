import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Imágenes
import Wine from "../assets/logo1.png";
import Fondo from "../assets/fondovino.png";
import Kai1 from "../assets/kai1.webp";
import Kai2 from "../assets/kfondo.jpg";
import Kai3 from "../assets/kaiken3.jpg";
import Kai4 from "../assets/kaiken4.jpeg";

const Kaiken = () => {

    const navigate = useNavigate();


    // Estado para el carrusel
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [Kai1, Kai2, Kai3, Kai4]; // Arreglo con las imágenes

    // Función para cambiar la imagen en el carrusel
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Handle para manejar la ruta de regreso al home
    const handleHome = () => {
        navigate('/home'); // Navega de vuelta a '/home'
    };

    return (
        <div style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', minHeight: '100vh' }}>
            <nav>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-10 w-auto" src={Wine} alt="Your Company" />
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                onClick={handleHome} // Maneja el clic del botón
                                className="btn btn-dark position-absolute top-0 end-0 mt-3 p-1"
                                style={{
                                    width: '120px',
                                    fontFamily: 'Merriweather, serif',
                                    fontSize: '0.8rem',
                                    padding: '4px 8px'
                                }}
                            >
                                ATRÁS
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 relative">
                        <div className="overflow-hidden relative">
                            <img src={images[currentIndex]} alt="Imagen del Carrusel" className="img-fluid w-full" />
                            {/* Controles para el carrusel */}
                            <button
                                onClick={goToPrevSlide}
                                className="absolute top-1/2 left-2 bg-black text-white p-2 transform -translate-y-1/2"
                            >
                                {"<"}
                            </button>
                            <button
                                onClick={goToNextSlide}
                                className="absolute top-1/2 right-2 bg-black text-white p-2 transform -translate-y-1/2"
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center" style={{ position: 'relative', padding: '20px', borderRadius: '5px', color: 'black' }}>
                        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Lora, serif' }}>KAIKEN</h2>
                        <p style={{ fontFamily: 'Lora, serif' }} className='mt-3'>Ubicada en el corazón de Mendoza, Kaiken es una bodega que combina lo mejor de la tradición vitivinícola argentina y chilena. Fundada en 2002 por Aurelio Montes, uno de los enólogos más respetados de Chile, Kaiken refleja un enfoque que une la innovación con un profundo respeto por la naturaleza y el terroir.<br /><br />
                            Con viñedos ubicados en las regiones de Luján de Cuyo y el Valle de Uco, a altitudes de entre 950 y 1.400 metros sobre el nivel del mar, Kaiken se beneficia de las excepcionales condiciones climáticas de Mendoza. Cultivan principalmente Malbec, Cabernet Sauvignon y Bonarda, preservando la biodiversidad y garantizando la calidad de sus uvas. Combina técnicas modernas con tradiciones enológicas, permitiendo a Kaiken producir vinos premiados a nivel internacional, que expresan de manera fiel la esencia de los Andes y del terroir mendocino.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Lora, serif' }}>Vinos Destacados</h3>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Mai</p>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Desbandado</p>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Estate</p>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Obertura</p>
                    </div>
                    <div className="col-md-3 mt-5">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Aventura</p>
                    </div>
                    <div className="col-md-3 mt-5">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Extra Brut</p>
                    </div>
                    <div className="col-md-3 mt-5">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Nude</p>
                    </div>
                    <div className="col-md-3 mt-5">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Ultra</p>
                    </div>
                </div>
            </div>
            <footer className="bg-black text-white py-4 mt-5">
                <div className="container mx-auto text-center" style={{ fontFamily: 'Lora, serif' }}>
                    <p className="text-sm">
                        Si quieres conocer más puedes visitar su página online
                    </p>
                    <p className="text-sm">
                        <a href="https://www.kaikenwines.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Ir a Kaiken</a> | <a >Términos y Condiciones</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Kaiken;