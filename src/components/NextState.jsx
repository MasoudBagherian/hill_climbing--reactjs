import { useContext, useEffect, useState } from "react";
import {
  findHeuristicById,
  PuzzleContext,
} from "../contexts/puzzleContext/PuzzleContextProvider";
import FinalReport from "./FinalReport";
import HillClimbingStep from "./HillClimbingStep";
import PuzzleState from "./PuzzleState";

function NextState({ nums, currentState, hId }) {
  const { setNums, heuristicId } = useContext(PuzzleContext);
  const [isEnded, setIsEnded] = useState(false);
  const { heuristic, name } = findHeuristicById(hId);
  useEffect(() => {
    // heuristic of neighbors is not lower than current state(local optimal state)
    if (nums.length === 0 || heuristic(nums) === 0) {
      setIsEnded(true);
    }
  }, []);

  return (
    <>
      {isEnded ? (
        <FinalReport finalState={nums} currentState={currentState} hId={hId} />
      ) : (
        <>
          <div className="table w-[80%] max-w-[30rem] mx-auto">
            <PuzzleState
              puzzleNums={nums}
              captionName={name}
              captionValue={heuristic(nums)}
            />
          </div>
          <HillClimbingStep nums={nums} heuristicId={heuristicId} />
        </>
      )}
    </>
  );
}

export default NextState;
