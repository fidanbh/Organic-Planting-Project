import React from "react";
// import './countdown.css'

const DateDisplay = ({ value, type,dateTime,clockColor,textColor }) => {
  
  return (
       <div className={dateTime}>
       <p className={clockColor}>{value}</p>
       <span className={textColor}>{type}</span>
     </div>
    
  );
};

export default DateDisplay;