import React, {useReducer} from 'react';
import PropTypes from 'prop-types';


const Filter = ({filtro, active, filtrar, children}) => {
    
    if(active){
    	return (<span>{children}</span>)
    }

    return (
        <button
            className='filter'
            onClick={(e) => {
            	e.preventDefault();
            	filtrar(filtro);
            }}>
            {children}
        </button>
    );
};

Filter.propTypes = {
};

export default Filter;