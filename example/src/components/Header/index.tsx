import style from "./style.module.css";
import img from "./UserIcon.svg";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <span className={style.burger}></span>
        <div className={style.user}>
          <img src={img} alt="UserIcon" />
          <p className={style.userName}>Username</p>
        </div>
      </div>
    </header>
  );
};
