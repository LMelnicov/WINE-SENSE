import React, { useState } from 'react'; 
import { useNavigate } from "react-router-dom";

// Imágenes
import Wine from "../assets/logo1.png";
import Fondo from "../assets/fondovino.png";
import Trap1 from "../assets/trapiche1.jpg";
import Trap2 from "../assets/trapiche2.jpg";
import Trap3 from "../assets/trapiche3.jpeg";
import Trap4 from "../assets/trapiche4.jpg";

const Trapiche = () => {
    const navigate = useNavigate();

    // Estado para el carrusel
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [Trap1, Trap2, Trap3, Trap4]; // Arreglo con las imágenes

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
                                onClick={handleHome}
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
                        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Lora, serif' }}>TRAPICHE</h2>
                        <p style={{ fontFamily: 'Lora, serif' }} className='mt-3'>Ubicada en la región de Maipú, Mendoza, Trapiche es una de las bodegas más emblemáticas de Argentina. Fundada en 1883, Trapiche ha sido un pilar en la industria vitivinícola del país, conocida por su tradición y su compromiso con la excelencia en la producción de vinos. Desde sus inicios, la bodega ha combinado técnicas de vinificación tradicionales con innovaciones modernas, lo que le ha permitido destacarse en el competitivo mercado del vino. <br /><br />
                            Esta bodega se ha ganado una reputación internacional por la calidad de sus vinos, especialmente sus Malbec, Cabernet Sauvignon y Chardonnay. Utiliza una combinación de métodos tradicionales y tecnología avanzada para cultivar sus viñedos y elaborar vinos que reflejan el carácter único de la región de Mendoza. Sus vinos han recibido numerosos premios y reconocimientos en competencias globales, consolidando su posición como un referente en la viticultura argentina.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Lora, serif' }}>Vinos Destacados</h3>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Iscay</p>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Terroir Series</p>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Medalla</p>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-wine-glass" style={{ color: '#4d131c', fontSize: '32px' }}></i>
                        <p style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem' }}>Costa & Pampa</p>
                    </div>
                </div>
            </div>
            <footer className="bg-black text-white py-4 mt-5">
                <div className="container mx-auto text-center" style={{ fontFamily: 'Lora, serif' }}>
                    <p className="text-sm">
                        Si quieres conocer más puedes visitar su página online
                    </p>
                    <p className="text-sm">
                        <a href="https://www.trapiche.com.ar" className="hover:underline" target="_blank" rel="noopener noreferrer">Ir a Trapiche</a> | <a >Términos y Condiciones</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Trapiche;
