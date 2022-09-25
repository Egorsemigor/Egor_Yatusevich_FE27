import { NavLink } from "react-router-dom";
import style from "./style.module.css";
export const LoginRegistration = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }: any) => {
          return isActive ? style.active : style.regLogin;
        }}
        to={"/login"}
      >
        Login
      </NavLink>
      <span className={style.separater}> | </span>
      <NavLink
        className={({ isActive }: any) => {
          return isActive ? style.active : style.regLogin;
        }}
        to={"/registration"}
      >
        Registartion
      </NavLink>
    </div>
  );
};
