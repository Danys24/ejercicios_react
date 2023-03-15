import React, { PropTypes } from 'react';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email : Yup.string()
                   .email('Formato de email invalido')
                   .required('email es obligatorio'),
        password: Yup.string()
                     .required('Password es obligatorio')
    }
);



const LoginFormik = () => {
    const initialCredentials = {
       email: '',
       password: ''
    }

    return (
    	<div>
    	    <h3>Login Formik</h3>
    		<Formik 
            initialValues = {initialCredentials}
            validationSchema = {loginSchema} 
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r,500));
                alert(JSON.stringify(values, null, 2));
                localStorage.setItem('credenciales', values)
            }}>    
                   { props => {

                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur
                        } = props;

                        return (
                            <Form>
                               <label htmlFor="email">Email</label>
                               <Field type='email' id='email' name='email' placeholder='Ingresar Email' />
                               {
                                 errors.email && touched.email && 
                                 (
                                    <div className='error'>
                                       <p>{errors.email}</p>
                                    </div>
                                 )
                               }

                               <label htmlFor="password">Password</label>
                               <Field type='password' id='password' name='password' placeholder='password' />
                               {
                                 errors.password && touched.password && 
                                 (
                                    <div className='error'>
                                       <p>{errors.password}</p>
                                    </div>
                                 )
                               }
                               <button type='submit'>Login</button>
                               {isSubmitting ? <p>Enviando credenciales...</p> : null} 
                            </Form>
                        )

                     }

                   }

            </Formik>
    	</div>
    );
};


LoginFormik.propTypes = {

};

export default LoginFormik;
