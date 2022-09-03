import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { ITodo } from "../../../types/ToDO";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { ToDoItem } from "../ToDo Item";
import style from "./style.module.css";
export const ToDoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [text, setText] = useState("");
  const generateUniqId = () => {
    return "_" + Math.random().toString(16).slice(2);
  };
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };
  const addToDo = () => {
    const newToDo = {
      text: text,
      id: generateUniqId(),
      onClickRemove: () => {},
      isCheck: false,
    };
    const newestToDO = [...todos, newToDo];
    setTodos(newestToDO);
    setText("");
  };
  const removeToDO = (id: string) => {
    const filteredNewToDo = todos.filter((item) =>
      item.id != id ? true : false
    );
    setTodos(filteredNewToDo);
  };
  const checkedToDo = (id: string) => {
    const newTodo = todos.map((item) => {
      if (item.id == id) {
        if (item.isCheck) {
          item.isCheck = false;
        } else {
          item.isCheck = true;
        }
        return item;
      }
      return item;
    });
  };

  return (
    <div>
      <div className={style.form}>
        <Input value={text} placeholder={""} onChange={handleOnChange} />
        {text.length > 4 ? <Button text={"SUBMIT"} onClick={addToDo} /> : null}
      </div>
      {todos.map((item) => {
        const onClickRemove = () => removeToDO(item.id);
        const onClickChecked = () => checkedToDo(item.id);
        return (
          <ToDoItem
            isCheck={onClickChecked}
            id={item.id}
            text={item.text}
            onClickRemove={onClickRemove}
          />
        );
      })}
    </div>
  );
};
