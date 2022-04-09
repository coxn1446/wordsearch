import './App.css';
import Board from "./Board/Board"
import Instructions from "./Instructions/Instructions"
import Controls from "./Controls/Controls"

function App() {
  let words = ["BITCOIN","MACBOOK","COLDCARD"];
  let wordKeys =
  [
    [0,1,2,3,4,5,6],
    [16,31,46,61,76,91,106],
    [62,63,64,65,66,67,68,69]
  ]

  return (
    <div>
      <Instructions
        words={words}
      ></Instructions>
      <Board 
        words={words}
        wordKeys={wordKeys}
      ></Board>
      <Controls></Controls>
    </div>
  );
}

export default App;
