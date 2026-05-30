import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import { checkWinner } from "./utils/checkWinner";

const EMPTY_BOARD = Array(9).fill(null);

function App() {
  const [player, setPlayer] = useState("X");
  const [cells, setCells] = useState(EMPTY_BOARD);
  const [winningLine, setWinningLine] = useState(null);
  const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });

  const { winner } = checkWinner(cells);
  const gameOver = winner !== null;

  const statusMessage = (() => {
    if (winner === "draw") return "Draw!";
    if (winner) return `Winner: ${winner}`;
    return `Turn: ${player}`;
  })();

  const handleCellClick = (index) => {
    if (gameOver || cells[index]) return;

    const newCells = [...cells];
    newCells[index] = player;
    setCells(newCells);

    const result = checkWinner(newCells);

    if (result.winner === "draw") {
      setScores((prev) => ({ ...prev, draw: prev.draw + 1 }));
    } else if (result.winner) {
      setWinningLine(result.line);
      setScores((prev) => ({ ...prev, [result.winner]: prev[result.winner] + 1 }));
    } else {
      setPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  const handleRestart = () => {
    setCells(EMPTY_BOARD);
    setPlayer("X");
    setWinningLine(null);
  };

  const handleResetScores = () => {
    setScores({ X: 0, O: 0, draw: 0 });
    handleRestart();
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">
          <span className="app__title-x">X</span>
          <span className="app__title-o">O</span>
          <span className="app__title-x">X</span>
        </h1>
        <p className="app__subtitle">Classic Tic-Tac-Toe</p>
      </header>

      <ScoreBoard scores={scores} />

      <div
        className={`status ${gameOver ? "status--game-over" : ""} ${winner && winner !== "draw" ? `status--winner-${winner.toLowerCase()}` : ""}`}
        role="status"
        aria-live="polite"
      >
        {statusMessage}
      </div>

      <div className="board-area">
        <Board
          cells={cells}
          winningLine={winningLine}
          onCellClick={handleCellClick}
          gameOver={gameOver}
        />
      </div>

      <div className="actions">
        <button type="button" className="btn btn--primary" onClick={handleRestart}>
          New Game
        </button>
        <button type="button" className="btn btn--secondary" onClick={handleResetScores}>
          Reset Scores
        </button>
      </div>
    </div>
  );
}

export default App;
