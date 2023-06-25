import React from 'react'
import { useEffect, useState } from 'react';



function FetchApi() {

  const [posts,setPosts]= useState([])

  useEffect(()=>{



    fetch('https://jsonplaceholder.typicode.com/posts') // DATA IS INSIDE THIS LINK 
        .then(response => response.json())
        .then(posts => setPosts(posts)) 
  
  
  },[])

  return (
    <div>
      <h1>FetchApi</h1>

      {posts.map((item)=>(
          <h1>{item.title}</h1>
           

    ))}
      
      
      
      </div>
  )
}

export default FetchApi