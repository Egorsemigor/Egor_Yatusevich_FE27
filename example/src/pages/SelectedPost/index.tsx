import { Container } from "../../components/Container";
import { FullPost } from "../../components/FullPost";
import { Header } from "../../components/Header";
import { IPost } from "../../types/posts";
import style from "./style.module.css";
interface IProps {
  posts: IPost[];
}
export const SelectedPost = (props: IProps) => {
  return (
    <div>
      <Header />
      <Container>
        <h2 className={style.selectedPost}>Selected post</h2>
        <div className={style.container}>
          {props.posts.map((item) => (
            <FullPost
              key={item.id}
              image={item.image}
              text={item.text}
              date={item.date}
              title={item.title}
              id={item.id}
              lesson_num={item.lesson_num}
              author={item.author}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
