import { PostItem } from "../PostItem";
import style from "./style.module.css";

export const PostList = () => {
  const posts = [
    {
      id: 0,
      image: "https://wallpapertops.com/walldb/original/6/3/b/216944.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and  typesetting industry...",
      date: "2021-12-12",
      lesson_num: 0,
      title: "What is Lorem Ipsum?",
      author: 0,
    },
    {
      id: 1,
      image: "https://wallpapertops.com/walldb/original/6/3/b/216944.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and  typesetting industry...",
      date: "2021-12-12",
      lesson_num: 0,
      title: "What is Lorem Ipsum?",
      author: 0,
    },
    {
      id: 2,
      image: "https://wallpapertops.com/walldb/original/6/3/b/216944.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and  typesetting industry...",
      date: "2021-12-12",
      lesson_num: 0,
      title: "What is Lorem Ipsum?",
      author: 0,
    },
    {
      id: 3,
      image: "https://wallpapertops.com/walldb/original/6/3/b/216944.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and  typesetting industry...",
      date: "2021-12-12",
      lesson_num: 0,
      title: "What is Lorem Ipsum?",
      author: 0,
    },
    {
      id: 4,
      image: "https://wallpapertops.com/walldb/original/6/3/b/216944.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and  typesetting industry...",
      date: "2021-12-12",
      lesson_num: 0,
      title: "What is Lorem Ipsum?",
      author: 0,
    },
    {
      id: 5,
      image: "https://wallpapertops.com/walldb/original/6/3/b/216944.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and  typesetting industry...",
      date: "2021-12-12",
      lesson_num: 0,
      title: "What is Lorem Ipsum?",
      author: 0,
    },
  ];
  return (
    <div className={style.container}>
      {posts.map((item) => (
        <PostItem
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
  );
};
