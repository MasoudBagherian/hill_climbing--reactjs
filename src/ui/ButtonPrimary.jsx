function ButtonPrimary({ text, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-primary text-white my-[2rem] rounded-[100px] py-[6px] px-[12px]"
    >
      {text}
    </button>
  );
}

export default ButtonPrimary;
