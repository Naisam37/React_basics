import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

function UseEffect() {

    const [counter,setCounter] = useState(0);

    useEffect(()=>{

        console.log("side effect")

    },[counter])


  return (
    <div><h1>{counter}</h1>


    <Button onClick={()=> setCounter(counter+1)}>+</Button>
    
    </div>
  )  
}



export default UseEffect