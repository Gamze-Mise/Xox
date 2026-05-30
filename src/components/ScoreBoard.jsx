export default function ScoreBoard({ scores }) {
  return (
    <div className="scoreboard">
      <div className="scoreboard__item scoreboard__item--x">
        <span className="scoreboard__label">X</span>
        <span className="scoreboard__value">{scores.X}</span>
      </div>
      <div className="scoreboard__item scoreboard__item--draw">
        <span className="scoreboard__label">Draw</span>
        <span className="scoreboard__value">{scores.draw}</span>
      </div>
      <div className="scoreboard__item scoreboard__item--o">
        <span className="scoreboard__label">O</span>
        <span className="scoreboard__value">{scores.O}</span>
      </div>
    </div>
  );
}
