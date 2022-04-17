import React from 'react';
import './Instructions.css';
import {useDispatch, useSelector} from "react-redux"
import {selectSquares, selectWords, selectDifficulty} from "../../../Features/boardSlice"


function Instructions(){
  const dispatch = useDispatch();
  const squares = useSelector(selectSquares);
  const words = useSelector(selectWords);
  const difficulty = useSelector(selectDifficulty);

  let buttonClass = "button"
  let buttonsClass = "buttons"
  let instructionsClass = "instructions"
  let difficultyInstructionsClass = "difficultyInstructions"

  if (difficulty !== "") {
    buttonClass = "buttonSelected"
    instructionsClass = "instructionsSelected"
    difficultyInstructionsClass = "difficultyInstructionsSelected"
    buttonsClass = "buttonsSelected"
  } else if (difficulty === "") {
    buttonClass = "button"
    instructionsClass = "instructions"
    difficultyInstructionsClass = "difficultyInstructions"
    buttonsClass = "buttons"
  }

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

  return(
    <div>
      <a style={{textAlign:"center"}} href={'https://coxnswebsite.surge.sh/'}><p>Back to my website</p></a>
      <p className={difficultyInstructionsClass}>Choose your difficulty</p>
      <div className={buttonsClass}>
        <button 
          onClick={handleClickEasy}
          className = {buttonClass}
        >Easy</button>
        <button 
          onClick={handleClickMedium}
          className = {buttonClass}
        >"Hard"</button>
      </div>
      <p className={instructionsClass}>Please find the following words in the grid below:</p>
      <br></br>
      <p className={instructionsClass}>{words.join('  |  ')}</p>
      <br></br>
    </div>
  )

  };

  export default Instructions