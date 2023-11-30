import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputPuzzle from "../components/InputPuzzle";
import HeuristicSelection from "../components/HeuristicSelection";
import { BsFillPatchQuestionFill as GuideIcon } from "react-icons/bs";
import { PuzzleContext } from "../contexts/puzzleContext/PuzzleContextProvider";

function Intro() {
  const { resetNums, setHeuristicId, isPuzzleFull } = useContext(PuzzleContext);
  const navigate = useNavigate();
  function clickToStart(e) {
    e.preventDefault();
    navigate("/hill-climbing");
  }
  useEffect(() => {
    resetNums();
    setHeuristicId(1);
  }, []);
  return (
    <>
      <div className="flex justify-end mt-[3rem] mb-[1rem]">
        <button
          className="flex w-[40px] h-[40px]"
          onClick={() => navigate("/guidance")}
        >
          <GuideIcon className="w-full h-full fill-secondary" />
        </button>
      </div>
      <h2 className="p-[1rem] mb-[1rem]  text-center text-[2.4rem]">
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
