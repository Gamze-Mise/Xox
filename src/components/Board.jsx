import Cell from "./Cell";

export default function Board({ cells, winningLine, onCellClick, gameOver }) {
  return (
    <div className="board" role="grid" aria-label="Tic-tac-toe board">
      {cells.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => onCellClick(index)}
          isWinning={winningLine?.includes(index)}
          disabled={gameOver}
        />
      ))}
    </div>
  );
}
