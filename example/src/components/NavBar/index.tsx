import styles from "./style.module.css";
import img from './close.svg'
interface IProps {
  onClose: () => void;
}

export const NavBar = ({ onClose }: IProps) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <button onClick={onClose} className={styles.close}>
            <img src={img} alt="close" className={styles.closeButton} />
          </button>

          <ul>
            <li>
              <a href="#">All posts</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
