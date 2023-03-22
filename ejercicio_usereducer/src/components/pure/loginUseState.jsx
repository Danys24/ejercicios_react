import React, { useState } from 'react';

const LoginUseState = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    const submit = async (e) => {
    	e.preventDefault();
    	setError('');
    	setLoading(true);
    	try {
    		await function login (username, password) {
    			new Promise((resolve, reject) => {
    				setTimeout(() => {
    					if(username === 'admin' && password === 'admin'){
    					    resolve();
    				    }else {
    					    reject();
    				    }

    				}, 2000)
    			}) 
    		}
    		setIsLoggedIn(true);
    		setLoading(false);
    	} catch(e) {
    		setError('usuario o contraseña inorrecta' + e);
    		console.log(e);
    		setUsername('');
    		setPassword('');
    	}
    }

    const loggout = () => {
    	setIsLoggedIn(false);
    	setLoading(false);
    }

    return (
    	<div>
            {
            	isLoggedIn ? (
            		<div>
            		   <h1> Welcome {username} </h1>
            		   <button onClick={loggout}>
            		      Loggout
            		   </button>
            		</div>
            		)
            		: (
            		<form onSubmit={submit}>
            		   {
            		   	 error && <p style={{color: 'tomato'}}>{error}</p>
            		   }
            		   <input type='text' 
            		          placeholder='username' 
            		          value= {username}
            		          onChange = {(e) => setUsername(e.currentTarget.value)} />
            		   <input type='password' 
            		          placeholder='password' 
            		          value= {password}
            		          onChange = {(e) => setPassword(e.currentTarget.value)} />
                       <button type='submit'>
                          {loading ? 'Logging...' : 'Login'}
                       </button>

            		</form>
            		)

            }
    	</div>
        
    );
};



export default LoginUseState;
