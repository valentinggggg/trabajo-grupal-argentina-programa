import './SobreNos.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default  function SobreNos() {

    useEffect(() => {
        Aos.init(5000)
   })
    return (
        <div className='SobreNosotros' data-aos="fade-up">
    <div className='SobreNosotrosTitle'>
        <h1 className="text-5xl font-bold text-zinc-100 text-center">Sobre Nosotros</h1>
    </div>
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li data-aos="fade-right">
    <div class="timeline-middle" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-orange-200"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-start md:text-end mb-10">
      <time class="font-mono italic text-zinc-100">2019</time>
      <div class="text-lg font-black text-orange-200">Comienzan las ideas</div>
      <h1 class="text-zinc-100">El viaje comenzó con un grupo de apasionados por los paisajes argentinos. Comenzamos a explorar y capturar la belleza natural de nuestro país, llenos de entusiasmo y curiosidad.</h1>
    </div>
    <hr/>
  </li>
  <li data-aos="fade-left">
    <hr />
    <div class="timeline-middle " >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-orange-200"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end mb-10">
      <time class="font-mono italic text-zinc-100">2021</time>
      <div class="text-lg font-black text-orange-200">Primeros pasos como empresa</div>
      <h1 class="text-zinc-100">Un hito en nuestra aventura. Combi Aventuras se convierte en una realidad. Nuestra plataforma en línea despega, conectando a viajeros con experiencias auténticas y paisajes excepcionales.</h1>
    </div>
    <hr />
  </li>
  <li data-aos="fade-right">
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-orange-200"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-start md:text-end mb-10">
      <time class="font-mono italic text-zinc-100">2022</time>
      <div class="text-lg font-black text-orange-200">Crecimiento como empresa</div>
      <h1 class="text-zinc-100">Creciendo juntos. Con cada viaje, aprendemos, nos adaptamos y expandimos nuestras ofertas. Nos esforzamos por ofrecer lo mejor a nuestros viajeros, brindándoles momentos inolvidables.</h1>
    </div>
    <hr />
  </li>
  <li data-aos="fade-left">
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-orange-200"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end mb-10">
      <time class="font-mono italic text-zinc-100">2023</time>
      <div class="text-lg font-black text-orange-200">Actualidad de Combi Aventuras</div>
      <h1 class="text-zinc-100">Orgullosos de nuestro camino. Combi Aventuras sigue evolucionando. Con el apoyo de una comunidad apasionada, continuamos explorando, descubriendo y compartiendo la magia de Argentina.</h1>
    </div>
  
  </li>
  </ul>
  

        </div>
    )
}