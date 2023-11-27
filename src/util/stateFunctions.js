import { findHeuristicById } from "../contexts/puzzleContext/PuzzleContextProvider";
import { findPosition } from "./global";

function findEmptyCell(puzzle) {
  return findPosition(puzzle, 0);
}
function swap(puzzle, idx1, idx2) {
  const puzzleCpy = [...puzzle];
  let temp;
  temp = puzzleCpy[idx1];
  puzzleCpy[idx1] = puzzleCpy[idx2];
  puzzleCpy[idx2] = temp;
  return puzzleCpy;
}
export function mkNeighbors(currentState) {
  const neighbors = [];
  const emptyIdx = currentState.findIndex((item) => item === 0);
  const { row: emptyRow, col: emptyCol } = findEmptyCell(currentState);
  for (let i = 0; i < currentState.length; i++) {
    const { row, col } = findPosition(currentState, currentState[i]);
    if (
      (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
      (col === emptyCol && Math.abs(row - emptyRow) === 1)
    ) {
      neighbors.push(swap(currentState, emptyIdx, i));
    }
  }
  return neighbors;
}
export function getTheBestNeighbor(currentState, heuristicId) {
  const neighbors = mkNeighbors(currentState);
  const { heuristic } = findHeuristicById(heuristicId);
  const heuristicValues = neighbors.map((item) => heuristic(item));
  const minHeuristic = Math.min(...heuristicValues);
  const minHeuristicIdx = heuristicValues.findIndex(
    (item) => item === minHeuristic
  );
  const bestNeighbor = neighbors[minHeuristicIdx];
  return bestNeighbor;
}
export function getTheNextState(currentState, heuristicId) {
  const { heuristic } = findHeuristicById(heuristicId);
  const bestNeighbor = getTheBestNeighbor(currentState, heuristicId);
  if (heuristic(bestNeighbor) < heuristic(currentState)) {
    return bestNeighbor;
  } else {
    return [];
  }
}
