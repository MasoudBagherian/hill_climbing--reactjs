import { useContext } from "react";
import PuzzleState from "./PuzzleState";
import {
  findHeuristicById,
  PuzzleContext,
} from "../contexts/puzzleContext/PuzzleContextProvider";

function NeighborList({ neighbors }) {
  const { heuristicId } = useContext(PuzzleContext);
  const { name, heuristic } = findHeuristicById(heuristicId);
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-wrap mx-[-1rem]">
        {neighbors.map((item, index) => {
          return (
            // item wrapper
            <div
              key={index}
              className="p-[1rem] w-[25%] lg:w-[33.33%] md:w-[50%] sm:w-full"
            >
              <PuzzleState
                puzzleNums={item}
                captionName={name}
                captionValue={heuristic(item)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NeighborList;
