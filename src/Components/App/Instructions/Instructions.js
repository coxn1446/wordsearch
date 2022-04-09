import React from 'react';


function Instructions(props){

  return(
    <div>
    <p>Please find the following words in the grid below:</p>
    <p>{props.words[0]} {props.words[1]} {props.words[2]}</p>
    </div>
  )

  };

  export default Instructions