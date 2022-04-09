import React, {useState} from 'react';
import Square from "./Square/Square"

function SquareRow(props){
    const columns = 15;
    const squareColumns = []

/*    let mouseIsPressed = false;
    let [squareClassName, setSquareClassName] = useState("squareUnselected") 
  
    function handleMouseDown(e){
      e.preventDefault();
      mouseIsPressed = true;
  
    }
    function handleMouseUp(e){
      e.preventDefault();
      mouseIsPressed = false;
  
    }
    function handleMouseEnter(e){
      e.preventDefault();
      if (mouseIsPressed) {
        setSquareClassName("squareSelected");
        console.log(`the class is ${squareClassName}`);
      }
    }

    */

    for (let column = 0; column < columns; column++) {
        squareColumns.push(
            <Square
                key={(column+(props.squareRowsKey*columns)).toString()}
                squareKey={column+(props.squareRowsKey*columns)}
                words={props.words}
                wordKeys={props.wordKeys}
            ></Square>
        )
    }
   return (squareColumns)
};

export default SquareRow;