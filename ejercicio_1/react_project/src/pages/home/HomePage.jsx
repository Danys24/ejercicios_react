import React, { PropTypes } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const HomePage = () => {
    const location = useLocation();
    const history = useNavigate();


    const goProfile = (path) => {
        history(path);
    }

    return (
        <div>
           <h1>Home Page</h1>
           <button onClick={() => history(-1)}>Go Back</button>
           <button onClick={() => goProfile('/profile')}>Go Profile</button>
        </div>
    );
};


HomePage.propTypes = {

};

export default HomePage;
