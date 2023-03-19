import React, { PropTypes } from 'react';

import { login, getAllUsers, getAllPagedUsers, getUserByID, createUser, updateUser, deleteUserByID } from '../../services/axiosCRUDService';

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

const initialCredentials = {
       email: '',
       password: ''
}

const AxiosCRUDExample = () => {
    
    //email: eve.holt@reqres.in
    //password: cityslicka
    const authUser = (values) => {
    	login(values.email, values.password)
    	   .then((response) => {
    	   	   if(response.data.token){
    	   	   	  alert(JSON.stringify(response.data.token));
    	   	   	  sessionStorage.setItem('token', response.data.token);
    	   	   } else{
    	   	   	  throw new Error('Login Failure');
    	   	   	  sessionStorage.removeItem('token');
    	   	   }
    	   	   
    	   })
    	   .catch((error) => {            
                alert(`something went wrong: ${error}`)
                sessionStorage.removeItem('token');
           })
    	   .finally(() => console.log('Login done'))
    }


    //Examples methods CRUD
    
    const obtainAllUsers = () => {
        getAllUsers()
           .then((response) => {
              console.log(response)
              alert(JSON.stringify(response.data.data))
           })
           .catch((error) => {
              alert(`Something went wrong: ${error}`)
           })
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
           .then((response) => {
              alert(JSON.stringify(response.data.data))
           })
           .catch((error) => {
              alert(`Something went wrong: ${error}`)
           })
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
           .then((response) => {
              alert(JSON.stringify(response.data.data))
           })
           .catch((error) => {
              alert(`Something went wrong: ${error}`)
           })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
           .then((response) => {
              if(response.data && response.status === 201){
                alert(JSON.stringify(response.data))
              } else{
                throw new Error('User Not Created')
              }
           })
           .catch((error) => {
              alert(`Something went wrong: ${error}`)
           })
    }

    const updateOneUser = (id, name, job) => {
        updateUser(id, name, job)
           .then((response) => {
              if(response.data && response.status === 200){
                alert(JSON.stringify(response.data))
              } else{
                throw new Error('User Not Update')
              }
           })
           .catch((error) => {
              alert(`Something went wrong: ${error}`)
           })
    }

    const deleteOneUserByID = (id) => {
        deleteUserByID(id)
           .then((response) => {
              if(response.status === 204){
                alert(`user width id ${id} successfully deleted`);
              } else{
                throw new Error('User Not Deleted')
              }
           })
           .catch((error) => {
              alert(`Something went wrong: ${error}`)
           })
    }

    return (
        <div>
           <h3>Login Formik</h3>
            <Formik 
            initialValues = {initialCredentials}
            validationSchema = {loginSchema} 
            onSubmit={async (values) => {
                authUser(values);
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
            <button onClick={obtainAllUsers}>Obtain All Users</button>
            <button onClick={() => obtainAllPagedUsers(2)}>page 2</button>
            <button onClick={() => obtainUserByID(1)}>User (1)</button>
            <button onClick={() => createNewUser('Danys','Ingeniero')}>Create User</button>
            <button onClick={() => updateOneUser(1, 'Pepe','Inge')}>Update User (1)</button>
            <button onClick={() => deleteOneUserByID(2)}>Delete User (2)</button>
        </div>
    );
};

AxiosCRUDExample.propTypes = {
};

export default AxiosCRUDExample;
