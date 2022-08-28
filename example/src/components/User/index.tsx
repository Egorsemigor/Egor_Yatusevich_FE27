import style from "./style.module.css";

interface UserProps {
  username: string;
  isDark?: boolean;
}

export const Username = (props: UserProps) => {
  const initial = props.username.trim().split(" ");
  return (
    <div
      className={`${style.mainDiv} ${props.isDark ? style.darkMainDiv : ""}`}
    >
      <div
        className={`${style.initial} ${props.isDark ? style.darkInitial : ""}`}
      >
        {initial[0][0].toUpperCase()}
        {initial[1] ? initial[1][0].toUpperCase() : ""}
      </div>
      <p className={style.name}>{props.username}</p>
    </div>
  );
};
