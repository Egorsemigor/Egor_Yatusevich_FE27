import styles from "./style.module.css";
import img from "./close.svg";
import { useContext } from "react";
import { Context } from "../../App";
import { Link } from "react-router-dom";
import { DarkModeToggle } from "../DarkModeToggle";
interface IProps {
  onClose: () => void;
}

export const NavBar = ({ onClose }: IProps) => {
  const { isDark, setIsDark } = useContext(Context);
  const nightMode = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? styles.darkNavBar : styles.navBar}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <button onClick={onClose} className={styles.close}>
            <img src={img} alt="close" className={styles.closeButton} />
          </button>

          <ul>
            <li>
              <Link to="/">All posts</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </div>
        <DarkModeToggle inputChecked={false} onChange={nightMode} />
      </div>
    </div>
  );
};
