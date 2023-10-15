import React from "react";

const Button = ({ text, clickFunction, buttonStyle }) => {
  return (
    <div>
      <button onClick={clickFunction} className={buttonStyle}>
        {text}
      </button>
    </div>
  );
};

export default Button;
