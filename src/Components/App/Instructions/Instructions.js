import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {selectSquares, selectWords} from "../../../Features/boardSlice"


function Instructions(){
  const dispatch = useDispatch();
  const squares = useSelector(selectSquares);
  const words = useSelector(selectWords)

  function handleClickEasy(e){
    e.preventDefault();
    if(squares.length === 0){
      dispatch(
        {
          type: "board/difficulty",
          difficulty: "easy"
        }
      )
      dispatch(
        { 
          type: 'board/newBoard',
          rows: 6,
          columns: 6
        }
      )
    }
  }

  function handleClickMedium(e){
    e.preventDefault();
    if(squares.length ===0){
      dispatch(
        {
          type: "board/difficulty",
          difficulty: "medium"
        }
      )
      dispatch(
        { 
          type: 'board/newBoard',
          rows: 15,
          columns: 15
        }
      )
    }
}

  function handleClickHard(e){
    e.preventDefault();
    if(squares.length === 0){
      dispatch(
        {
          type: "board/difficulty",
          difficulty: "hard"
        }
      )
      dispatch(
        { 
          type: 'board/newBoard',
          rows: 25,
          columns: 25
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
      <p>{words.join('  |  ')}</p>
    </div>
  )

  };

  export default Instructions