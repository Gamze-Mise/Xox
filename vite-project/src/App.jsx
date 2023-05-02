import { useState, useEffect } from "react";
import "./App.css";
import kazananKontrol from "../component/kazanan";
import Cell from "../component/cell";

function App() {
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const handleClick = (index) => {
    if (!(winner || cells[index])) {
      const newCell = [...cells];
      newCell[index] = player;
      setCells(newCell);

      let kazanan = kazananKontrol(newCell);

      if (kazanan === "Berabere") {
        setWinner("Berabere");
      } else if (kazanan) {
        setWinner(player);
      } else {
        setPlayer(player == "X" ? "O" : "X");
      }
    }
  };
  useEffect(() => {}, [winner]);

  const handleRestart = () => {
    setCells(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
    setFinish(false);
  };
  return (
    <div className="Xox">
      <h1>XOX</h1>
      <h3> Sıradaki Oyuncu = {player}</h3>
      <div>
        <table className="TableXox">
          {cells.map((_, i) => {
            if (i % 3 === 0) {
              return (
                <tr>
                  <Cell
                    value={cells[i]}
                    onClick={() => {
                      handleClick(i);
                    }}
                  />
                  <Cell
                    value={cells[i + 1]}
                    onClick={() => {
                      handleClick(i + 1);
                    }}
                  />
                  <Cell
                    value={cells[i + 2]}
                    onClick={() => {
                      handleClick(i + 2);
                    }}
                  />
                </tr>
              );
            }
          })}
        </table>
      </div>
      <h2>
        {winner && winner === "Berabere"
          ? "Berabere"
          : winner != null
          ? "Kazanan Oyuncu " + winner
          : null}
      </h2>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default App;
