import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const Conexion = ({contacto}) => {
	return (
		<div>
			<h5>El contacto se encuentra: {contacto.conectado ? 'En Linea' : 'No Disponible'}</h5>
		</div>
	)
}

Conexion.propTypes = {
      contacto: PropTypes.instanceOf(Contacto),
}

export default Conexion
