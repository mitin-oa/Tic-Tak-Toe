import { Fragment } from "react";
import React from "react";
import Square from "./Square";
import CalculateWinner from "./CalculateWinner";

export default function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
      if (squares[i] || CalculateWinner(squares)) {
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
  
    const winner = CalculateWinner(squares);
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