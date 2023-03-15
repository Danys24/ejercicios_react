import React, { PropTypes } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const AboutPage = () => {
	const location = useLocation();
	const navigation = useNavigate();

	console.log('estamos en la ruta: ', location.pathname);

    const goHome = (path) => {
        navigation(path);
    }

    return (
        <div>
            <h1>About | Faqs </h1>
            <button onClick={() => navigation(-1)}>Go Back</button>
            <button onClick={() => goHome('/')}>Go Home</button>
            <button onClick={() => navigation(1)}>Go Forward</button>
        </div>
    );
};


AboutPage.propTypes = {

};

export default AboutPage;
