import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HillClimbingStep from "../components/HillClimbingStep";

import PuzzleState from "../components/PuzzleState";
import {
  findHeuristicById,
  PuzzleContext,
} from "../contexts/puzzleContext/PuzzleContextProvider";

function HillClimbing() {
  const navigate = useNavigate();
  const { nums, resetNums, setHeuristicId, heuristicId } =
    useContext(PuzzleContext);
  const [isEnded, setIsEnded] = useState(false);
  const { name, heuristic } = findHeuristicById(heuristicId);
  function reset() {
    resetNums();
    setHeuristicId(1);
    navigate("/");
  }
  useEffect(() => {
    if (heuristic(nums) === 0) {
      setIsEnded(true);
    } else {
      setIsEnded(false);
    }
  }, []);
  return (
    <div className="mt-[3rem]">
      <button
        className="bg-primary mb-[3rem] text-white py-[6px] px-[8px] rounded-[100px]"
        onClick={reset}
      >
        reset
      </button>
      <div className="table w-[80%] max-w-[30rem] mx-auto">
        <PuzzleState
          puzzleNums={nums}
          captionName={name}
          captionValue={heuristic(nums)}
        />
      </div>
      {isEnded ? (
        <div>
          <p className="text-center text-[2rem]">
            This state is the global answer so there is nothing to do:)))
          </p>
        </div>
      ) : (
        <HillClimbingStep nums={nums} heuristicId={heuristicId} />
      )}
    </div>
  );
}

export default HillClimbing;
