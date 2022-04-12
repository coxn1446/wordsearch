import React from 'react';
import Square from "./Square/Square"
import {useSelector} from "react-redux"
import {selectSquares} from "../../../../Features/boardSlice"

function SquareRow(props){
    const squares = useSelector(selectSquares);
    const columns = Math.sqrt(squares.length);
    const squareColumns = []

for (let column = 0; column < columns; column++) {
        squareColumns.push(
            <Square
                key={squares[(column+(props.squareRowsKey*columns))].key}
                squareKey={squares[column+(props.squareRowsKey*columns)].key}
                letter={squares[column+(props.squareRowsKey*columns)].letter}
            ></Square>
        )
    }
  return (squareColumns)
};

export default SquareRow;