import React, { useEffect, useState } from "react";
import { findHeuristicById } from "../contexts/puzzleContext/PuzzleContextProvider";
import PuzzelState from "./PuzzleState";

function FinalReport({ finalState, currentState, hId }) {
  const { heuristic, name } = findHeuristicById(hId);
  const [isSolved, setIsSolved] = useState(false);
  useEffect(() => {
    // we got the local answer(local answer is currentState)
    if (finalState.length === 0) {
      setIsSolved(false);
    }
    // we got the global answer
    else if (heuristic(currentState) === 0) {
      setIsSolved(true);
    }
  }, []);
  return (
    <>
      {isSolved ? (
        <div className="mb-[3rem]">
          <p className="mb-[3rem]">Congrats! you solve the problem</p>
          <div className="table w-[80%] max-w-[30rem] mx-auto">
            <PuzzelState
              puzzleNums={currentState}
              captionName={name}
              captionValue={heuristic(currentState)}
            />
          </div>
        </div>
      ) : (
        <div className="mb-[3rem]">
          <p className="mb-[3rem]">
            All neighbor state have lower heuristic value than the last current
            state. So we consider this state as the local result.
          </p>
          <div className="table w-[80%] max-w-[30rem] mx-auto">
            <PuzzelState
              puzzleNums={currentState}
              captionName={name}
              captionValue={heuristic(currentState)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default FinalReport;
