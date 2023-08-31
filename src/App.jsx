import React, { useState } from "react";
import { Fragment } from "react";
import Board from "./Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


{/*       <div className="board-row">
        {squares.slice(0, 3).map((object, i) => (
          <Square
            obj={object}
            value={squares.slice(0, 3)[i]}
            onSquareClick={() => handleClick(i)}
            key={i}
          />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((object, i) => (
          <Square
            obj={object}
            value={squares.slice(3, 6)[i]}
            onSquareClick={() => handleClick(i + 3)}
            key={i}
          />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6).map((object, i) => (
          <Square
            obj={object}
            value={squares.slice(6)[i]}
            onSquareClick={() => handleClick(i + 6)}
            key={i}
          />
        ))}
      </div> */}
      {/*  <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div> */}