import { useContext, useState } from "react";
import { Context } from "../../App";
import { NavBar } from "../NavBar";
import style from "./style.module.css";
import img from "./UserIcon.svg";
export const Header = () => {
  const [burger, setBurger] = useState(false);
  const openBurgerMenu = () => {
    setBurger(!burger);
  };
  const closeBurgerMenu = () => {
    setBurger(false);
  };
  const values = useContext(Context);

  return (
    <div>
      <header className={values.isDark ? style.darkHeader : style.header}>
        <div className={style.container}>
          <button onClick={openBurgerMenu} className={style.clearButton}>
            <span className={style.burger}></span>
          </button>
          <div className={style.user}>
            <img src={img} alt="UserIcon" />
            <p className={style.userName}>Username</p>
          </div>
        </div>
      </header>
      {burger ? <NavBar onClose={closeBurgerMenu} /> : null}
    </div>
  );
};
