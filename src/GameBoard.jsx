import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [turn, setturn] = useState(false);

  const handleSelect = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard];
      updatedBoard[rowIndex] = [...updatedBoard[rowIndex]];
      if (!turn) {
        updatedBoard[rowIndex][colIndex] = "X";
        setturn(true);
      } else {
        updatedBoard[rowIndex][colIndex] = "O";
        setturn(false);
      }
      // Update the specific cell
      return updatedBoard;
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelect(rowIndex, colIndex)}>
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
