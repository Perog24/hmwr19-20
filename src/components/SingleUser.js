import React from "react";
import { useLocation } from "react-router-dom";

import '../CSS/SingleUser.css';

export default function SingleUser() {
  
   const user = JSON.parse(localStorage.getItem('myuser'));
   const data = useLocation().state?.data ;
   console.log(data);
   if (!user ) {
      return <div>Loading...</div>;
   }
   return (
      <div className="userWrapper">
         <h2>User Details</h2>
         <p>Name: {user.name}</p>
         <p>Login: {user.username}</p>
         <p>Email: {user.email}</p>
         <p>Phone: {user.phone}</p>
         <p>Web: {user.website}</p>
         <p><strong>Address: </strong>city:{user.address.city}, street: {user.address.street}, {user.address.suite}</p>
         <hr/>
         <h3>Post List:</h3>
         <ol>
         {data.map((post, index)=>{
               return(<li key={index+post.id}><strong>Title: </strong>{post.title}
               <p><strong>Post: </strong>{post.body}</p></li>)})
            }
         </ol>
      </div>
   );
}