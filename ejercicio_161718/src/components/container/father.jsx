import React, { PropTypes, useState } from 'react';
import Child from '../pure/child';

const Father = () => {
	const nameInitial = "Rubiel";
	const [name, setName] = useState(nameInitial);

    function mensaje(text){
    	alert(text);
    }

    function updateName(nuevoNombre){
        setName(nuevoNombre);
    }

    return (
        <div style={{background:'green', padding:'15px'}}>
            <Child name={name} send={mensaje} update={updateName}></Child>
        </div>
    );
};


Father.propTypes = {
};

export default Father;
