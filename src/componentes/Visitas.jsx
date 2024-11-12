import React, { useState } from 'react'; 
import { useNavigate, useLocation } from "react-router-dom";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

// Imágenes
import Wine from "../assets/logo1.png";
import Fondo from "../assets/fondovino.png";
import Vinedo from "../assets/viñedo.jpg";
import Visita1 from "../assets/visita1.jpeg";
import Visita2 from "../assets/visita2.jpeg";
import Visita3 from "../assets/visita3.jpg";
import Bressia from "../assets/visita/bressia.webp";
import Catena from "../assets/visita/catena.webp";
import Norton from "../assets/visita/norton.png";
import Zuccardi from "../assets/visita/zuccardi.png";
import Ruca from "../assets/visita/ruca.webp";
import Domaine from "../assets/visita/domaine.png";


const Visitas = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Estado para el carrusel
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [Vinedo, Visita1, Visita2, Visita3]; // Arreglo con las imágenes

    // Función para cambiar la imagen en el carrusel
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };


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


    return (
        <div style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', minHeight: '100vh' }}>
            <nav className="">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-10 w-auto" src={Wine} alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                    <a onClick={handleHome} class="rounded-md  px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-700 hover:text-white "  style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>INICIO</a>
                                    <a onClick={handleVisitas} class="rounded-md bg-red-900 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>VISITAS</a>
                                    <a onClick={handleSunsets} class="rounded-md px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>SUNSETS</a>
                                    <a onClick={handleCalendario} class="rounded-md px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>CALENDARIO</a>
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
                        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Lora, serif' }}>DESCUBRE NUESTRAS BODEGAS</h2>
                        <p style={{ fontFamily: 'Lora, serif' }} className='mt-3'>Embárcate en una experiencia única y fascinante al visitar una de nuestras bodegas, donde cada rincón cuenta una historia. Durante cada visita guiada, te invitamos a explorar el corazón de la producción vinícola, desde el viñedo hasta la botella. Conoce el arte y la ciencia detrás de la viticultura y vinificación mientras recorres las instalaciones. Observa de cerca el proceso de elaboración del vino, desde la cosecha de las uvas hasta el proceso de fermentación y envejecimiento en barricas. <br /><br />
                        Los expertos guías compartirán contigo los secretos de cada varietal, proporcionando una visión profunda sobre los métodos de producción y las técnicas que realzan el carácter único de nuestros vinos. La visita culmina con una cata selecta, donde podrás degustar una variedad de vinos, apreciar sus matices y aprender a identificar sus notas distintivas.</p>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-2xl mt-5" style={{ fontFamily: 'Merriweather, serif' }}>BODEGAS DESTACADAS PARA REALIZAR UNA VISITA</h1>
            <div class="mx-auto max-w-6xl px-8 py-16 sm:px-12 sm:py-24 lg:max-w-5xl lg:px-10">
                <ul role="list" class="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 text-white">

                    <li class="flex flex-col items-center bg-black/90 p-6 rounded-lg shadow-lg">
                        <img class="h-32 w-32 rounded-full object-cover mb-4" src={Bressia} alt="Zuccardi" />
                        <h2 class="text-lg font-semibold">BRESSIA</h2>
                        <p class="text-xs text-gray-400">Cochabamba, Luján de Cuyo</p>
                        <div class="flex space-x-4 mt-2">
                            <a
                                href="tel: 0261154531182"
                                class="flex items-center text-white text-sm font-bold rounded-md px-2 py-1 hover:bg-red-700"
                            >
                                <i className="fas fa-phone-alt"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/bressiawines/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center text-white font-bold rounded-md px-2 py-1 hover:bg-pink-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <a
                            href="http://www.bressiabodega.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-2 px-4 py-2 bg-red-900 text-white text-xs font-bold rounded-md hover:bg-red-700"
                        >
                            ¿Quieres conocer más?
                        </a>
                    </li>

                    <li class="flex flex-col items-center bg-black/90 p-6 rounded-lg shadow-lg">
                        <img class="h-32 w-32 rounded-full object-cover mb-4" src={Catena} alt="Zuccardi" />
                        <h2 class="text-lg font-semibold">CATENA ZAPATA</h2>
                        <p class="text-xs text-gray-400">Cobos S/N, M5509 Luján de Cuyo</p>
                        <div class="flex space-x-4 mt-2">
                            <a
                                href="tel: 02614131124"
                                class="flex items-center text-white text-sm font-bold rounded-md px-2 py-1 hover:bg-red-700"
                            >
                                <i className="fas fa-phone-alt"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/catenawines/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center text-white font-bold rounded-md px-2 py-1 hover:bg-pink-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <a
                            href="https://catenazapata.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-2 px-4 py-2 bg-red-900 text-white text-xs font-bold rounded-md hover:bg-red-700"
                        >
                            ¿Quieres conocer más?
                        </a>
                    </li>

                    <li class="flex flex-col items-center bg-black/90 p-6 rounded-lg shadow-lg">
                        <img class="h-32 w-32 rounded-full object-cover mb-4" src={Norton} alt="Zuccardi" />
                        <h2 class="text-lg font-semibold">NORTON</h2>
                        <p class="text-xs text-gray-400">Ruta Nacional Nro. 15, Luján de Cuyo</p>
                        <div class="flex space-x-4 mt-2">
                            <a
                                href="tel:+542614909700"
                                class="flex items-center text-white text-sm font-bold rounded-md px-2 py-1 hover:bg-red-700"
                            >
                                <i className="fas fa-phone-alt"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/bodeganorton/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center text-white font-bold rounded-md px-2 py-1 hover:bg-pink-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <a
                            href="https://www.norton.com.ar/'"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-2 px-4 py-2 bg-red-900 text-white text-xs font-bold rounded-md hover:bg-red-700"
                        >
                            ¿Quieres conocer más?
                        </a>
                    </li>

                    <li class="flex flex-col items-center bg-black/90 p-6 rounded-lg shadow-lg">
                        <img class="h-32 w-32 rounded-full object-cover mb-4" src={Zuccardi} alt="Zuccardi" />
                        <h2 class="text-lg font-semibold">ZUCCARDI</h2>
                        <p class="text-xs text-gray-400">Paraje Altamira, San Carlos</p>
                        <div class="flex space-x-4 mt-2">
                            <a
                                href="tel:+542614410090"
                                class="flex items-center text-white text-sm font-bold rounded-md px-2 py-1 hover:bg-red-700"
                            >
                                <i className="fas fa-phone-alt"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/zuccardivalledeuco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center text-white font-bold rounded-md px-2 py-1 hover:bg-pink-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <a
                            href="https://zuccardiwines.com/es/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-2 px-4 py-2 bg-red-900 text-white text-xs font-bold rounded-md hover:bg-red-700"
                        >
                            ¿Quieres conocer más?
                        </a>
                    </li>

                    <li class="flex flex-col items-center bg-black/90 p-6 rounded-lg shadow-lg">
                        <img class="h-32 w-32 rounded-full object-cover mb-4" src={Ruca} alt="Zuccardi" />
                        <h2 class="text-lg font-semibold">RUCA MALEN</h2>
                        <p class="text-xs text-gray-400">RN7 Km. 1059, M5509 Luján de Cuyo</p>
                        <div class="flex space-x-4 mt-2">
                            <a
                                href="tel: 0261154541236"
                                class="flex items-center text-white text-sm font-bold rounded-md px-2 py-1 hover:bg-red-700"
                            >
                                <i className="fas fa-phone-alt"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/bodegarucamalen/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center text-white font-bold rounded-md px-2 py-1 hover:bg-pink-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <a
                            href="https://www.bodegarucamalen.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-2 px-4 py-2 bg-red-900 text-white text-xs font-bold rounded-md hover:bg-red-700"
                        >
                            ¿Quieres conocer más?
                        </a>
                    </li>

                    <li class="flex flex-col items-center bg-black/90 p-6 rounded-lg shadow-lg">
                        <img class="h-32 w-32 rounded-full object-cover mb-4" src={Domaine} alt="Zuccardi" />
                        <h2 class="text-lg font-semibold">DOMAINE BOUSQUET</h2>
                        <p class="text-xs text-gray-400">RP89 km 7, M5561 Tupungato</p>
                        <div class="flex space-x-4 mt-2">
                            <a
                                href="tel:+542614410090"
                                class="flex items-center text-white text-sm font-bold rounded-md px-2 py-1 hover:bg-red-700"
                            >
                                <i className="fas fa-phone-alt"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/domainebousquetarg/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center text-white font-bold rounded-md px-2 py-1 hover:bg-pink-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <a
                            href="https://domainebousquet.com/bodega/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-2 px-4 py-2 bg-red-900 text-white text-xs font-bold rounded-md hover:bg-red-700"
                        >
                            ¿Quieres conocer más?
                        </a>
                    </li>

                </ul>
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

export default Visitas;
