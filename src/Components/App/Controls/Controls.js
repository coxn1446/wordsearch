import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {selectDifficulty} from "../../../Features/boardSlice"
import './Controls.css';


function Controls(){
  const dispatch = useDispatch();

  const difficulty = useSelector(selectDifficulty);

  let controlsClass = "controls"

  if (difficulty !== "") {
    controlsClass = "controlsSelected"
  } else if (difficulty === "") {
    controlsClass = "controls"

  }

    function handleClickTryAgain(e){
        e.preventDefault();
        dispatch({
          type: 'board/resetBoard',
        })
      }

    function handleClickCheckAnswers(e){
    e.preventDefault();
    dispatch({
        type: 'board/checkAnswers',
    })
    }

    return (
        <div className={controlsClass}>
            <button
              onClick={handleClickTryAgain}
              className={"button"}
            >Reset</button>
            <button
              onClick={handleClickCheckAnswers}
              className={"button"}
            >Check</button>
        </div>
    )
  };

  export default Controls