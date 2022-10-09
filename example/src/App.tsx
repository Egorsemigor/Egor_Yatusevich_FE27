import { Button } from "./components/Button";
import "./App.css";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { Username } from "./components/User";
import { Clicker } from "./OldComponents/Clicker";
import { EmojiList } from "./OldComponents/emojiList";
import { PostList } from "./components/PostList";
import { posts } from "./mocks";
import { ToDoList } from "./components/ToDoList/ToDo List";
import { RegistrationForm } from "./components/RegistrationForm";
import { Timer } from "./OldComponents/Timer";
import { Header } from "./components/Header";
import { Converter } from "./OldComponents/Converter";
import { Time } from "./components/Time";
import { createContext, useEffect, useState } from "react";
import { LoginForm } from "./components/Login";
import { Login } from "./pages/Login";
import { RootRouter } from "./router";
import { BrowserRouter } from "react-router-dom";
import { AllPosts } from "./components/AllPosts";
import { IUser } from "./types/auth";
import { getUser } from "./api/auth";
import preloader from "./Gear.gif";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user: IUser | null;
  setUser: (value: IUser | null) => void;
  userName1: string;
  setUserName: (value: any) => void;
}>({
  isDark: false,
  setIsDark: () => {},
  user: null,
  setUser: (value: IUser | null) => {},
  userName1: "",
  setUserName: (value: any) => {},
});
const access = localStorage.getItem("access");
function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [userName1, setUserName] = useState("");
  const [isReady, setIsReady] = useState(!access);
  useEffect(() => {
    if (access) {
      let isOk = true;
      getUser()
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }
          return response.json();
        })
        .then((user) => {
          if (isOk) {
            setUser(user);
            setUserName(user.username);
          }
        })
        .finally(() => {
          setIsReady(true);
        });
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider
          value={{
            isDark: isDark,
            setIsDark: setIsDark,
            user: user,
            setUser: setUser,
            userName1: userName1,
            setUserName: setUserName,
          }}
        >
          {isReady ? (
            <RootRouter />
          ) : (
            <img
              src={preloader}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)",
              }}
              alt=""
            />
          )}
        </Context.Provider>
        <NotificationContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
