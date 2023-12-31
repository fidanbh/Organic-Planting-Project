import React from "react";
import { useCountdown } from "./useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";
import './countdown.css'
import styles from './comingSoon.style.module.scss'

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};
const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
          <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} slash={'/'} sign={':'} dateTime={''} clockColor={styles.clockColor}/>
          
          <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} slash={'/'} sign={':'} dateTime={''} clockColor={styles.clockColor}/>
          
          <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} slash={'/'} sign={':'} dateTime={''} clockColor={styles.clockColor}/>
          
          <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} slash={'/'} sign={''} dateTime={''} clockColor={styles.clockColor}/>
        
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
export default CountdownTimer;
