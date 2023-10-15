import React from "react";
import './countdown.css'

const DateTimeDisplay = ({ value, type, isDanger,sign,slash,dateTime,clockColor }) => {
  
  return (
    
      // <div className={isDanger ? "countdown danger" : "countdown"}>
      //   <p className="clockColor">{value+slash+type+ sign}</p>
        
      // </div>
       <div className={dateTime}>
       {/* <p className={clockColor}>{value+slash+type+ sign}</p> */}
       <p className={clockColor}> <span className="value">{value}</span><span className='types'>{'/'+type}</span></p>
     </div>
    
  );
};

export default DateTimeDisplay;
