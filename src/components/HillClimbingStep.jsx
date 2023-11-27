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
          currentState={nums}
          hId={heuristicId}
        />
      ) : null}
    </>
  );
}

export default HillClimbingStep;
