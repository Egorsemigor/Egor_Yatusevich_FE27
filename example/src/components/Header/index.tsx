import { useContext, useState } from "react";
import { Context } from "../../App";
import { NavBar } from "../NavBar";
import style from "./style.module.css";
import img from "./UserIcon.svg";
export const Header = () => {
  const [burger, setBurger] = useState(false);
  const { user } = useContext(Context);
  const openBurgerMenu = () => {
    setBurger(!burger);
  };
  const closeBurgerMenu = () => {
    setBurger(false);
  };
  const { isDark, userName1 } = useContext(Context);

  return (
    <div>
      <header className={isDark ? style.darkHeader : style.header}>
        <div className={style.container}>
          <button onClick={openBurgerMenu} className={style.clearButton}>
            <span className={style.burger}></span>
          </button>
          {user ? (
            <div className={style.user}>
              <img src={img} alt="UserIcon" />
              <p className={style.userName}>{userName1}</p>
            </div>
          ) : null}
        </div>
      </header>
      {burger ? <NavBar onClose={closeBurgerMenu} /> : null}
    </div>
  );
};
