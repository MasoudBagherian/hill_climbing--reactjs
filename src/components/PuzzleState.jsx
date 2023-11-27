import Puzzle from "./Puzzle";
import PuzzleCaption from "./PuzzleCaption";

function PuzzelState({ puzzleNums, captionName, captionValue }) {
  return (
    <div className="flex flex-col">
      <Puzzle nums={puzzleNums} />
      <PuzzleCaption name={captionName} value={captionValue} />
    </div>
  );
}

export default PuzzelState;
