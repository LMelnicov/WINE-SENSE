import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

// Imágenes
import Wine from "../assets/logo1.png";
import Fondo from "../assets/fondovino.png";
import Sal1 from "../assets/Sal1.webp";
import Sal2 from "../assets/Sfondo.jpg";
import Sal3 from "../assets/salentein3.jpg";
import Sal4 from "../assets/salentein4.jpg";

const Salentein = () => {

    const navigate = useNavigate();


    // Estado para el carrusel
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [Sal1, Sal2, Sal3, Sal4]; // Arreglo con las imágenes

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
                        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Lora, serif' }}>SALENTEIN</h2>
                        <p style={{ fontFamily: 'Lora, serif' }} className='mt-3'>Ubicada en la región de Valle de Uco, Mendoza, Salentein es una bodega destacada en la viticultura argentina, reconocida por su enfoque innovador y su compromiso con la calidad. Fundada en 1992, Salentein se ha consolidado como un referente en la producción de vinos de alta gama, fusionando tradición y modernidad para ofrecer productos excepcionales. <br /><br />
                            La bodega se distingue por su ubicación en una de las regiones vitivinícolas más privilegiadas de Argentina, a más de 1.200 metros sobre el nivel del mar. Salentein cultiva una variedad de uvas, incluyendo Malbec, Cabernet Sauvignon y Pinot Noir, empleando prácticas sostenibles y técnicas de vinificación avanzadas. Este enfoque permite que sus vinos capturen la esencia del terroir único de Mendoza, resultando en productos que son apreciados tanto a nivel nacional como internacional.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Lora, serif' }}>Vinos Destacados</h3>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>El Tomillo</p>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Numina</p>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Killka</p>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Portillo</p>
                    </div>
                </div>
                <div className="row mt-5 justify-center">
                    <div className="col-md-3 text-center">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Alyda</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Gran Valle de Uco</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Primus</p>
                    </div>
                </div>

            </div>
            <footer className="bg-black text-white py-4 mt-5">
                <div className="container mx-auto text-center" style={{ fontFamily: 'Lora, serif' }}>
                    <p className="text-sm">
                        Si quieres conocer más puedes visitar su página online
                    </p>
                    <p className="text-sm">
                        <a href="https://www.bodegasalentein.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Ir a Salentein</a> | <a >Términos y Condiciones</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Salentein;