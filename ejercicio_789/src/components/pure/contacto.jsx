import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const ContactoComponente = ({contacto, estado, remove}) => {

	function contactoIconConectado() {
		if(contacto.conectado){
			return(<i className = "bi-toggle-on" style={{color:'green'}} onClick={() => estado(contacto)}></i>);
		}else{
			return(<i className = "bi-toggle-off" style={{color:'grey'}} onClick={() => estado(contacto)}></i>);
		}
	}

	return (
		<tr>
			<td>{contacto.nombre}</td>
			<td>{contacto.apellido}</td>
			<td>{contacto.email}</td>
			<td>{contactoIconConectado()}</td>
			<td><i className = "bi-trash" style={{color:'red'}} onClick={() => remove(contacto)}></i></td>
		</tr>

	)
}

ContactoComponente.propTypes = {
     contacto : PropTypes.instanceOf(Contacto),
}

export default ContactoComponente