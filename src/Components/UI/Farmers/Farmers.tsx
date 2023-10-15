import React, { useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import styles from "./farmers.style.module.scss";
import "./farmers.css";

const Farmers = () => {
  const farmer = [
    {
      id: 1,
      img: "https://i.hizliresim.com/c8ihwra.png",
      name: "John Harrison",
      position: "Barber",
    },
    {
      id: 2,
      img: "https://i.hizliresim.com/3zq5hs9.png",
      name: "Katie Harrison",
      position: "Security",
    },
    {
      id: 3,
      img: "https://i.hizliresim.com/al8rkpq.png",
      name: "Daniel Perry",
      position: "Worker",
    },
    {
      id: 4,
      img: "https://i.hizliresim.com/c8ihwra.png",
      name: "Max Rashfold",
      position: "Barber",
    },
  ];
  const [farmers, setFarmers] = useState(farmer);
  const [isHovering, setIsHovering] = useState(-1);
  // const [worker, setWorker] = useState(data);
  return (
    <div>
      <div className={styles.text}>
        <h2>We are farmer</h2>
        <div className={styles.farmersDecoration}></div>
      </div>
      <div className={styles.farmersMain}>
        <div className={styles.farmersImg}>
          {farmers.map((item) => (
            <div
              onMouseEnter={() => setIsHovering(item.id)}
              onMouseLeave={() => setIsHovering(-1)}
            >
              <div key={item.id} className={styles.farmersImg_items}>
                <img src={item.img}></img>
                
              </div>
              <div className={isHovering === item.id ? "" : "infoStyle"}>
                  {/* <div className={styles.farmersImg_info}> */}
                  <div className={isHovering === item.id ? "bg_color" : ""}>
                    <div className={styles.farmers_bg}>
                      <h3 className={styles.farmers_name}>{item.name}</h3>
                      <h5 className={styles.farmers_position}>{item.position}</h5>
                      <ul className={styles.farmerSocial}>
                        <li>
                          <GrFacebookOption />
                        </li>
                        <li>
                          <AiOutlineTwitter />
                        </li>
                        <li>
                          <AiFillLinkedin />
                        </li>
                        <li>
                          <BiLogoPinterestAlt />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Farmers;
