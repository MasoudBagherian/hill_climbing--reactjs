// import { useContext } from "react";
// import {
//   findHeuristicById,
//   PuzzleContext,
// } from "../contexts/puzzleContext/PuzzleContextProvider";
import Puzzle from "./Puzzle";
import PuzzleCaption from "./PuzzleCaption";

function PuzzelState({ puzzleNums, captionName, captionValue }) {
  // const { nums, heuristicId } = useContext(PuzzleContext);
  // const { name, heuristic } = findHeuristicById(heuristicId);
  return (
    <div className="flex flex-col">
      <Puzzle nums={puzzleNums} />
      <PuzzleCaption name={captionName} value={captionValue} />
    </div>
  );
}

export default PuzzelState;
