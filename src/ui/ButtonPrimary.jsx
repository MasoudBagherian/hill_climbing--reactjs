function ButtonPrimary({ text, handleClick, className }) {
  return (
    <button
      onClick={handleClick}
      className={`bg-primary text-white  rounded-[100px] py-[6px] px-[12px] ${className}`}
    >
      {text}
    </button>
  );
}

export default ButtonPrimary;
