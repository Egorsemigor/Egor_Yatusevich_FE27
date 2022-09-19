import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../types/posts";
import { Button } from "../Button";
import { PostList } from "../PostList";

export const AllPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();
  const [showLoadMore, setShowLoadMore] = useState(true);
  const navigateToPost = (id: number) => {
    navigate(`/selectedpost/${id}`);
  };
  useEffect(() => {
    const promise = fetch(
      "https://studapi.teachmeskills.by/blog/posts/?limit=10"
    );
    promise
      .then((response) => response.json())
      .then((values) => {
        setPosts(values.results);
      });
  }, []);

  const loadMore = () => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=${posts.length}`
    );

    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        console.log({ values });

        if (values.results.length + posts.length === values.count) {
          setShowLoadMore(false);
        }

        setPosts(posts.concat(values.results));
      });
  };

  return (
    <div>
      <PostList posts={posts} onClickPost={navigateToPost} />
      {showLoadMore ? (
        <Button text={"Загурзить еще"} onClick={loadMore} />
      ) : null}
    </div>
  );
};
