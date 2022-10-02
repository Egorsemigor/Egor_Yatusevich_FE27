import React, {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useState,
} from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import style from "./style.module.css";
import { Context } from "../../App";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getUser, login } from "../../api/auth";

export const LoginForm = () => {
  const navigate = useNavigate();
  const values = useContext(Context);
  const {setUser, setUserName} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlerEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handlerPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    let isOk = true;
    login(email, password)
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((json) => {
        if (isOk) {
          localStorage.setItem("access", json.access);
          localStorage.setItem("refresh", json.refresh);
          getUser()
            .then((responce) => {
              return responce.json();
            })
            .then((user) => {
              setUser(user)
              console.log(user);
              setUserName(user.username)
              navigate("/");
            });
          
          console.log(json);
        } else {
          //обрабатыаем ошибки
        }
      });
  };

  return (
    <div className={values.isDark ? style.darkContainer : style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.margin}>
          <div className={style.inputMargin}>
            <p
              className={
                values.isDark ? style.darkInputTitle : style.InputTitle
              }
            >
              Email
            </p>
            <Input value={email} placeholder={""} onChange={handlerEmail} />
          </div>
          <div className={style.inputMargin}>
            <p
              className={
                values.isDark ? style.darkInputTitle : style.InputTitle
              }
            >
              Password
            </p>
            <Input
              value={password}
              placeholder={""}
              onChange={handlerPassword}
            />
          </div>
        </div>
        <Button text={"Login"} onClick={() => {}} />
      </form>
      <p className={style.text}>
        Forgot your password?{` `}
        <Link className={style.link} to={"/registration"}>
          Reset password
        </Link>
      </p>
    </div>
  );
};


