import React from "react";

const LoanButton = ({ children, onClick, name, value }) => {
  return (
    <button
      name={name}
      value={value}
      onClick={onClick}
      className='p-5 bg-white hover:bg-slate-100 border-slate-300 w-28 h-28 rounded border-solid border-2'
    >
      {value}
    </button>
  );
};

export default LoanButton;
