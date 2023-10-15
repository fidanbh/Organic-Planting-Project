import React, { useState } from "react";
import styles from "./login.style.module.scss";
import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Login = () => {
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
            <AiOutlineRight className={styles.rightIcon} /> Login
          </h4>
        </div>
        <h2 className={styles.tittle}>Login</h2>
        <div className={styles.loginMenu}>
          <form>
            <label>
              <span className={styles.stars}>*</span> Username or email address
            </label>
            <br />
            <input
              type="text"
              placeholder="Full Name"
              className={styles.inputStyle}
            />
            <br />
            <div className={styles.label}></div>
            <label>
              <span className={styles.stars}>*</span> Password
            </label>
            <br />

            {/* <input
              type={type}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className={styles.inputStyle}
            /> */}
            <span className={styles.eyeSpan} onClick={handleToggle}>
              <Icon className={styles.eyeIcon} icon={icon} size={25} />
            </span>
            <br />
            <div className={styles.passwordPart}>
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  value="remember"
                  className={styles.checkbox}
                ></input>
                <label> Remember me</label>
              </div>
              <button className={styles.forgetPassword}>
                <span>Forget your password</span>
              </button>
            </div>
            <br />
            <Button
              text="SIGN IN"
              clickFunction={""}
              buttonStyle={styles.signInStyle}
            />
          </form>
        </div>
        {/* <Link to="/register"> */}
          <button className={styles.buttonRegister}>
            OR CREATE AN ACCOUNT
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Login;
