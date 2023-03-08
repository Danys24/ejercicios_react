import React, {useState} from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponente from '../pure/contacto';
import ContactoForm from '../pure/forms/contactoForm';
import '../../estilos/contacto.css';


const ContactoList = () => {

    const contacto1 = new Contacto('Daniel', 'Cartagena', 'daniel@gmail.com', false);
    const contacto2 = new Contacto('Daniela', 'Serna', 'daniela@gmail.com', true);

    const [contactos, setContactos] = useState([contacto1, contacto2]);

    function contactoConexion(contacto){
    	console.log('contacto: ', contacto);
    	const index = contactos.indexOf(contacto);
    	const contactoTemp = [...contactos];
    	contactoTemp[index].conectado = !contactoTemp[index].conectado;
    	setContactos(contactoTemp);
    }

    function eliminarContacto(contacto){
    	console.log('contacto eliminado: ', contacto);
    	const index = contactos.indexOf(contacto);
    	const contactoTemp = [...contactos];
    	contactoTemp.splice(index, 1);
    	setContactos(contactoTemp);
    }


    function añadirContacto(contacto){
    	console.log('contacto creado: ', contacto);
    	const index = contactos.indexOf(contacto);
    	const contactoTemp = [...contactos];
    	contactoTemp.push(contacto);
    	setContactos(contactoTemp);
    }

	return (
		<div>
			<h1 className='titulo'>Lista de Contactos</h1>
			<div className='crear-contacto-container'>
			    <div className='crear-contacto'>
			        <h4 className='titulo-contacto'>Crear Contacto</h4>
			        <ContactoForm añadir={añadirContacto}></ContactoForm>
			    </div>
			    <table className='tabla-contactos'>
			        <thead className='thead-contactos'>
			    	      <tr className='tr-contactos'>
			    	         <th>Nombre</th>
			    	         <th>Apellido</th>
			    	         <th>Email</th>
			    	         <th>Estado</th>
			    	         <th>Accion</th>
			    	      </tr>
			        </thead>
			        <tbody>
                      {
                      	contactos.map( (contacto, index) => {
                      		return(
                      			<ContactoComponente key={index} 
                      			                    contacto={contacto}
                      			                    estado={contactoConexion}
                      			                    remove={eliminarContacto}
                      			                    ></ContactoComponente>
                      			)
                      	})
                      }
			        </tbody>
                </table>
			</div>
		</div>
	)
}


export default ContactoList