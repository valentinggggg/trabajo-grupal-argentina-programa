function Transporte(props) {
     return (
          <div className="transporte">
               <h1 className="text-5xl font-bold text-sky-800">
                    {props.titulo}
               </h1>

               <p className="descripcion">
                    {props.descripcion}
               </p>

               <span className="font-bold text-grey">
                    {props.precio}
               </span>
          </div>
     );
}

export default Transporte;