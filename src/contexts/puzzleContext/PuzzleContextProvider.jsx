import { h1, h2 } from "../../util/heuristics";
import { createContext, useState } from "react";

export const PuzzleContext = createContext({
  nums: [],
  setNums: () => {},
  addNum: () => {},
  deleteNum: () => {},
  isPuzzleFull: () => {},
  setHeuristicId: () => {},
  heuristicId: 1,
  resetNums: () => {},
});
export const hInfo = [
  {
    id: 1,
    heuristic: h1,
    title: "h1 function",
    name: "h1",
    description: "The number of cells that are not in correct position.",
  },
  {
    id: 2,
    heuristic: h2,
    title: "h2 function",
    name: "h2",
    description:
      "The sum of the distances of each cell from it's correct position (Manhattan distance).",
  },
];
export function findHeuristicById(id) {
  return hInfo.find((item) => item.id === id);
}
function PuzzleContextProvider({ children }) {
  const [nums, setNums] = useState(Array(9).fill(null));
  const [heuristicId, setHeuristicId] = useState(1);

  function resetNums() {
    setNums(Array(9).fill(null));
  }
  function addNum(num, index) {
    const prevNums = [...nums];
    const currentNums = prevNums.map((item, idx) =>
      idx === index ? num : item
    );
    setNums(currentNums);
  }
  function deleteNum(index) {
    const prevNums = [...nums];
    const currentNums = prevNums.map((item, idx) =>
      idx === index ? null : item
    );
    setNums(currentNums);
  }
  function isPuzzleFull() {
    return nums.every((item) => item !== null);
  }
  return (
    <PuzzleContext.Provider
      value={{
        nums,
        setNums,
        addNum,
        deleteNum,
        isPuzzleFull,
        resetNums,
        heuristicId,
        setHeuristicId,
      }}
    >
      {children}
    </PuzzleContext.Provider>
  );
}

export default PuzzleContextProvider;
