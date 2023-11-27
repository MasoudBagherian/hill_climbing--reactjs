/**
 *  goal state:
 *  1 2 3
 *  4 5 6
 *  7 8 0
 */
export const goalState = [1, 2, 3, 4, 5, 6, 7, 8, 0];
export function findPosition(puzzle, number) {
  const idx = puzzle.findIndex((item) => item === number);
  return { row: Math.floor(idx / 3) + 1, col: (idx % 3) + 1 };
}
