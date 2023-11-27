import React from "react";
import Puzzle from "../components/Puzzle";
import { FaHome as HomeIcon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { hInfo } from "../contexts/puzzleContext/PuzzleContextProvider";

function Guidance() {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="flex justify-end mt-[3rem] mb-[1rem]">
      </div> */}
      <div className="flex justify-between items-center">
        <h1 className="my-[2rem] text-[2rem] mr-[2rem]">8-puzzle problem</h1>
        <button
          className="flex w-[40px] h-[40px] shrink-0"
          onClick={() => navigate("/")}
        >
          <HomeIcon className="w-full h-full fill-secondary" />
        </button>
      </div>
      <p className="mb-[1rem]">
        You suppose that we have an initial State like the puzzle below
      </p>
      <div className="flex flex-col border-[1px] w-[50%] max-w-[20rem] mb-[1rem]">
        <Puzzle nums={[1, 3, 5, 2, 6, 7, 8, 0, 4]} />
      </div>
      <p>
        We can move empty cell and swap it with one of it's adjacent cells in
        each step. Our goal is to achive the goal state
      </p>
      <p className="mb-[1rem]">Goal state is the state below</p>
      <div className="flex flex-col border-[1px] w-[50%] max-w-[20rem] mb-[1rem]">
        <Puzzle nums={[1, 2, 3, 4, 5, 6, 7, 8, 0]} />
      </div>
      <p className="mb-[1rem]">
        We have {hInfo.length} heuristic functions. Goal state heuristic value
        is always zero.
      </p>
      <ul>
        {hInfo.map((item, index) => (
          <li key={index} className="mb-[2rem]">
            <p className="table mb-[1rem] border-b-[2px] border-b-primary">
              {item.title}
            </p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Guidance;
