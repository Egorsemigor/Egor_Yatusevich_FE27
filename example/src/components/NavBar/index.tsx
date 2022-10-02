import styles from "./style.module.css";
import img from "./close.svg";
import { useContext } from "react";
import { Context } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeToggle } from "../DarkModeToggle";
import logout from "./Logout.png";
interface IProps {
  onClose: () => void;
}

export const NavBar = ({ onClose }: IProps) => {
  const { isDark, setIsDark, user } = useContext(Context);
  const nightMode = () => {
    setIsDark(!isDark);
  };
  const { setUser } = useContext(Context);
  const navigate = useNavigate();
  const logOut = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <div className={isDark ? styles.darkNavBar : styles.navBar}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <button onClick={onClose} className={styles.close}>
            <img src={img} alt="close" className={styles.closeButton} />
          </button>
          {user ? (
            <ul className={styles.dayModeUl}>
              <li>
                <Link to="/">All posts</Link>
              </li>
              <li>
                {" "}
                <li>
                  <Link to="/mypost">My Posts</Link>
                </li>
                <li>
                  <Link to="/addpost">+Add Posts</Link>
                </li>
              </li>

              <li className={styles.logOut}>
                <button onClick={logOut}>
                  <Link to="/">
                    Log out <img src={logout} alt="" />
                  </Link>
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
            </ul>
          )}
        </div>
        <DarkModeToggle inputChecked={false} onChange={nightMode} />
      </div>
    </div>
  );
};

//yunona.dubovik@gmail.com
