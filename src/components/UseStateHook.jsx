import React,{useState} from 'react'
import { Button } from 'react-bootstrap';

const UseStateHook = () => {
    
   const[colour,setColour]= useState("green");

   const colorHandle = ()=>{
      setColour("red");
   }

   const [count,setCount] = useState(0)

   const increment = () => {
    setCount(count+3);
   }

   const decrement = () => {

   
   if (count>0){    // using this after count getting 0 it shouldnt decremented
     
    setCount (count-3);
   }
   }

  return (
    <div>
         <br></br>
         <h1>MY FAVOURITE COLOUR IS {colour}</h1>
        <Button variant='primary'  onClick={colorHandle}>color cahnge</Button>

        <h1>COUNT IS {count}</h1>
        <Button className='m-5' onClick={increment} >+</Button>   
        <Button onClick={decrement}>-</Button>   




    </div>
  )
}

export default UseStateHook