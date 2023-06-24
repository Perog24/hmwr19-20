import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import '../CSS/Users.css'

export default function Users() {
   const usersUrl = "https://jsonplaceholder.typicode.com/users";
   const [users, setUsers] = useState([]);
   const [isDataLoaded, setIsDataLoaded] = useState(false);
   let navigate = useNavigate ();

   useEffect(()=>{
      if (!isDataLoaded) {
         fetch(usersUrl)
            .then((response) => response.json())
            .then((data) => {
               setUsers(data);
               setIsDataLoaded(true);
            });
      }
   }, [isDataLoaded]);

   function findUser(index){
      fetch(`https://jsonplaceholder.typicode.com/users/${index}/posts`)
      .then((response) => response.json())
        .then((data) =>{
         navigate(`/users/user-details`, {state: {data}})
         })
   }
   return (
      <div  className="usersWrapper">
         <h1>Users</h1>
         <div className="Users">
            {users.map((user, index)=>(<div className="user" onClick={()=>findUser(index)} key={index}> <h5>{user.name}</h5></div>))}
         </div> 
      </div>
   )
}