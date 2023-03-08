import React, { PropTypes, useRef } from 'react';
import { Contacto } from '../../../models/contacto.class';

const ContactoForm = ({añadir}) => {
    
    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');

    function crearContacto(e) {
    	e.preventDefault();
    	const nuevoContacto = new Contacto(
             nombreRef.current.value,
             apellidoRef.current.value,
             emailRef.current.value,
             false
    	);

    	añadir(nuevoContacto);
    }


    return (
        <form onSubmit={crearContacto} className='contacto-form'>
             <div className='crear-contacto-input'>
                 <label htmlFor='nombre'>Nombre:</label>
                 <input type='text' id='nombre' placeholder='Nombre' required ref={nombreRef} />
             </div>
             <div className='crear-contacto-input'>
                 <label htmlFor='apellido'>Apellido:</label>
                 <input type='text' id='apellido' placeholder='Apellido' required ref={apellidoRef} />
             </div>
             <div className='crear-contacto-input'>
                 <label htmlFor='email'>Email:</label>
                 <input type='email' id='email' placeholder='Email' required ref={emailRef} />
             </div>
             <button type='submit' className='btn-crear'>Crear</button>
        </form>
    );
};


ContactoForm.propTypes = {

};

export default ContactoForm;
