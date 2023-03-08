import React, { PropTypes, useRef } from 'react';

const Child = ({name, send, update}) => {

	const mensajeRef = useRef('');
	const nameRef = useRef('');

	function pressButton(){
		alert('hola mi amor');
	}

    function pressButtonParams(text){
		alert(`text: ${text}`);
	}

	function submitName(e){
		//Para prevenir que se recargue la pagina
		e.preventDefault();

		update(nameRef.current.value);
	}


    return (
        <div style={{background:'red'}}>
             <p onMouseOver={() => console.log("On Mouse Over")} style={{color:'white'}}>Hola {name}</p>
             <button onClick={() => console.log('Boton 1 presionado')}>
                      Boton 1
             </button>
             <button onClick={pressButton}>
                      Boton 2
             </button>

             <button onClick={() => pressButtonParams('soba Pollas')}>
                      Boton 3
             </button>
             
             <input placeholder='Escibe el mensaje' 
                    ref={mensajeRef}/>

             <button onClick={() => send(mensajeRef.current.value)}>
                     Enviar Mensaje
             </button>

             <div style={{margin:'20px', padding: '10px'}}>
                   <form>
                        <input type='text' placeholder='nuevo nombre' ref={nameRef} />
                        <button type='submit' onClick={submitName}>Enviar</button>
                   </form>
             </div>

        </div>
    );
};



export default Child;
