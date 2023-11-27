function Puzzle({ nums }) {
  const rows = [nums.slice(0, 3), nums.slice(3, 6), nums.slice(6, 9)];
  return (
    <div className="p-[10px] table rounded-[3px] bg-primary ">
      <div className="flex w-full flex-col">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="flex border-b-[2px] border-b-primary  last:border-b-0 
        "
          >
            {row.map((col, colIdx) => {
              const value = nums[rowIdx * 3 + colIdx];
              return (
                <div
                  key={colIdx}
                  className={`w-[33.33%] h-0 pt-[33.33%] relative border-r-[2px] border-r-primary   last:border-r-0 
              text-[2.2rem] `}
                >
                  <div
                    className={`absolute top-0 left-0 w-[100%] h-[100%] ${
                      value === 0 ? "bg-transparent" : "bg-secondary"
                    } flex justify-center items-center text-white text-[1.4em]`}
                  >
                    {value === 0 ? "" : value}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Puzzle;
