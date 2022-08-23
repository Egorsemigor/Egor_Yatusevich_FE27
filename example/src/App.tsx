import {Button} from './components/Button'
import './App.css';
import { Input } from './components/Input'
import { Title } from './components/Title';
import { Username } from './components/User'

function App() {
  const onClickLogin = () => {
    alert('Login')
  };

  return (
    <div className="App">
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
