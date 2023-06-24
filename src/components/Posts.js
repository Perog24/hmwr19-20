import React, { useState, useEffect } from "react";

import '../CSS/Posts.css';

export default function Posts(){
   const postsUrl = "https://jsonplaceholder.typicode.com/posts/";
   const [posts, setPosts] = useState([]);
   const [isDataLoaded, setIsDataLoaded] = useState(false);

   useEffect(()=>{
      if (!isDataLoaded) {
         fetch(postsUrl)
            .then((response) => response.json())
            .then((data) => {
               setPosts(data);
               setIsDataLoaded(true);
            });
      }
   }, [isDataLoaded, posts]);
   return (
      <div className="postsWrapper">
         <h1>Posts</h1>
         <div className="posts">
            {posts.slice(0,5).map((post, index)=>(<div className="post" key={index}><h4>{post.title}</h4><p>{post.body}</p></div>))}
         </div> 
      </div>
   )
}