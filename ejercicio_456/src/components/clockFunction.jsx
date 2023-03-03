import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


const ClockFunctionComponent = () => {

	const datosIncial = {
		fecha: new Date(),
		edad: 0,
		nombre: 'Martin',
		apellidos: 'San Jose'
	}

	const [datos, setDatos] = useState(datosIncial);


	useEffect(() => {
		const timerID = setInterval( () => {
			tick();
		}, 1000);

		return () => {
			clearInterval(timerID);
		};

	}, [datos]);

	const tick = () => {
        setDatos(
        	  {
        	  	fecha: new Date(),
        	  	edad: datos.edad + 1,
		        nombre: 'Martin',
		        apellidos: 'San Jose'
        	  }
        );   
	}


	return (
		<div>
			<h2>
                Hora Actual: {datos.fecha.toLocaleTimeString()}                
             </h2>
             <h3>{datos.nombre} {datos.apellidos}</h3>
             <h1>Edad: {datos.edad}</h1>
		</div>
	)


}



ClockFunctionComponent.propTypes = {

}

export default ClockFunctionComponent
