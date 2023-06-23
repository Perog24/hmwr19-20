import React, { useState, useEffect } from "react";

export default function Users() {
   const usersUrl = "https://jsonplaceholder.typicode.com/users";
   const [users, setUsers] = useState([]);
   const [isDataLoaded, setIsDataLoaded] = useState(false);

   useEffect(()=>{
      if (!isDataLoaded) {
         fetch(usersUrl)
            .then((response) => response.json())
            .then((data) => {
               setUsers(data);
               setIsDataLoaded(true);
            });
      }
   }, [isDataLoaded, users]);
   return (
      <div>
         <h1>Users</h1>
         <div className="Users">
            {users.map((user, index)=>(<div className="user" key={index}><h4>{user.name}</h4></div>))}
         </div> 
      </div>
   )
}