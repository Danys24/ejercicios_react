import React, { useState, useEffect } from 'react';
import { getAllUsers, getAllPagedUsers, getUsersDetails } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);

    useEffect(() => {
    	obtainUsers();
    }, []);

    const obtainUsers = () => {

    	getAllUsers()
    	        .then((response) =>{
    	        	console.log('All users ', response.data)
    	        	setUsers(response.data);
    	        	setTotalUsers(response.total);
    	        	setUsersPerPage(response.per_page);
    	        	setPages(response.total_pages);
    	        })
    	        .catch((error) => {
    	        	alert(`Error mientras se recivieron los usuarios: ${error}`)
    	        })
    	        .finally(() => {
    	        	console.log('usuarios obtenidos');
    	        	console.table(users);
    	        })
    }

    const obtainPagedUsers = (page) => {

    	getAllPagedUsers(page)
    	        .then((response) =>{
    	        	console.log('All paged users ', response.data)
    	        	setUsers(response.data);
    	        	setTotalUsers(response.total);
    	        	setUsersPerPage(response.per_page);
    	        	setPages(response.total_pages);
    	        })
    	        .catch((error) => {
    	        	alert(`Error mientras se recivieron los usuarios: ${error}`)
    	        })
    	        .finally(() => {
    	        	console.log('usuarios obtenidos');
    	        	console.table(users);
    	        })
    }

    const obtainDetailsUser = (id) => {

    	getUsersDetails(id)
    	        .then((response) =>{
    	        	console.log('User ', response.data)
    	        	setSelectedUser(response.data);
    	        })
    	        .catch((error) => {
    	        	alert(`Error mientras se recivio el usuario: ${error}`)
    	        })
    	        .finally(() => {
    	        	console.log('usuario obtenido');
    	        	console.table(selectedUser);
    	        })

    }

    return (
        <div>
           <h2>Users: </h2>
           {users.map((user, index) => (
               <p key={index} onClick={() => obtainDetailsUser(user.id)}>{user.first_name}</p>
           ))}
           <p>Mostrando {usersPerPage} users of {totalUsers} en total. </p>
           <button onClick={() => obtainPagedUsers(1)}>1</button>
           <button onClick={() => obtainPagedUsers(2)}>2</button>
           <div>
             <h3>User Detail</h3>
             { selectedUser && (
             	   <div>
             	     <p>Name: {selectedUser.first_name} </p>
             	     <p>Last Name: {selectedUser.last_name} </p>
             	     <p>Email: {selectedUser.email} </p>
             	     <img alt='avatar' src={selectedUser.avatar} style={{height:'50px', width:'50px'}} />
             	   </div>
             	)

             }
           </div>
        </div>
    );
};


export default FetchExample;
