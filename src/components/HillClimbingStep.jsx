import { useState } from "react";
import ButtonPrimary from "../ui/ButtonPrimary";
import { getTheNextState, mkNeighbors } from "../util/stateFunctions";
import NeighborList from "./NeighborList";
import NextState from "./NextState";

function HillClimbingStep({ nums, heuristicId }) {
  const [isShowNeighbors, setIsShowNeighbors] = useState(false);
  const [isShowNextState, setIsShowNextState] = useState(false);
  return (
    <>
      <div className="bg-primary h-[4px] relative rounded-[100px] my-[4rem]">
        <ButtonPrimary
          className="absolute z-[2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          text={isShowNeighbors ? "neighbors list" : "create neighbors"}
          handleClick={() => setIsShowNeighbors(true)}
        />
      </div>

      {isShowNeighbors ? <NeighborList neighbors={mkNeighbors(nums)} /> : null}
      {isShowNeighbors ? (
        <div className="bg-primary h-[4px] relative rounded-[100px] my-[4rem]">
          <ButtonPrimary
            className="absolute z-[2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            text={
              isShowNextState ? "the best neighbor" : "show the best neighbor"
            }
            handleClick={() => setIsShowNextState(true)}
          />
        </div>
      ) : null}
      {isShowNextState ? (
        <NextState
          nums={getTheNextState(nums, heuristicId)}
          currentState={nums}
          hId={heuristicId}
        />
      ) : null}
    </>
  );
}

export default HillClimbingStep;
