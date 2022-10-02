import { count } from "console";
import {
  ChangeEvent,
  ChangeEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../../api/post";
import { Context } from "../../App";
import { IPost } from "../../types/posts";
import { Button } from "../Button";
import { Input } from "../Input";
import { Loader } from "../Loader";
import { PostList } from "../PostList";
import style from "./style.module.css";

export const AllPosts = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const navigateToPost = (id: number) => {
    navigate(`/selectedpost/${id}`);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchPosts(search, posts.length)
      .then((values) => {
        values.count > values.results.length
          ? setShowLoadMore(true)
          : setShowLoadMore(false);
        setPosts(values.results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);

  const loadMore = () => {
    fetchPosts(search, posts.length).then((values) => {
      console.log({ values });

      if (values.results.length + posts.length === values.count) {
        setShowLoadMore(false);
      }

      setPosts(posts.concat(values.results));
    });
  };
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={style.main}>
      <div className={style.input}>
        <Input
          value={search}
          placeholder={"Поиск постов"}
          onChange={handleSearch}
        />
      </div>
      <div className={style.mainTitle}>
        <h2 className={style.title}>All Posts</h2>
        {user ? (
          <Button
            className={{ width: "100px", height: '51px', borderRadius: '25px', color:'red' }}
            text={"+ Add"}
            onClick={() => {
              navigate("/addpost");
            }}
          />
        ) : null}
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <PostList posts={posts} onClickPost={navigateToPost} />
      )}

      {showLoadMore ? (
        <Button text={"Загурзить еще"} onClick={loadMore} />
      ) : null}
    </div>
  );
};
