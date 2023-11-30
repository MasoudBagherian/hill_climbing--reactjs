function PuzzleCaption({ name, value }) {
  return (
    <p className="self-center bg-green-600 text-green-950 my-[1rem] rounded-[100px] p-[5px]">
      {name} = {value}
    </p>
  );
}

export default PuzzleCaption;
