import { count } from "console";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../../api/post";
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
    <div>
      <div className={style.input}>
        <Input
          value={search}
          placeholder={"Поиск постов"}
          onChange={handleSearch}
        />
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
