import React, { PropTypes } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import RegisterFormik from '../../components/pure/forms/registerFormik';

const RegisterPage = () => {
    
    const navigate = useNavigate();

    return (
        <div>
           <RegisterFormik></RegisterFormik>
           <p> Ya tengo una cuenta <Link to='/login'> Iniciar Cesion </Link></p>
        </div>
    );
};


RegisterPage.propTypes = {

};

export default RegisterPage;
