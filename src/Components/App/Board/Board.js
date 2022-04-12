import React from 'react';
import SquareRow from './SquareRow/SquareRow';
import {useSelector} from "react-redux"
import {selectSquares} from "../../../Features/boardSlice"

function Board(){
    const squares = useSelector(selectSquares);

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
        <div key={5678}>
            {squareRows}
        </div>
    )
  };

  export default Board