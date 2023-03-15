import React, { useState } from 'react';
import PropTypes from 'prop-types';



const Greetingf = (props) => {

    //introduccion a useState
    //[variable, metodo para actualizar] = useState(valor inicial)
    const [age, setage] = useState(23);

    const birthDate = () => {
         setage(age + 1);
    }

    return (
        <div>
		    <h1>Hola {props.name}</h1>
	        <h2>Su edad es: {age}</h2>
	        <button onClick={birthDate}>Cumplir años</button>
		</div>
    );
};


Greetingf.propTypes = {
    name: PropTypes.string,
};

export default Greetingf;

