import React from 'react';
import './Square.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectMousePressed, selectSquares, selectDifficulty} from "../../../../../Features/boardSlice"

function Square(props){
  const dispatch = useDispatch();
  const mousePress = useSelector(selectMousePressed);
  const squares = useSelector(selectSquares);
  let difficulty = useSelector(selectDifficulty);
  

  let squareClassName = "";

  if (difficulty === "easy") {
    if (squares[props.squareKey].isSelected){
      squareClassName = "squareEasySelected"
    } else {
      squareClassName = "squareEasyUnselected"
    }
  } else if (difficulty === "medium") {
    if (squares[props.squareKey].isSelected){
      squareClassName = "squareMediumSelected"
    } else {
      squareClassName = "squareMediumUnselected"
    }
  } else if (difficulty === "hard") {
    if (squares[props.squareKey].isSelected){
      squareClassName = "squareHardSelected"
    } else {
      squareClassName = "squareHardUnselected"
    }
  } else if (difficulty === "") {
    squareClassName = ""
  }


  function handleMouseOver(e){
    e.preventDefault();
    if (mousePress) {
      dispatch({
        type: 'board/mouseOver',
        id: props.squareKey
      })  
    } 
  }

  function handleMouseDown(e){
      e.preventDefault();
      dispatch({
        type: 'board/mouseDown',
        id: props.squareKey
      })
  }

  function handleMouseUp(e){
      e.preventDefault();
      dispatch(
          { type: 'board/mouseUp' }
      )
  }

  return (
    <div
      className={squareClassName}
      id={props.squareKey}
      key={props.squareKey}
      onPointerDown={handleMouseDown}
      onPointerUp={handleMouseUp}
      onMouseOver={handleMouseOver}
    >
      {props.letter}
    </div>
  );
}

export default Square;