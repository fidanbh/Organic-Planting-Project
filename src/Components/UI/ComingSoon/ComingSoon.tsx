import React from "react";
import styles from "./comingSoon.style.module.scss";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

import CountdownTimer from "./CountdownTimer";

const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const ComingSoon = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div className={styles.comingSoon}>
      <h2 className={styles.tittle}>Coming Soon</h2>
      {/* <br/> */}
      <span className={styles.tittle_span}>
        OUR WEBSITE IS UNDER CORPORATE.
      </span>
      <br />

      <div className={styles.tittle_countdown}>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
      <div className={styles.tittle_footer}>
        <span>Follow Us For Updates</span>
      </div>
      <div className={styles.tittle_footer_icons}>
        <ul className={styles.comingSoon_social}>
          <li>
            <GrFacebookOption className={styles.social} />
          </li>
          <li>
            <AiOutlineTwitter className={styles.social} />
          </li>
          <li>
            <AiFillLinkedin className={styles.social} />
          </li>
          <li>
            <BiLogoPinterestAlt className={styles.social} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComingSoon;
