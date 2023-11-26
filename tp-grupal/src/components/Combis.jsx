import Transporte from './Transporte'
import './Combis.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
class Pack {
     constructor(titulo, desc, precio){
          this.titulo = titulo,
          this.descripcion = desc,
          this.precio = precio
     }
}

const salta = new Pack (' Salta y Jujuy para dos personas', 'Este paquete incluye: Pasajes en combi desde Buenos Aires a Salta ida y vuelta, con una diracioón de 20 horas por tramo', 'El costo es de $12.000 por persona')

const cayafate = new Pack ('Exucursión a Cafayate', 'Con visita a bodegas y degustación de vinos, por un día.', 'El costo es de $2.500 por persona')

const quebrada = new Pack ('Excursión a la Quebrada de Humahuaca', 'Con visita a Pumamarca, Tilcara y Humahuaca, por un día.', 'El precio total del paquete es de $38.000 para dos personas')

function Combis() {
     useEffect(() => {
          Aos.init(3000)
     })
     return (
          <div id="combis">
               <section className="combis">
                    <div className="colIz">
                         <article className="paquete" data-aos="fade-right">
                              <Transporte {...salta}/>
                         </article>

                         <article className="paquete" data-aos="fade-right">
                              <Transporte {...cayafate} />
                         </article>

                         <article className="paquete" data-aos="fade-right">
                              <Transporte {...quebrada}/>
                         </article> 
                    </div>

                    <aside className="columnaDer">
                         <div className="contenedorImagen">
                              <h3 className="text-5xl text-center text-zinc-100 w-1/2">Explora destinos emocionantes, descubre nuevos horizontes y sumérgete en aventuras inolvidables. En nuestra plataforma, no solo viajas, ¡vives experiencias!</h3>
                         </div>
                    </aside>
               </section>
          </div>
     );
}

export default Combis;