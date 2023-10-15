import React, { useState } from "react";
import styles from "./contact.style.module.scss";
import { FaHome, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineRight, AiOutlineClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Button from "../Button/Button";

const ContactUs = () => {
  const data = [
    {
      icons: <HiOutlineLocationMarker />,
      tittle: "60-49 Road 11378",
      text: "New York",
    },
    {
      icons: <FaRegEnvelope />,
      tittle: "Phone: +65 11.188.888",
      text: "Mail:example@gmail.com",
    },
    {
      icons: <FiClock />,
      tittle: "Week Days: 10:00 - 22:00",
      text: "Sunday: Close",
    },
  ];
  const [contact, setContact] = useState(data);
  return (
    <div>
      <div className={styles.mapStyle}>
        <div className={styles.contactUs}>
          <h4 className={styles.contactUsh4}>
            <FaHome className={styles.homeIcon} /> Home
          </h4>{" "}
          <h4>
            <AiOutlineRight className={styles.rightIcon} /> About us
          </h4>
        </div>
        <div>
          <div className="width: 100%">
            <iframe
              width="1150"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=1000&amp;height=600&amp;hl=en&amp;q=Faig%20Yusifov%2071%20Baku,%20Azerbaijan+(Contact%20Us)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Calculate population in area
              </a>
            </iframe>
          </div>
        </div>
      </div>

      <div className={styles.contactInfo}>
        {contact.map((item) => (
          <div className={styles.contactInfo_parts}>
            <div className={styles.contact_icons}>{item.icons}</div>
            {item.tittle}
            <br />
            {item.text}
          </div>
        ))}
      </div>
      <div>
        <h2 className={styles.leaveMessage}>Leave Message</h2>
        <p className={styles.leaveMessage}>
          Our staff will call back later and answer your questions.
        </p>
        <form>
          <div className={styles.inputs}>
            <div>
              <div>
                <span>
                  <input
                    className={styles.inputsParts}
                    placeholder="Name"
                    type="text"
                  ></input>
                </span>
              </div>
            </div>
            <div className={styles.inputsSecond}>
              <div>
                <span>
                  <input
                    className={styles.inputsParts}
                    placeholder="Email"
                    type="email"
                  ></input>
                </span>
              </div>
            </div>
          </div>
          <p className={styles.pTextArea}>
            <span>
              <textarea
                className={styles.textArea}
                placeholder="Message"
              ></textarea>
            </span>
          </p>
        </form>
        <Button
          text="SEND MESSAGE"
          buttonStyle={styles.buttonShop}
          clickFunction={""}
        />
      </div>
    </div>
  );
};

export default ContactUs;
