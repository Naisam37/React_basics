import React from 'react'

const Props = ({propsmapping}) => {
  return (
<div>


    <br></br>
<br></br>


    <h1>PASSED THROUGH PROPS</h1>

    <br></br>

    
    {propsmapping.map((propsee)=>(

   <div>


       
      <h1>{propsee.name1}</h1>  
      <h3>{propsee.domain}</h3>
      <h3>{propsee.qualification}</h3>  {/* WE USE PROPS TO PASS DATA FROM ONE COMPONENT TO ANOTHER ONE (FROM PARENT COMPONENT TO CHILD) */}

    </div>
    ))}
 </div>
  );
};

export default Props

