import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NeighborList from "../components/NeighborList";
import NextState from "../components/NextState";
import PuzzleState from "../components/PuzzleState";
import {
  findHeuristicById,
  PuzzleContext,
} from "../contexts/puzzleContext/PuzzleContextProvider";
import ButtonPrimary from "../ui/ButtonPrimary";
import { getTheNextState, mkNeighbors } from "../util/stateFunctions";

function HillClimbing() {
  const [isShowNeighbors, setIsShowNeighbors] = useState(false);
  const [isShowNextState, setIsShowNextState] = useState(false);
  const navigate = useNavigate();
  const { nums, resetNums, setHeuristicId, heuristicId } =
    useContext(PuzzleContext);
  const { name, heuristic } = findHeuristicById(heuristicId);
  function reset() {
    resetNums();
    setHeuristicId(1);
    navigate("/");
  }
  useEffect(() => {}, [nums]);
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
      {/* beginning of loop?? */}

      <ButtonPrimary
        text={isShowNeighbors ? "neighbors list" : "create neighbors"}
        handleClick={() => setIsShowNeighbors(true)}
      />

      {isShowNeighbors ? <NeighborList neighbors={mkNeighbors(nums)} /> : null}
      {isShowNeighbors ? (
        <ButtonPrimary
          text="show the best neighbor"
          handleClick={() => setIsShowNextState(true)}
        />
      ) : null}
      {isShowNextState ? (
        <NextState
          nums={getTheNextState(nums, heuristicId)}
          hId={heuristicId}
        />
      ) : null}
      {/* ending of loop?? */}
    </div>
  );
}

export default HillClimbing;
