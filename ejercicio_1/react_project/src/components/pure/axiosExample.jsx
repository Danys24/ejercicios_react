import React, { PropTypes, useState, useEffect } from 'react';
import { getRandomUser } from '../../services/axiosService';

const AxiosExample = () => {
    
    const [user, setUser] = useState(null);

    useEffect(() => {
    	obtainUser();
    }, [])

    const obtainUser = () => {
    	getRandomUser()
    	    .then((response) => {
    	    	if(response.status === 200){
    	    		console.log(response.data.results[0]);
    	    		setUser(response.data.results[0]);
    	    	}
    	    })
    	    .catch((error) => {
    	    	alert(`ha ocurrido un error ${error}`)
    	    })
    }

    return (
        <div>
           <h1>Axios Example</h1>
           { user != null ?
           	 (
           	 	<div>
           	 	    <img alt='avatar' src={user.picture.large} />
           	 	    <h2>Name: {user.name.title} {user.name.first} {user.name.last}</h2>
           	 	    <h3> email: {user.email}</h3>
           	 	</div>
           	 )
             : null
           }
           <div>
                <button onClick={obtainUser}>Create Random User</button>
                <p>Genera un nuevo usuario</p>
           </div>
        </div>
    );
};


AxiosExample.propTypes = {

};

export default AxiosExample;
