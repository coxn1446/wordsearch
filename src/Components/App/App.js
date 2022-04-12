import './App.css';
import Board from "./Board/Board"
import Instructions from "./Instructions/Instructions"
import Controls from "./Controls/Controls"

function App() {

  return (
    <div>
      <Instructions key={2345}></Instructions>
      <Board key={3456}></Board>
      <Controls key={4567}></Controls>
    </div>
  );
}

export default App;
