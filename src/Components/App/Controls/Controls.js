import React from 'react';
import {useDispatch} from "react-redux"

function Controls(){
    const dispatch = useDispatch();
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
        <div>
            <button onClick={handleClickTryAgain}>Reset</button>
            <button onClick={handleClickCheckAnswers}>Check Answers</button>
        </div>
    )
  };

  export default Controls