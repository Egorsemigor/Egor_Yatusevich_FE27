import { Button } from "./components/Button";
import "./App.css";
import { Input } from "./components/Input";
import { Title } from "./OldComponents/Title";
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
import { createContext, useState } from "react";
import { LoginForm } from "./components/Login";
import { Login } from "./pages/Login";
import { RootRouter } from "./router";
import { BrowserRouter } from "react-router-dom";
export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}>({ isDark: false, setIsDark: () => {} });
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider value={{ isDark: isDark, setIsDark: setIsDark }}>
          <RootRouter />
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
