import './Contact.css'
import { useState } from 'react'

function validarEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export default function Contact() { 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [consulta, setConsulta] = useState('')
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    }
    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
    }
    const handleConsultaChange = (e) => {
        const newConsulta = e.target.value;
        setConsulta(newConsulta);
    }
    function handleSubmit(e) {
        e.preventDefault()
        const mailValido = validarEmail(email)
        if (mailValido) {
            setConsulta('')
            setEmail('')
            setName('')
            alert("Consulta enviada")
        } else {
            alert("Ingrese un mail valido")
        }
    }

    return (
        <section id="contacto" className="contacto">
            <h2 className='text-5xl font-bold text-zinc-100 text-center titulo underline'>Contactenos</h2>
            <form className="form-contacto py-4" onSubmit={(e)=>{handleSubmit(e)}}>
                <input type="text" onChange={handleNameChange} placeholder="Nombre y Apellido" value={name}/>
                <input type="text" onChange={handleEmailChange} placeholder="Correo electronico" value={email}/>
                <textarea onChange={handleConsultaChange} placeholder="Ingrese su consulta" cols="70" rows="1" value={consulta}></textarea>
                <input className="m-auto" type="submit" id="botonEnvio"/>
            </form>
        </section>
    )
}