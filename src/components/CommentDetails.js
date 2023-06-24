import React from 'react';
import { useLocation } from 'react-router-dom';

import '../CSS/CommentDetails.css'

export default function CommentDetails(){
   const location = useLocation();
   const data = location.state?.data;
  const {postId, id, name, body} = data;
  
 
   return (
     <div className='commentWrapper'>
       <h2>Comments info:</h2>
       <p>comment Id: {postId} </p>
       <p> Id: {id} </p>
       <p> Comment title: {name} </p>
       <p> Comment : {body} </p>
     </div>
   );
 };