
import { Button } from "./components/Button";
import "./App.css";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { Username } from "./components/User";
import { Clicker } from "./components/Clicker";
import { EmojiList } from "./components/emojiList";
import { PostList } from "./components/ToDoList/PostList";



function App() {
  const onClickLogin = () => {
    alert('Login')
  };

  return (
    <div className="App">
      {/* <Button onClick={onClickLogin} text="LogIn" />
      <Input value={"Enter your name"} />
      <Title text="Text" />
      <Title text="React" />
      <Title text="CSS, HTML, JS" />
      <Username username={"John Newman"} isDark={true} />
      <Username username={"Вася Пупкин"} isDark={true} />
      <Username username={"Джон Пупс"} isDark={true} /> */}
      <PostList />
      <Clicker />
      <EmojiList />

      <Button onClick = {onClickLogin} text = "LogIn"/>
      <Input value={'Enter your name'}/>
      <Title text='Text'/>
      <Title text='React'/>
      <Title text='CSS, HTML, JS'/>
      <Username username={'John Newman'}/>
      <Username username={'Вася Пупкин'}/>
      <Username username={'Джон Пупс'}/>

    </div>
  );
}

export default App;
