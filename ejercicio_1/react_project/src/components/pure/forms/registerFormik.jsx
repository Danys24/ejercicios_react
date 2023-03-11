import React, { PropTypes } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegiserFormik = () => {
    
    const initialValues = {
    	username: '',
    	email: '',
    	password: '',
    	confirm:'',
    	role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
        	username: Yup.string()
        	          .min(6, 'nombre de usuario muy corto')
        	          .max(12, 'nombre de usuario muy largo')
        	          .required('el nombre de usuario es obligatorio'),
        	email: Yup.string()
        	       .email('formato invalido')
        	       .required('campo obligatorio'),
        	role: Yup.string()
        	      .oneOf([ROLES.USER, ROLES.ADMIN], 'Tu debes seleccionar un rol')
                  .required('el rol es obligatorio'),
        	password: Yup.string()
        	          .min(8, 'contraseña muy corta')
        	          .required('campo obligatorio'),
        	confirm: Yup.string()
        	         .when("password", {
        	         	is: value => (value && value.length > 0 ? true : false),
        	         	then: Yup.string().oneOf(
        	         		[Yup.ref("password")],
        	         		'¡Password must match!'
        	         	)
        	         }).required('Debes confirmar la contraseña')
        }

    )

	const submit = () => {
        alert('register user');
	}

    return (
        <div>
           <h4>Register Formik</h4>
           <Formik initialValues = {initialValues}
                   validationSchema = {registerSchema} 
                   onSubmit={async (values) => {
                       await new Promise((r) => setTimeout(r,500));
                       alert(JSON.stringify(values, null, 2));
                       localStorage.setItem('credenciales', values)
                   }}>

                   {({ values,
                   	       touched,
                   	       errors,
                   	       isSubmitting,
                   	       handleChange,
                   	       handleBlur }) => (
                   	        <Form>
                               <label htmlFor="username">Username</label>
                               <Field type='text' id='username' name='username' placeholder='Danys24' />
                               {
                                 errors.username && touched.username && 
                                 (
                                    <ErrorMessage name='username' component='div'></ErrorMessage>
                                 )
                               }
                               <label htmlFor="email">Email</label>
                               <Field type='email' id='email' name='email' placeholder='ejemplo@gmail.com' />
                               {
                                 errors.email && touched.email && 
                                 (
                                    <ErrorMessage name='email' component='div'></ErrorMessage>
                                 )
                               }
                               <label htmlFor="password">Password</label>
                               <Field type='password' id='password' name='password' placeholder='Password' />
                               {
                                 errors.password && touched.password && 
                                 (
                                    <ErrorMessage name='password' component='div'></ErrorMessage>
                                 )
                               }
                               <label htmlFor="confirm">Confirm Password</label>
                               <Field type='password' id='confirm' name='confirm' placeholder='Confirm Password' />

                               {
                                 errors.confirm && touched.confirm && 
                                 (
                                    <ErrorMessage name='confirm' component='div'></ErrorMessage>
                                 )
                               }
                               <button type='submit'>Register Account</button>
                               {isSubmitting ? <p>Registrando cuenta...</p> : null} 
                            </Form>
                   	       )
                   }
           </Formik>
        </div>
    );
};


RegiserFormik.propTypes = {
};

export default RegiserFormik;
