import { findPosition, goalState } from "./global";
import { getTheBestNeighbor } from "./stateFunctions";

/**
 * return number of cells that are not in the right position
 */
export function h1(puzzle) {
  let h = 0;
  for (let i = 0; i < puzzle.length; i++) {
    if (puzzle[i] !== goalState[i]) {
      h++;
    }
  }
  return h;
}
/**
 * retrun sum of cell distances from their right position
 */
export function h2(puzzle) {
  let h = 0;
  for (let i = 0; i < puzzle.length; i++) {
    const [rowIdx, colIdx] = [Math.floor(i / 3) + 1, (i % 3) + 1];
    const { row: goalRowIdx, col: goalColIdx } = findPosition(
      goalState,
      puzzle[i]
    );
    h = h + Math.abs(rowIdx - goalRowIdx) + Math.abs(colIdx - goalColIdx);
  }
  return h;
}
