import TicImage from "../public/game-logo.png";
import { useState } from "react";
import Player from "./Player";
import GameBoard from "./GameBoard";
import { WINNING_COMBINATIONS } from "./Winner";
import GameOver from "./GameOver";
function App() {
  let winner = null;
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  let gameBoard = initialGameBoard;
  for (const combination of WINNING_COMBINATIONS) {
    let first = gameBoard[combination[0].row][combination[0].col];
    let second = gameBoard[combination[1].row][combination[1].col];
    let third = gameBoard[combination[2].row][combination[2].col];
    if (first && first == second && first == third) {
      winner = first;
    }
  }
  return (
    <div className="deepak">
      <img src={TicImage} className="TicImage" alt="tic tac toe" />
      <h1 className="htic">Tic-Tac-Toe</h1>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="deepak" symbol="X"></Player>

            <Player name="prakash" symbol="O"></Player>
          </ol>
          {winner && <GameOver winner={winner} />}
          <GameBoard />
        </div>
      </main>
    </div>
  );
}

export default App;
