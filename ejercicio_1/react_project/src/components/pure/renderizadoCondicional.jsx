import React, { PropTypes, useState } from 'react';

const BotonLoggin = ({cesion, estilos}) => {
      return (
      	  <button onClick={cesion} style={estilos}>Loggin</button>
      	)
}

const BotonLoggout = ({cesion, estilos}) => {
	  return (
      	  <button onClick={cesion} style={estilos}>Loggout</button>
      	)
}

const estiloLoggin = {
	backgroundColor : 'green'

}

const estiloLoggout = {
	backgroundColor :'orange'
}



const RenderConditionalComponent = () => {
    
    let buttonComponent;

    const [access, setAccess] = useState(false);
    const [nMensaje, setNMensajes] = useState(0);

    let agregarMensaje = () => {
    	setNMensajes(nMensaje + 1);
    }

    const iniciarCesion = () => {
    	setAccess(true);
    }

    const cerrarCesion = () => {
    	setAccess(false);
    }
    
    if(access){
         buttonComponent = <BotonLoggout cesion={cerrarCesion} estilos={estiloLoggout}></BotonLoggout>
    }else{ 
         buttonComponent = <BotonLoggin cesion={iniciarCesion} estilos={estiloLoggin}></BotonLoggin>
    }

    return (
    	<div>
            {buttonComponent}
            <div>
                {access ?
            	        (<div>
            	           {nMensaje > 0 ?
            	               <p>Usted tiene {nMensaje} mensaje{nMensaje > 1 ? 's' : ''} sin revisar</p>
            	               : <p>No hay mensajes nuevos</p>}
            	           <button onClick={agregarMensaje}>Agregar Mensaje</button>
            	         </div>)
            	        : null
                }
            </div>
    	</div>   
    );
};


RenderConditionalComponent.propTypes = {
};

export default RenderConditionalComponent;
