import React from 'react'

const ConditionalRendering = () => {

    let num = 1 ;

  return (
    <div> {num>0?<h1>Positive</h1>:num<0?<h1>Negative</h1>:<h1>Zero</h1>} </div>
  )
}

export default ConditionalRendering