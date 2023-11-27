import { useState, useEffect, useContext } from "react";
// import { motion } from "framer-motion";
import { PuzzleContext } from "../contexts/puzzleContext/PuzzleContextProvider";

function InputCell({ index }) {
  const { nums, addNum, deleteNum } = useContext(PuzzleContext);
  const [inputNum, setInputNum] = useState(nums[index] || "");
  const [err, setErr] = useState(null);
  function handleChange(e) {
    const re = /^[0-8]{1}$/;
    const value = e.target.value;
    const length = value.length;
    // console.log({ value, length });
    if (length === 1) {
      if (!re.test(value)) {
        setInputNum("");
        setErr("please enter a digit between 0-8");
      } else {
        if (nums.includes(+value)) {
          setErr(`you already entered ${value}`);
        } else {
          setInputNum(value);
          setErr(null);
          addNum(+value, index);
        }
      }
    }
    if (length === 0) {
      setInputNum("");
      setErr(null);
      deleteNum(index);
    }
    if (length === 2) {
      setErr("you should enter just one digit");
    }
  }
  useEffect(() => {
    let timer;
    if (err) {
      timer = setTimeout(() => {
        setErr(null);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [err]);
  return (
    <div className="w-[33.33%] h-0 pt-[33.33%] border-r-[2px] border-r-primary relative">
      {err ? (
        <p
          className="absolute top-[100%] z-[10] p-[3px] bg-red-300 mt-[14px] text-red-700 rounded-[3px] left-0 whitespace-nowrap 
      before:absolute before:bottom-[100%] before:left-[25px]  before:w-0 before:h-0 before:border-y-[8px] before:border-x-[8px] before:border-b-red-300 before:border-t-transparent before:border-l-transparent before:border-r-transparent
      "
        >
          {err}
        </p>
      ) : null}
      <input
        className="absolute top-0 left-0 w-full h-full bg-secondary  last:border-r-0 outline-none focus:outline-none
      text-[2em] text-white text-center"
        onChange={handleChange}
        value={inputNum}
        onBlur={() => setErr(null)}
      />
    </div>
  );
}

export default InputCell;
