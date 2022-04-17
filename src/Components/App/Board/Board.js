import React from 'react';
import SquareRow from './SquareRow/SquareRow';
import {useSelector} from "react-redux"
import {selectSquares, selectDifficulty} from "../../../Features/boardSlice"
import "./Board.css"

function Board(){
    const squares = useSelector(selectSquares);
    const difficulty = useSelector(selectDifficulty);

    let boardClass = "board"

    if (difficulty === "easy") {
        boardClass = "boardEasy"
      } else if (difficulty === "medium") {
        boardClass = "boardMedium"
      } else if (difficulty === "hard") {
        boardClass = "boardHard"
      } else if (difficulty === "") {
        boardClass = "board"
      }



    const rows = Math.sqrt(squares.length);
    const squareRows = [];
    for (let row = 0; row < rows; row++) {
        squareRows.push(
        <SquareRow
            key={(row*1000+1000).toString()}
            squareRowsKey={row}
        ></SquareRow>,<br></br>)
    }
    return (
        <div
            key={5678}
            className={boardClass}
        >
            {squareRows}
        </div>
    )
  };

  export default Board