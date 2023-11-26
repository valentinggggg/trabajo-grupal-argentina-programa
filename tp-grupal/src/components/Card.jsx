import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export default function Card(props) {    
     useEffect(() => {
          Aos.init(3000)
     })
     return (
          <div className="contenedorCard">
               <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up">
                    <figure className="px-10 pt-10">
                         <img src={props.imagen} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                         <h2 className="card-title">{props.nombre}</h2>
                         <p>{props.descripcion}</p>
                    <div className="card-actions">
                         <button className="btn btn-primary">Reservar</button>
                    </div>
               </div>
               </div>
          </div>
     )
}