import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

// Imágenes
import Imagen from "../assets/fondo1.png";
import ImageProfile from "../assets/sesion.png";
import Fondo from "../assets/fondo.png";

import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
const auth = getAuth(appFirebase);

const Login = () => {
    const [registrando, setRegistrando] = useState(false);
    const [additionalData, setAdditionalData] = useState({
        nombre: '',
        apellido: '',
        telefono: ''
    });

    const navigate = useNavigate(); // Crea la instancia de navigate

    const functAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contrasena = e.target.password.value;
        const { nombre, apellido, telefono } = additionalData;

        // Verificar campos vacíos
        if (!correo || !contrasena || (registrando && (!nombre || !apellido || !telefono))) {
            alert("Uno de los campos está vacío. Por favor, llene todos los campos.");
            return;
        }

        try {
            // Configura la persistencia para que use session
            await setPersistence(auth, browserSessionPersistence);
            
            if (registrando) {
                await createUserWithEmailAndPassword(auth, correo, contrasena);
                console.log("Datos adicionales: ", nombre, apellido, telefono);
                navigate('/home'); // Redirige al usuario a la página Home después de registrarse
            } else {
                await signInWithEmailAndPassword(auth, correo, contrasena);
                navigate('/home'); // Redirige al usuario a la página Home después de iniciar sesión
            }
        } catch (error) {
            if (registrando) {
                alert("Asegúrese de que la contraseña tenga más de 8 caracteres");
            } else {
                alert("El correo o la contraseña son incorrectos");
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdditionalData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', minHeight: '100vh' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="padre">
                            <div className="card card-body shadow-lg">
                                <img src={ImageProfile} alt="" className="estilo-profile" />
                                <form onSubmit={functAutenticacion}>
                                    <input type="text" placeholder="Ingresar Email" className="cajatexto" name="email" id="email" />
                                    <input type="password" placeholder="Ingresar Contraseña" className="cajatexto" name="password" id="password" />
                                    {registrando && (
                                        <>
                                            <input type="text" placeholder="Ingresar Nombre" className="cajatexto" name="nombre" value={additionalData.nombre} onChange={handleInputChange} />
                                            <input type="text" placeholder="Ingresar Apellido" className="cajatexto" name="apellido" value={additionalData.apellido} onChange={handleInputChange} />
                                            <input type="text" placeholder="Ingresar Teléfono" className="cajatexto" name="telefono" value={additionalData.telefono} onChange={handleInputChange} />
                                        </>
                                    )}
                                    <button className="botoninicio btnform">{registrando ? "Regístrate" : "Inicia Sesión"}</button>
                                </form>
                                <h4 className="texto">
                                    {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
                                    <button className="botonregis btnswitch" onClick={() => setRegistrando(!registrando)}>
                                        {registrando ? "Inicia Sesión" : "Regístrate"}
                                    </button>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <img src={Imagen} alt="" className="tamano-imagen" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
