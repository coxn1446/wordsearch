import React from 'react';
import SquareRow from './SquareRow/SquareRow';

function Board(props){
    const rows = 15;
    const squareRows = []
    for (let row = 0; row < rows; row++) {
        squareRows.push(
        <SquareRow
            key={(row*1000+1000).toString()}
            squareRowsKey={row}
            words={props.words}
            wordKeys={props.wordKeys}
        ></SquareRow>,<br></br>)
    }
    return (
    squareRows
    )
  };

  export default Board