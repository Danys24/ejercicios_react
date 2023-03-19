import axios from 'axios';

//login
export const login = (email, password) => {
    
    let body ={
    	email: email,
    	password: password
    }

    // devuelve una promesa
	return axios.post('https://reqres.in/api/login', body)

}

//obtain all Users
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

//obtain all pages User
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

// Obtain User By ID
export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}

//Create User
export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }

    return axios.post('https://reqres.in/api/users', body);
}

//Update User
export const updateUser = (id, name, job) => {
    let body = {
        name: name,
        job: job
    }

    return axios.put(`https://reqres.in/api/users/${id}`, body);
}

//Delete User
export const deleteUserByID = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`);
}