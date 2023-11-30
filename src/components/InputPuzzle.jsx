import { useContext, useEffect } from "react";
import { PuzzleContext } from "../contexts/puzzleContext/PuzzleContextProvider";
import InputCell from "./InputCell";

function InputPuzzle() {
  const { nums } = useContext(PuzzleContext);
  // console.log({ nums });
  const rows = [nums.slice(0, 3), nums.slice(3, 6), nums.slice(6, 9)];

  return (
    <div className="p-[10px] w-full  rounded-[3px] bg-primary">
      <div className="flex w-full flex-col">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="flex border-b-[2px] border-b-primary  last:border-b-0 
            "
          >
            {row.map((col, colIdx) => (
              <InputCell key={colIdx} index={rowIdx * 3 + colIdx} nums={nums} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputPuzzle;
