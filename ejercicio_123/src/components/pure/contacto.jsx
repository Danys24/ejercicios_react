import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import Conexion from './conexion';

const ContactoComponente = ({contacto}) => {

	return (
		<div>
			<h2>Nombre : {contacto.nombre}</h2>
			<h2>Apellido : {contacto.apellido}</h2>
			<h3>Email : {contacto.email}</h3>
			<div>
			     <Conexion contacto={contacto}></Conexion>
			</div>
		</div>
	)
}

ContactoComponente.propTypes = {
     contacto : PropTypes.instanceOf(Contacto),
}

export default ContactoComponente
