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

    return (
        <div>
            <button onClick={handleClickTryAgain}>Try Again?</button>
            <button>Check Answers</button>
        </div>
    )
  };

  export default Controls