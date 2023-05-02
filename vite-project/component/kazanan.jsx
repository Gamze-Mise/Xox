export default function kazananKontrol(cells) {
  const winnerIndexs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (cells.filter((c) => c == null).length === 0) {
    return "Berabere";
  }

  return winnerIndexs.find(([a, b, c]) => {
    return cells[a] != null && cells[a] == cells[b] && cells[b] == cells[c];
  });
}
