import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders the game title and initial turn", () => {
    render(<App />);

    expect(screen.getByText("Classic Tic-Tac-Toe")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Turn: X");
  });

  it("alternates turns between X and O", async () => {
    const user = userEvent.setup();
    render(<App />);

    const cells = screen.getAllByRole("button", { name: "Empty cell" });

    await user.click(cells[0]);
    expect(screen.getByRole("status")).toHaveTextContent("Turn: O");
    expect(screen.getByRole("button", { name: "X mark" })).toBeInTheDocument();

    await user.click(cells[1]);
    expect(screen.getByRole("status")).toHaveTextContent("Turn: X");
    expect(screen.getByRole("button", { name: "O mark" })).toBeInTheDocument();
  });

  it("declares a winner and updates the score", async () => {
    const user = userEvent.setup();
    render(<App />);

    const cells = screen.getAllByRole("button", { name: "Empty cell" });

    await user.click(cells[0]); // X
    await user.click(cells[3]); // O
    await user.click(cells[1]); // X
    await user.click(cells[4]); // O
    await user.click(cells[2]); // X wins top row

    expect(screen.getByRole("status")).toHaveTextContent("Winner: X");
    expect(screen.getByText("1", { selector: ".scoreboard__item--x .scoreboard__value" })).toBeInTheDocument();
  });

  it("resets the board with New Game", async () => {
    const user = userEvent.setup();
    render(<App />);

    const cells = screen.getAllByRole("button", { name: "Empty cell" });
    await user.click(cells[0]);

    await user.click(screen.getByRole("button", { name: "New Game" }));

    expect(screen.getByRole("status")).toHaveTextContent("Turn: X");
    expect(screen.getAllByRole("button", { name: "Empty cell" })).toHaveLength(9);
  });

  it("resets scores with Reset Scores", async () => {
    const user = userEvent.setup();
    render(<App />);

    const cells = screen.getAllByRole("button", { name: "Empty cell" });

    await user.click(cells[0]);
    await user.click(cells[3]);
    await user.click(cells[1]);
    await user.click(cells[4]);
    await user.click(cells[2]);

    await user.click(screen.getByRole("button", { name: "Reset Scores" }));

    expect(screen.getByText("0", { selector: ".scoreboard__item--x .scoreboard__value" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Turn: X");
  });
});
