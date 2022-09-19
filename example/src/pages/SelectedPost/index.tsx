import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { FullPost } from "../../components/FullPost";
import { Header } from "../../components/Header";
import { IPost } from "../../types/posts";
import style from "./style.module.css";

export const SelectedPost = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const params = useParams();
  useEffect(() => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/${params.postId}`    );
    promise
      .then((response) => response.json())
      .then((values) => {
        setPost(values);
      });
  });
  return (
    <div>
      <Header />
      <Container>
        <h2 className={style.selectedPost}>Selected post</h2>
        <div className={style.container}>
          {post? <FullPost {...post}/> : null} 
        </div>
      </Container>
    </div>
  );
};
