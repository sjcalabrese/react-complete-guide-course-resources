import Player from "./components/players/Player";
import GameBoard from "./components/gameBoard/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initalName="Player 1" symbol="X" />
          <Player initalName="Player2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
