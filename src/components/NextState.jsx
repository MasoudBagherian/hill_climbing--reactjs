import { useContext, useEffect, useState } from "react";
import {
  findHeuristicById,
  PuzzleContext,
} from "../contexts/puzzleContext/PuzzleContextProvider";
import HillClimbingStep from "./HillClimbingStep";
import PuzzleState from "./PuzzleState";

function NextState({ nums, hId }) {
  const { setNums, heuristicId } = useContext(PuzzleContext);
  const [isEnded, setIsEnded] = useState(false);
  const { heuristic, name } = findHeuristicById(hId);
  useEffect(() => {
    if (nums.length === 0) {
      setIsEnded(true);
    }
  }, []);

  return (
    <>
      {isEnded ? (
        <p>problem solved</p>
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
