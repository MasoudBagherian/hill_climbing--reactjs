import { useContext } from "react";
import {
  hInfo,
  PuzzleContext,
} from "../contexts/puzzleContext/PuzzleContextProvider";

function HeuristicSelection() {
  const { setHeuristicId, heuristicId } = useContext(PuzzleContext);
  function selectHeuristic(id) {
    setHeuristicId(id);
  }
  return (
    <div className="flex flex-col">
      <h3 className="mt-[2rem] mb-[1rem]">choose a heuristic function</h3>
      {hInfo.map((item) => (
        <div
          key={item.id}
          onClick={selectHeuristic.bind(null, item.id)}
          className="flex items-center cursor-pointer self-start mb-[8px] last:mb-0 select-none"
        >
          <span
            className={`table w-[20px] h-[20px] border-[2px] border-primary mr-[1rem] rounded-[50%] ${
              heuristicId === item.id ? "bg-primary" : ""
            } `}
          ></span>
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default HeuristicSelection;
