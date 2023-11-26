import Card from './Card'
import imgJujuy from './imagenes/salinasjujuy.jpg'
import imgLaEstrella from './imagenes/laestrella.png'
import imgSelvaMisionera from './imagenes/selvamisionera.jpg'
import imgParqueNacional from './imagenes/parquenacional.png'

class Destino {
     constructor(nombre, desc, imagen){
          this.nombre = nombre,
          this.descripcion = desc,
          this.imagen = imagen
     }
}

const jujuy = new Destino('Salinas Jujuy', 'Una extensa planicie blanca de sal a 4.000 metros de altura, que refleja el cielo y crea un efecto óptico sorprendente.', imgJujuy);

const selvaMisionera = new Destino('Selva Misionera', 'Una de las eco-regiones más diversas del planeta, con una vegetación exuberante, una fauna variada y el espectacular salto de las Cataratas del Iguazú.', imgSelvaMisionera);

const formosa = new Destino('Bañado La Estrella en Formosa', 'Un humedal de gran importancia ecológica, que alberga una rica biodiversidad y ofrece paisajes de gran belleza, especialmente al atardecer.', imgLaEstrella);

const parqueNacional = new Destino('Parque Nacional Talampaya en La Rioja:', 'Un parque que conserva impresionantes formaciones rocosas de colores y formas caprichosas, producto de la erosión del viento y el agua.', imgParqueNacional);


export default function Ofertas() {

     const alerta = () => {
          <div role="alert" className="alert alert-success">
               <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               <span>¡Reservaste correctamente el viaje!</span>
          </div>
     }

     return (
          <div>
               <section className="ofertas">
                    <article className="viajes">
                         <h1 className="text-5xl font-bold text-center">
                                   ¡Aprovechá nuestras ofertas de viaje!
                         </h1>

                         <div className="tarjetas">
                              <Card {...jujuy}/>
                              <Card {...selvaMisionera}/>
                              <Card {...formosa}/>
                              <Card {...parqueNacional}/>
                         </div>
                    </article>
               </section>
          </div>
     )
}