import { useEffect, useState } from "react";
import "./style.css";

const Square = ({ content, onClick, index }) => {
  return (
    <div className="square" onClick={() => onClick(index)}>
      <div className="mark">{content}</div>
    </div>
  );
};

const TicTacToe = () => {
  const [gridContents, setGridContents] = useState(Array(9).fill(""));
  const [nextX, setNextX] = useState(true);
  const [winner, setWinner] = useState("");

  function fillSquare(index) {
    if (winner) return;
    let filled = true;
    setGridContents(
      gridContents.map((element, i) =>
        i === index
          ? element === ""
            ? nextX
              ? "x"
              : "o"
            : (function () {
                filled = false;
                return element;
              })()
          : element
      )
    );
    filled ? setNextX(!nextX) : null;
  }

  function endGame() {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let win = false;
    patterns.forEach(([a, b, c]) => {
      if (
        gridContents[a] &&
        gridContents[a] === gridContents[b] &&
        gridContents[a] === gridContents[c]
      )
        win = true;
    });
    return win;
    // return (
    //   (gridContents[0] === gridContents[1] &&
    //     gridContents[0] === gridContents[2] &&
    //     gridContents[0] !== "") ||
    //   (gridContents[3] === gridContents[4] &&
    //     gridContents[3] === gridContents[5] &&
    //     gridContents[3] !== "") ||
    //   (gridContents[6] === gridContents[7] &&
    //     gridContents[6] === gridContents[8] &&
    //     gridContents[6] !== "") ||
    //   (gridContents[0] === gridContents[3] &&
    //     gridContents[0] === gridContents[6] &&
    //     gridContents[0] !== "") ||
    //   (gridContents[1] === gridContents[4] &&
    //     gridContents[1] === gridContents[7] &&
    //     gridContents[1] !== "") ||
    //   (gridContents[2] === gridContents[5] &&
    //     gridContents[2] === gridContents[8] &&
    //     gridContents[2] !== "") ||
    //   (gridContents[0] === gridContents[4] &&
    //     gridContents[0] === gridContents[8] &&
    //     gridContents[0] !== "") ||
    //   (gridContents[2] === gridContents[4] &&
    //     gridContents[2] === gridContents[6] &&
    //     gridContents[2] !== "")
    // );
  }

  function resetGame() {
    setWinner(null);
    setGridContents(Array(9).fill(""));
  }

  useEffect(() => {
    endGame() ? setWinner(nextX ? "o" : "x") : null;
  }, [gridContents]);

  return (
    <div className="tictactoe-container">
      <div className="grid">
        {gridContents.map((square, index) => (
          <Square
            key={index}
            content={square}
            onClick={fillSquare}
            index={index}
          ></Square>
        ))}
      </div>
      {winner ? (
        <>
          <div className="results">Winner: {winner}</div>
          <button className="reset-button" onClick={resetGame}>
            Reset Game
          </button>
        </>
      ) : null}
    </div>
  );
};

export default TicTacToe;
