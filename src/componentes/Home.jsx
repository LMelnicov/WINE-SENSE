import React from "react";
import { useNavigate } from "react-router-dom";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

//imagenes
import Wine from "../assets/logo1.png";
import Fondo from "../assets/fondovino.png";
import Trapiche from "../assets/trapiche.jpg";
import Salentein from "../assets/salentein.jpg";
import Kaiken from "../assets/kaiken2.jpg";
import Vistalba from "../assets/vistalba.jpg";



const Home = ({ correoUsuario }) => {

    const navigate = useNavigate();

    //handles para manejar las rutas
    const handleTrapiche = () => {
        navigate('/trapiche');
    };
    const handleSalentein = () => {
        navigate('/salentein');
    };
    const handleKaiken = () => {
        navigate('/kaiken');
    };
    const handleVistalba = () => {
        navigate('/vistalba');
    };
    const handleVisitas = () => {
        navigate('/visitas');
    };
    const handleSunsets = () => {
        navigate('/sunsets');
    };
    const handleHome = () => {
        navigate('/home');
    };
    const handleCalendario = () => {
        navigate('/calendario');
    };

    // Cerrar sesión
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
            <nav class="bg-white-900 ">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex flex-shrink-0 items-center">
                                <img class="h-10 w-auto" src={Wine} alt="Your Company" />
                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">
                                    <a onClick={handleHome} class="rounded-md bg-red-900 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 hover:text-white" aria-current="page" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>INICIO</a>
                                    <a onClick={handleVisitas} class="rounded-md px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>VISITAS</a>
                                    <a onClick={handleSunsets} class="rounded-md px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>SUNSETS</a>
                                    <a onClick={handleCalendario} class="rounded-md px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-700 hover:text-white" style={{ fontFamily: 'Merriweather, serif', cursor: 'pointer' }}>CALENDARIO</a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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

            <div className="titulo">
                <div className="container text-center p-3">
                    <div className="p-5">
                        <h1 style={{ fontFamily: 'Merriweather, serif' }} className="display-4">Bienvenido a WINE-SENSE</h1>
                        <p style={{ fontFamily: 'Merriweather, serif' }} className="lead">A continuación podrás comenzar a conocer las principales bodegas de la provincia</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
                    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-10">
                        <a onClick={handleTrapiche} class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" style={{cursor: 'pointer'}}>
                                <img src={Trapiche} alt="Trapiche" class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-3 text-sm text-white p-1 bg-red-800" style={{ fontFamily: 'Merriweather, serif' }}> Nueva Mayorga, Maipú</h3>
                            <p class="mt-1 text-lg font-medium text-white p-1 bg-red-900" style={{ fontFamily: 'Merriweather, serif' }}>TRAPICHE</p>
                        </a>
                        <a onClick={handleSalentein} class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" style={{cursor: 'pointer'}}>
                                <img src={Salentein} alt="Salentein" class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-3 text-sm text-white p-1 bg-red-800" style={{ fontFamily: 'Merriweather, serif' }}>Ruta 89 - Los Arboles, Tunuyan</h3>
                            <p class="mt-1 text-lg font-medium text-white p-1 bg-red-900" style={{ fontFamily: 'Merriweather, serif' }}>SALENTEIN</p>
                        </a>
                        <a onClick={handleKaiken} class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" style={{cursor: 'pointer'}}>
                                <img src={Kaiken} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-3 text-sm text-white p-1 bg-red-800" style={{ fontFamily: 'Merriweather, serif' }}>Roque Sáenz Peña 5516</h3>
                            <p class="mt-1 text-lg font-medium text-white p-1 bg-red-900" style={{ fontFamily: 'Merriweather, serif' }}>KAIKEN</p>
                        </a>
                        <a onClick={handleVistalba} class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" style={{cursor: 'pointer'}}>
                                <img src={Vistalba} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-3 text-sm text-white p-1 bg-red-800" style={{ fontFamily: 'Merriweather, serif' }}>Roque Sáenz Peña 3531, Vistalba</h3>
                            <p class="mt-1 text-lg font-medium text-white p-1 bg-red-900" style={{ fontFamily: 'Merriweather, serif' }}>VISTALBA</p>
                        </a>
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
        </div >
    );
}

export default Home;
