import { useContext } from "react";
import InputPuzzle from "../components/InputPuzzle";
import { PuzzleContext } from "../contexts/puzzleContext/PuzzleContextProvider";
import { useNavigate } from "react-router-dom";
import HeuristicSelection from "../components/HeuristicSelection";
function Intro() {
  const { isPuzzleFull } = useContext(PuzzleContext);
  const navigate = useNavigate();
  function clickToStart(e) {
    e.preventDefault();
    navigate("/hill-climbing");
  }
  return (
    <>
      <h2 className="p-[1rem] mb-[1rem] mt-[3rem] text-center text-[2.4rem]">
        Please fill in the puzzle with numbers 0 to 8
      </h2>
      <div className="table w-[80%] max-w-[30rem] mx-auto">
        <form className="flex flex-col" onSubmit={clickToStart}>
          <InputPuzzle />
          {/* heuristic selection goes here */}
          <HeuristicSelection />
          <button
            disabled={!isPuzzleFull()}
            className="bg-primary my-[2rem] py-[1rem] px-[1.4rem] rounded-[5px] text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            get started?
          </button>
        </form>
      </div>
    </>
  );
}

export default Intro;
