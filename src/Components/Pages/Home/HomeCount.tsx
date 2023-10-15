import React from "react";
import { useCountdown } from "../../UI/ComingSoon/useCountdown";
import DateTimeDisplay from "../../UI/ComingSoon/DateTimeDisplay";
import styles from "./home.style.module.scss";
import DateDisplay from "./DateDisplay";

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
    <div>
      <div className={styles.clockDiv}>
        <DateDisplay
          value={days}
          type={"days"}
          dateTime={styles.dateBorder}
          clockColor={styles.clockStyle}
          textColor={styles.textColor}
        />
        <DateDisplay
          value={hours}
          type={"hr"}
          dateTime={styles.dateBorder}
          clockColor={styles.clockStyle}
          textColor={styles.textColor}
        />
        <DateDisplay
          value={minutes}
          type={"min"}
          dateTime={styles.dateBorder}
          clockColor={styles.clockStyle}
          textColor={styles.textColor}
        />
        <DateDisplay
          value={seconds}
          type={"sec"}
          dateTime={styles.dateBorder}
          clockColor={styles.clockStyle}
          textColor={styles.textColor}
        />
      </div>
    </div>
  );
};

const HomeCount = ({ targetDate }) => {
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
export default HomeCount;
