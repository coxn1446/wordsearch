import React from 'react';
import './Square.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectMousePressed, selectSquares} from "../../../../../Features/boardSlice"

function Square(props){
  const dispatch = useDispatch();

  const squares = useSelector(selectSquares);
  let squareClassName = "squareUnselected";
  if (squares[props.squareKey].isSelected){
    squareClassName = "squareSelected"
  }

  const mousePress = useSelector(selectMousePressed);
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
      onMouseOver={handleMouseOver}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {props.letter}
    </div>
  );
}

export default Square;