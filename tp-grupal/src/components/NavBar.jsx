import './NavBar.css'
import imagenCombi from "./imagenes/combiaventuras.png"
import { useState } from 'react';

//IMPORTAR ICONOS
import { IoIosMenu } from "react-icons/io";



export default function NavBar() {
     const [activado, setActivado] = useState('navMenu');

     const mostrarNav = () => {
          setActivado('navMenu mostrarNavBar');
     }
     const ocultarNav = () => {
          setActivado('navMenu');
     }

     return (
          <nav className="navBar">
               <div className="logoNav">
                    <img src={imagenCombi} className="logo" />
               </div>

               <div className={activado}>
                    <ul className="menuList">
                         <li onClick={ocultarNav} className='menuItem'><a href="#">Inicio</a></li>
                         <li onClick={ocultarNav} className='menuItem'><a href="#">Sobre nosotros</a></li>
                         <li onClick={ocultarNav} className='menuItem'><a href="#">Combis</a></li>
                    </ul>
               </div>

               <div className='contenedorBoton'>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                         Contacto
                    </button>
                    <IoIosMenu onClick={mostrarNav} className='menuHamburguesa'/>
               </div>
          </nav>

     )
}


