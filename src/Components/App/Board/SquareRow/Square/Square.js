import React, {useState} from 'react';
import './Square.css';

function Square(props){
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let letter = alphabet.charAt([Math.floor(Math.random() * alphabet.length)])

  let wordKeys = props.wordKeys
  let words = props.words;

  wordKeys.forEach((wordKeyArray, index) => {
    wordKeyArray.forEach((wordKey, index1) => {
      if (wordKey=== props.squareKey) {
        letter = words[index].charAt(index1)
      }
    })
  })
  
  let [squareClassName, setSquareClassName] = useState("squareUnselected");
  let [mouseIsPressed, setMouseIsPressed] = useState(false)

  function handleMouseDown(e){
    e.preventDefault();
    setMouseIsPressed(true)
    setSquareClassName("squareSelected");

  }
  function handleMouseUp(e){
    e.preventDefault();
    setMouseIsPressed(false)

  }
  function handleMouseOver(e){
    e.preventDefault();
      setSquareClassName("squareSelected");
      console.log(`the class is ${squareClassName}`);
  }

  function handleMouseOut(e){
    e.preventDefault();
      setSquareClassName("squareUnselected");
      console.log(`the class is ${squareClassName}`);
  }

  return (
    <div
      className={squareClassName}
      id={props.squareKey}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {letter}
    </div>
  );
}

export default Square;