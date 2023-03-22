import React, { useReducer } from 'react';

//acciones
const FIELD = 'FIELD';
const LOGIN = 'LOGIN';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const LOGOUT = 'LOGOUT';

//estado inicial
const initialState = {
	username: '',
	password: '',
	error: '',
	loading: false,
	isLoggedIn:false
}

//reducer
const loginReducer = (state, action) => {
	switch (action.type) {
		case FIELD:
			return {
				...state,
				[action.filedName]: action.payload 
			}
		case LOGIN:
			return {
				...state,
				error: '',
				loading: true,
				isLoggedIn: false 
			}
		case SUCCESS:
			return {
				...state,
				error: '',
				loading: false,
				isLoggedIn: true 
			}
		case ERROR:
			return {
				...state,
				error: 'Usuario y contraseña invalidos',
				loading: false,
				isLoggedIn: false,
				username: '',
				password: '' 
			}
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false 
			}
		default:
			return state;
	}
}

const LoginUseReducer = () => {
	const [state, dispatch] = useReducer(loginReducer, initialState);
    
    const { username, password, error, loading, isLoggedIn } = state;

    const submit = async (e) => {
    	e.preventDefault();
    	dispatch({type:LOGIN});
    	try {
    		await function login(username, password) {
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
    		dispatch({type:SUCCESS});
    	} catch(e) {
    		dispatch({type:ERROR})
    	}
    }
    
    const loggout = () => {
    	dispatch({type:LOGOUT})
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
            		          onChange = {(e) => dispatch({
            		          	                   type: FIELD,
            		          	                   filedName: 'username',
            		          	                   payload: e.currentTarget.value
            		                            })}/>
            		   <input type='password' 
            		          placeholder='password' 
            		          value= {password}
            		          onChange = {(e) => dispatch({
            		          	                   type: FIELD,
            		          	                   filedName: 'password',
            		          	                   payload: e.currentTarget.value
            		                            })}/>
                       <button type='submit'>
                          {loading ? 'Logging...' : 'Login'}
                       </button>

            		</form>
            		)

            }
        </div>
    );
};

export default LoginUseReducer;
