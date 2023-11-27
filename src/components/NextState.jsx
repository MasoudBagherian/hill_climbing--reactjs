import { useContext, useEffect, useState } from "react";
import {
  findHeuristicById,
  PuzzleContext,
} from "../contexts/puzzleContext/PuzzleContextProvider";
import FinalReport from "./FinalReport";
import HillClimbingStep from "./HillClimbingStep";
import PuzzleState from "./PuzzleState";

function NextState({ nextState, currentState, hId }) {
  const { heuristicId } = useContext(PuzzleContext);
  const [isEnded, setIsEnded] = useState(false);
  const { heuristic, name } = findHeuristicById(hId);
  useEffect(() => {
    // heuristic of neighbors is not lower than current state(local optimal state)
    if (nextState.length === 0 || heuristic(nextState) === 0) {
      setIsEnded(true);
    }
  }, []);

  return (
    <>
      {isEnded ? (
        <FinalReport
          finalState={nextState}
          currentState={currentState}
          hId={hId}
        />
      ) : (
        <>
          <div className="table w-[80%] max-w-[30rem] mx-auto">
            <PuzzleState
              puzzleNums={nextState}
              captionName={name}
              captionValue={heuristic(nextState)}
            />
          </div>
          <HillClimbingStep nums={nextState} heuristicId={heuristicId} />
        </>
      )}
    </>
  );
}

export default NextState;
