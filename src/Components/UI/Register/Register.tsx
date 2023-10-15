import React,{useState} from 'react'
import styles from './register.style.module.scss'

import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Register = () => {
    const [password, setPassword] = useState("");
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
  
    const handleToggle = () => {
      if (type === "password") {
        setIcon(eye);
        setType("text");
      } else {
        setIcon(eyeOff);
        setType("password");
      }
    };
    return (
      <div>
        <div>
          <div className={styles.login}>
            <span className={styles.login_icon}>
              <FaHome className={styles.homeIcon} /> Home
            </span>{" "}
            <h4>
              <AiOutlineRight className={styles.rightIcon} /> Register
            </h4>
          </div>
          <h2 className={styles.tittle}>Register new Account</h2>
          <div className={styles.loginMenu}>
            <form>
              <label for="fullname" id="fullname">
                <span className={styles.stars}>*</span> Username or email address
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className={styles.inputStyle}
              />
              <br />
              <div className={styles.label}></div>
              <label for="password" id="passlabel">
                <span className={styles.stars}>*</span> Password
              </label>
              <br />
  
              <input
                type={type}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className={styles.inputStyle}
              />
              <span className={styles.eyeSpan} onClick={handleToggle}>
                <Icon className={styles.eyeIcon} icon={icon} size={25} />
              </span>
              <br />
              <div className={styles.label}></div>
              <label for="password" id="passlabel">
                <span className={styles.stars}>*</span> Confirm password
              </label>
              <br />
  
              <input
                type={type}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className={styles.inputStyle}
              />
              <span className={styles.eyeSpan} onClick={handleToggle}>
                <Icon className={styles.eyeIcon} icon={icon} size={25} />
              </span>
              <br />
              <Button
                text="REGISTER"
                clickFunction={""}
                buttonStyle={styles.signInStyle}
              />
  
              <Link to="/login">
                <button className={styles.buttonRegister}>
                  OR LOGIN
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Register