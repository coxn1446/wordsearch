import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {selectSquares} from "../../../Features/boardSlice"


function Instructions(props){
  const dispatch = useDispatch();
  const squares = useSelector(selectSquares);

  function handleClickEasy(e){
    e.preventDefault();
    if(squares.length === 0){
      dispatch(
        { 
          type: 'board/newBoard',
          rows: 5,
          columns: 5
        }
      )
      dispatch(
        {
          type: "board/difficulty",
          difficulty: "easy"
        }
      )
    }
  }

  function handleClickMedium(e){
    e.preventDefault();
    if(squares.length ===0){
      dispatch(
        { 
          type: 'board/newBoard',
          rows: 15,
          columns: 15
        }
      )
      dispatch(
        {
          type: "board/difficulty",
          difficulty: "medium"
        }
      )
    }
}

  function handleClickHard(e){
    e.preventDefault();
    if(squares.length === 0){
      dispatch(
        { 
          type: 'board/newBoard',
          rows: 25,
          columns: 25
        }
      )
      dispatch(
        {
          type: "board/difficulty",
          difficulty: "hard"
        }
      )
    }
  }

  return(
    <div>
      <p>Choose your difficulty</p>
      <button 
        onClick={handleClickEasy}
      >Easy</button>
      <button 
        onClick={handleClickMedium}
      >Medium</button>
      <button 
        onClick={handleClickHard}
      >Hard</button>
      <p>Please find the following words in the grid below:</p>
    </div>
  )

  };

  export default Instructions