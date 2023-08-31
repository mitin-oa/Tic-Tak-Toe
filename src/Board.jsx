import { Fragment } from "react";
import React from "react";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      onPlay(nextSquares);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
    const rows = [0, 3, 6];
  
    return (
      <Fragment>
        <div className="status">{status}</div>
        <div>
          {rows.map((row, index) => (
            <div key={index}>
              {
                <div className="board-row">
                  {squares.slice(row, row + 3).map((object, i) => (
                    <Square
                      obj={object}
                      value={squares.slice(row, row + 3)[i]}
                      onSquareClick={() => handleClick(i + row)}
                      key={i}
                    />
                  ))}
                </div>
              }
            </div>
          ))}
        </div>
      </Fragment>
    );
  }

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }