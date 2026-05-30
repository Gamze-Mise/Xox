import { describe, it, expect } from "vitest";
import { checkWinner } from "./checkWinner";

describe("checkWinner", () => {
  it("returns no winner on an empty board", () => {
    expect(checkWinner(Array(9).fill(null))).toEqual({
      winner: null,
      line: null,
    });
  });

  it("returns no winner when the game is still in progress", () => {
    const cells = ["X", "O", null, null, "X", null, null, null, null];
    expect(checkWinner(cells)).toEqual({ winner: null, line: null });
  });

  it("detects a row win", () => {
    const cells = ["X", "X", "X", "O", "O", null, null, null, null];
    expect(checkWinner(cells)).toEqual({ winner: "X", line: [0, 1, 2] });
  });

  it("detects a column win", () => {
    const cells = ["O", "X", null, "O", "X", null, "O", null, null];
    expect(checkWinner(cells)).toEqual({ winner: "O", line: [0, 3, 6] });
  });

  it("detects a diagonal win", () => {
    const cells = ["X", "O", "O", "O", "X", null, null, null, "X"];
    expect(checkWinner(cells)).toEqual({ winner: "X", line: [0, 4, 8] });
  });

  it("detects a draw", () => {
    const cells = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    expect(checkWinner(cells)).toEqual({ winner: "draw", line: null });
  });

  it("prioritizes a win over a draw on a full board", () => {
    const cells = ["X", "O", "X", "O", "X", "O", "O", "X", "X"];
    expect(checkWinner(cells)).toEqual({ winner: "X", line: [0, 4, 8] });
  });
});
