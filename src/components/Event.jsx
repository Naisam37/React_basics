import React from 'react'
import {Button} from 'react-bootstrap';

const Event = () => {

const clickHandle = ()=> { return  console.log("you got it bro")}

const onChangeHandle = () => {return alert("you are typing broo")}

  return (
    <div>

      <Button variant="primary" onClick={clickHandle}>hello</Button>
      <br></br>
      <br></br>
      
      <input type='text' onChange={onChangeHandle} />

    </div>
  )
}

export default Event