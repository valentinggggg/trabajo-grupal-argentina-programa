import './NavBar.css'
import imagenCombi from "./imagenes/combiaventuras.png"

//IMPORTAR ICONOS
import { IoIosMenu } from "react-icons/io";



export default function NavBar() {
     return (
          <nav className="navBar">
               <div className="logoNav">
                    <img src={imagenCombi} className="logo" />
               </div>

               <div className="menu">
                    <ul className="menuList">
                         <li className='menuItem'><a href="#">Inicio</a></li>
                         <li className='menuItem'><a href="#">Sobre nosotros</a></li>
                         <li className='menuItem'><a href="#">Combis</a></li>
                    </ul>
               </div>

               <div className='contenedorBoton'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                         Consulta
                    </button>

                    <IoIosMenu className='menuHamburguesa'/>
               </div>
               
          </nav>
     )
}


