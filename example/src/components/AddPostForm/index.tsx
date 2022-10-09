import { ChangeEventHandler, useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "../Container";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../api/post";

export const AddPostForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const removeImage = () => {
    setImage("");
    setFile(null);
  };

  const createNewPost = () => {
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    formData.append("text", text);
    formData.append("lesson_num", number);
    formData.append("title", title);

    createPost(formData).then((response) => {
      if (response.ok) {
        navigate("/mypost");
      }
    });
  };
  const handleOnLoad: ChangeEventHandler<HTMLInputElement> = (event) => {
    const fileReader = new FileReader();
    const files = event.target.files;
    if (files?.length) {
      fileReader.readAsDataURL(files[0]);
      setFile(files[0]);
      fileReader.onload = (event: ProgressEvent<FileReader>) => {
        if (typeof event.target?.result === "string") {
          setImage(event.target?.result);
        }
      };
    }
  };

  return (
    <>
      <div className={styles.addPostIndex}>
        <Container>
          <div className={styles.addPostWrraper}>
            <h2>Add new post</h2>
            <div className={styles.addPost}>
              <div className={styles.addText}>
                <Input
                  placeholder="Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <Input
                  placeholder="Lesson number"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                />
                <Input
                  value={text}
                  placeholder="Text"
                  onChange={(event) => setText(event.target.value)}
                />
              </div>
              <div className={styles.addImg}>
                {image ? (
                  <>
                    <img src={image} />
                    <Button text="remove image" onClick={removeImage} />
                  </>
                ) : (
                  <p className={styles.addName}>Image</p>
                )}

                <div className={styles.addBtn}>
                  {image ? null : (
                    <>
                      <div style={{ position: "absolute" }}>
                        <Button text="Add" onClick={() => {}}></Button>
                        <input
                          onChange={handleOnLoad}
                          className={styles.chooseInput}
                          type="file"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.addManeBtn}>
              <Button text="Add" onClick={createNewPost}></Button>
            </div>
          </div>
        </Container>
      </div>
      <img
        src="../img/vectorForAdd.png"
        alt="vectorForAdd"
        className={styles.img}
      />
    </>
  );
};
