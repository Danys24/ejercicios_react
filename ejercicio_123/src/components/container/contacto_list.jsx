import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponente from '../pure/contacto';


const ContactoList = () => {

    const contacto1 = new Contacto('Daniel', 'Cartagena', 'daniel@gmail.com', false);

	return (
		<div>
			<h1>Lista de Contactos</h1>
			<div>
			    <ContactoComponente contacto={contacto1}></ContactoComponente>
			</div>
		</div>
	)
}


export default ContactoList
