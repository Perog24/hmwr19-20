import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";

import '../CSS/Comments.css';

export default function Comments(){
   const commentsUrl = "https://jsonplaceholder.typicode.com/comments/";
   const [comments, setComments] = useState([]);
   const [isDataLoaded, setIsDataLoaded] = useState(false);
   let history = useNavigate ();

   useEffect(()=>{
      if (!isDataLoaded) {
         fetch(commentsUrl)
            .then((response) => response.json())
            .then((data) => {
               setComments(data);
               setIsDataLoaded(true);
            });
      }
   }, [isDataLoaded, comments]);

    function getCommentDetails(id){
      fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => {
         if(!response.ok){
            throw new Error('Error occurred!')
         }
            return response.json()
      })
      .then((data) => {
         history(`/comments/${id}`, {state: {data} })
         })
      .catch((err)=>{
         console.log(err)
      })     
   }

   return (
      <div className="commentWrapper">
         <h3>Comments</h3>
         <div className="comments">
            {comments.map((comment, index)=>(<div className="comment" key={index}><h5 onClick={()=>{getCommentDetails(comment.postId)}}>{comment.name}</h5><h6>{comment.email}</h6><p>{comment.body}</p></div>))}
         </div> 
      </div>
   )
}