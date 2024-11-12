import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imágenes
import Wine from "../assets/logo1.png";
import FondoSunset from "../assets/fondosun.png";
import Fiesta from "../assets/fiesta..jpg";
import Fiesta2 from "../assets/fiesta2.jpg";
import Fiesta3 from "../assets/fiesta3.jpg";
import Sunset1 from "../assets/sun.jpg";
import Adam from "../assets/adam.jpg";
import Keine from "../assets/keine.webp";
import Cattaneo from "../assets/cattaneo.jpg";
import Amelie from "../assets/amelie.jpg";
import Aka from "../assets/aka.jpg";
import Virginia from "../assets/virginia.jpg";
import Colyn from "../assets/colyn.jpg";
import Sven from "../assets/sven.jpeg";
import Fondodj from "../assets/fondodj.png";
import Fondocronograma from "../assets/fondocronograma.png";
import Fondoelegir from "../assets/fondoelegir.png";

const Sunsets = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Estado para el carrusel
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [Sunset1, Fiesta, Fiesta2, Fiesta3]; // Arreglo con las imágenes

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

    // Función para crear un carrusel de tarjetas
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Mostrar 3 tarjetas a la vez
        slidesToScroll: 1, // Deslizar 1 tarjeta a la vez
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div  >
            <div style={{ backgroundImage: `url(${FondoSunset})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
                <nav className="">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img className="h-10 w-auto" src={Wine} alt="Your Company" />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div class="flex space-x-4">
                                        <a onClick={handleHome} class="rounded-md  px-3 py-2 text-sm font-medium text-red-900" aria-current="page" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>INICIO</a>
                                        <a onClick={handleVisitas} class="rounded-md px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>VISITAS</a>
                                        <a onClick={handleSunsets} class="rounded-md bg-red-900 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>SUNSETS</a>
                                        <a onClick={handleCalendario} class="rounded-md px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>CALENDARIO</a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <form role="search" onSubmit={(e) => e.preventDefault()}>
                                    <button
                                        className="btn btn-dark position-absolute top-0 end-0 mt-3 p-0.5"
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
                <div className="flex flex-col items-center justify-center mt-20">
                    <h1 className="text-9xl font-bold text-pink-900 mt-20" style={{ fontFamily: 'Lora, serif' }}>
                        SUNSETS
                    </h1>
                    <p className="text-4xl mt-4 text-pink-900 hover:text-black" style={{ fontFamily: 'Lora, serif' }}>
                        Atardeceres de Música y Vino
                    </p>
                </div>
            </div>

            <div className="h-1 opacity-30 hover:opacity:10" style={{ backgroundColor: '#831843' }}></div>

            <div style={{ backgroundImage: `url(${Fondodj})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '40px 0', backgroundAttachment: 'fixed' }}>
                <div className="flex flex-col items-center justify-center my-24">
                    <h2 className="text-5xl font-bold text-pink-900 hover:text-black" style={{ fontFamily: 'Lora, serif' }}>
                        DJS DESTACADOS
                    </h2>
                    {/* Contenedor del carrusel */}
                    <div className="container mx-auto mt-16">
                        <Slider {...settings}>
                            {/* Tarjeta DJ 1 */}
                            <div className="flex flex-col items-center text-center">
                                <img className="rounded-lg w-64 h-64 object-cover mx-auto" src={Adam} alt="Sonia Ortega" />
                                <h3 className="text-xl font-bold mt-4" style={{ fontFamily: 'Lora, serif' }}>Adam Port</h3>
                                <p className="text-md mt-2 max-w-xs mx-auto mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                    Adam Port es un DJ y productor alemán de música electrónica, conocido por su estilo en techno y house. Es parte del sello Keinemusik y ha actuado en festivales y clubes internacionales.
                                </p>
                            </div>

                            {/* Tarjeta DJ 2 */}
                            <div className="flex flex-col items-center text-center">
                                <img className="rounded-lg w-64 h-64 object-cover mx-auto" src={Keine} alt="Ana Ramos" />
                                <h3 className="text-xl font-bold mt-4" style={{ fontFamily: 'Lora, serif' }}>Keinemusik</h3>
                                <p className="text-md mt-2 max-w-xs mx-auto mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                    Keinemusik es un sello discográfico de Berlín, fundado en 2009 por Adam Port, &ME, Rampa y Anja Schneider. Se especializa en techno y house, y es conocido por su alta calidad de producción y su estilo distintivo.
                                </p>
                            </div>

                            {/* Tarjeta DJ 3 */}
                            <div className="flex flex-col items-center text-center">
                                <img className="rounded-lg w-64 h-64 object-cover mx-auto" src={Cattaneo} alt="Daniel Jimenez" />
                                <h3 className="text-xl font-bold mt-4" style={{ fontFamily: 'Lora, serif' }}>Hernan Cattaneo</h3>
                                <p className="text-md mt-2 max-w-xs mx-auto mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                    DJ y productor argentino, reconocido por su música electrónica, especialmente en house progresivo y techno.
                                </p>
                            </div>

                            {/* Tarjeta DJ 4 */}
                            <div className="flex flex-col items-center text-center">
                                <img className="rounded-lg w-64 h-64 object-cover mx-auto" src={Amelie} alt="Laura Gomez" />
                                <h3 className="text-xl font-bold mt-4" style={{ fontFamily: 'Lora, serif' }}>Amelie Lens</h3>
                                <p className="text-md mt-2 max-w-xs mx-auto mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                    DJ y productora belga, famosa por su estilo en techno y su energía en el escenario
                                </p>
                            </div>
                            {/* Tarjeta DJ 5 */}
                            <div className="flex flex-col items-center text-center">
                                <img className="rounded-lg w-64 h-64 object-cover mx-auto " src={Aka} alt="" />
                                <h3 className="text-xl font-bold mt-4" style={{ fontFamily: 'Lora, serif' }}>Aka Delicia</h3>
                                <p className="text-md mt-2 max-w-xs mx-auto mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                    Conocida por su estilo fresco y enérgico, se ha convertido en una de las DJ más destacadas de la escena del cachengue en Mendoza
                                </p>
                            </div>
                            {/* Tarjeta DJ 6 */}
                            <div className="flex flex-col items-center text-center">
                                <img className="rounded-lg w-64 h-64 object-cover mx-auto" src={Virginia} alt="Laura Gomez" />
                                <h3 className="text-xl font-bold mt-4" style={{ fontFamily: 'Lora, serif' }}> Virginia da Cunha </h3>
                                <p className="text-md mt-2 max-w-xs mx-auto mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                    DJ y productora argentina que ha destacado en la escena electrónica. Su estilo se caracteriza por fusionar géneros como deep house, tech house, y melodic techno.
                                </p>
                            </div>
                            {/* Tarjeta DJ 7*/}
                            <div className="flex flex-col items-center text-center">
                                <img className="rounded-lg w-64 h-64 object-cover mx-auto" src={Colyn} alt="Laura Gomez" />
                                <h3 className="text-xl font-bold mt-4" style={{ fontFamily: 'Lora, serif' }}> Colyn </h3>
                                <p className="text-md mt-2 max-w-xs mx-auto mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                    DJ y productor neerlandés especializado en techno melódico. Se ha destacado por sus emotivos sets y producciones llenas de profundidad armónica y sonidos atmosféricos.
                                </p>
                            </div>
                            {/* Tarjeta DJ 8*/}
                            <div className="flex flex-col items-center text-center">
                                <img className="rounded-lg w-64 h-64 object-cover mx-auto" src={Sven} alt="Laura Gomez" />
                                <h3 className="text-xl font-bold mt-4" style={{ fontFamily: 'Lora, serif' }}> Sven Vath </h3>
                                <p className="text-md mt-2 max-w-xs mx-auto mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                Legendario DJ y productor alemán, pionero del techno y la música electrónica. Con una carrera que supera las tres décadas, es conocido por sus sets energéticos y su influencia en la escena global de la música.
                                </p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="h-1 opacity-30" style={{ backgroundColor: '#831843' }}></div>

            <div style={{ backgroundImage: `url(${Fondocronograma})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '40px 0' }}>
                <div className="py-10 px-4 md:px-10 text-center my-24">
                    <h2 className="text-5xl font-bold text-pink-900 mb-16 hover:text-black " style={{ fontFamily: 'Lora, serif' }}>
                        HORARIOS REFERENCIALES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 hover:text-black">
                        <div className='mt-5'>
                            <p className="text-4xl font-bold text-pink-900  mb-4" style={{ fontFamily: 'Lora, serif' }}>Viamonte Winery</p>
                            <ul className="space-y-2 text-pink-900 hover:text-black ">
                                <li className="text-md">18:30 <br /> <strong>Ingreso y bienvenida</strong> <div className="h-px w-2/3 bg-pink-900 my-2 mx-auto opacity-50"></div> </li>
                                <li className="text-md">20:00 <br /> <strong>Cena</strong> <div className="h-px w-2/3 bg-pink-900 my-2 mx-auto opacity-50"></div> </li>
                                <li className="text-md">22:00 <br /> <strong>Adam Port - Techno</strong> <div className="h-px w-2/3 bg-pink-900 my-2 mx-auto opacity-50"></div> </li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <p className="text-4xl font-bold text-pink-900 mb-4" style={{ fontFamily: 'Lora, serif' }}>Andeluna</p>
                            <ul className="space-y-2 text-pink-900 hover:text-black">
                                <li className="text-md">17:30 <br /> <strong>Ingreso y bienvenida</strong> <div className="h-px w-2/3 bg-pink-900 my-2 mx-auto opacity-50"></div> </li>
                                <li className="text-md">18:30 <br /> <strong>Cena</strong> <div className="h-px w-2/3 bg-pink-900 my-2 mx-auto opacity-50"></div> </li>
                                <li className="text-md">21:00 <br /> <strong>Aka Delicia - Cachengue</strong> <div className="h-px w-2/3 bg-pink-900 my-2 mx-auto opacity-50"></div> </li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <p className="text-4xl font-bold text-pink-900 mb-4" style={{ fontFamily: 'Lora, serif' }}>Bodega A16</p>
                            <ul className="space-y-2 text-pink-900 hover:text-black ">
                                <li className="text-md">16:00 <br /> <strong>Ingreso y bienvenida</strong> <div className="h-px w-2/3 bg-pink-900 my-2 mx-auto opacity-50"></div> </li>
                                <li className="text-md">19:00 <br /> <strong>Cena</strong> <div className="h-px w-2/3 bg-pink-900 my-2 mx-auto opacity-50"></div> </li>
                                <li className="text-md">20:00 <br /> <strong>Hernan Cattaneo - Techno</strong> <div className="h-px w-2/3 bg-pink-900 my-2 mx-auto opacity-50"></div> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-1 opacity-30" style={{ backgroundColor: '#831843' }}></div>

            <div style={{ backgroundImage: `url(${Fondoelegir})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '40px 0', backgroundAttachment: 'fixed' }}>
                <div class="flex items-center justify-center p-8 my-24">
                    <div class="w-1/2 p-4">
                        <div className="overflow-hidden relative rounded-lg">
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

                    <div class="w-1/2 p-4 flex flex-col items-start">
                        <h2 class="text-5xl font-bold text-pink-900 mb-4" style={{ fontFamily: 'Lora, serif' }}>BUSCA UN DÍA <br />Y ELIGE <br /> TU MEJOR OPCIÓN</h2>
                        <button onClick={handleCalendario} class="border-2 border-pink-900 text-pink-900 px-4 py-2 rounded-full hover:bg-pink-900 hover:text-white transition duration-300" style={{ fontFamily: 'Lora, serif' }}>
                            Ver calendario
                        </button>
                    </div>
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
}

export default Sunsets;
