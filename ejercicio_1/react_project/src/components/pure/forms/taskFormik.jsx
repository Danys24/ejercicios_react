import React from 'react';
import PropTypes from 'prop-types';

//yup y formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//models
import {levels} from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskFormik = ({ add }) => {

	const initialValues = {
		nombre: '',
		descripcion: '',
    completed: false,
		nivel: levels.NORMAL
	}

    const taskSchema = Yup.object().shape(

    	{ 
    		nombre: Yup.string()
    		         .required('Nombre obligatorio'),
    		descripcion: Yup.string()
    		              .required('la descripcion es obligatoria'),
    		nivel: Yup.string()
    		        .required('debes seleccionar un nivel')
    	}

    )

    function createTask(values){
      const newTask = new Task(
         values.nombre,
         values.descripcion,
         values.completed,
         values.nivel
      );
      add(newTask);

    }

    return (
        <div>
           <Formik initialValues = {initialValues}
                   validationSchema = {taskSchema}
                   onSubmit = {async (values) => {
                       await new Promise((r) => setTimeout(r,1000));
                       createTask(values);
                   }}>
                  {({ values,
                   	       touched,
                   	       errors,
                   	       isSubmitting,
                   	       handleChange,
                   	       handleBlur }) => (
                   	          <Form>
                   	              <label htmlFor="nombre">Nombre Tarea:</label>
                                  <Field type='text' id='nombre' name='nombre' placeholder='Tarea ejemplo' />
                                   {
                                     errors.nombre && touched.nombre && 
                                      (
                                        <ErrorMessage name='nombre' component='div'></ErrorMessage>
                                      )
                                   }
                                   <label htmlFor="descripcion">Descripcion Tarea:</label>
                                   <Field type='text' id='descripcion' name='descripcion' placeholder='Descripcion ejemplo' />
                                   {
                                     errors.descripcion && touched.descripcion && 
                                      (
                                        <ErrorMessage name='descripcion' component='div'></ErrorMessage>
                                      )
                                   }
                                   <label htmlFor='nivel'>Prioridad:</label>
                                   <Field component='select' id='nivel' name='nivel'>
                                        <option value={levels.NORMAL}>Normal</option>
                                        <option value={levels.URGENT}>Urgente</option>
                                        <option value={levels.BLOCKING}>Bloqueante</option>
                                   </Field>
                                   {
                                     errors.nivel && touched.nivel && 
                                      (
                                        <ErrorMessage name='nivel' component='div'></ErrorMessage>
                                      )
                                   }

                                   <button type='submit'>Crear Tarea</button>
                                   {isSubmitting ? <p>Creando Tarea...</p> : null}
                   	          </Form>
                   	       )
                  }
           </Formik>
        </div>
    );
};


TaskFormik.propTypes = {
   add: PropTypes.func.isRequired,
};

export default TaskFormik;
