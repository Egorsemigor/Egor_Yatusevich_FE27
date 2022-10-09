import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { removePost } from "../../api/post";
import { Context } from "../../App";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { FullPost } from "../../components/FullPost";
import { Header } from "../../components/Header";
import { IPost } from "../../types/posts";
import style from "./style.module.css";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export const SelectedPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<IPost | null>(null);
  const params = useParams();
  const { user } = useContext(Context);
  useEffect(() => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/${params.postId}`
    );
    promise
      .then((response) => response.json())
      .then((values) => {
        setPost(values);
      });
  }, []);
  const handleRemovePost = () => {
    if (post?.id) {
      removePost(post?.id).then((response) => {
        NotificationManager.success("Delete", "Post successfully deleted");
        navigate(-1);
      });
    } else {
      NotificationManager.error("Deleting", "Post is not deleted");
    }
  };
  return (
    <div>
      <Header />
      <Container>
        <h2 className={style.selectedPost}>Selected post</h2>
        <div className={style.container}>
          {post ? <FullPost {...post} /> : null}
          {user?.id === post?.author ? (
            <Button text={"Delete post"} onClick={handleRemovePost} />
          ) : null}
        </div>
      </Container>
    </div>
  );
};
