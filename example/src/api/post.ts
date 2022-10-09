import { tmsFetch } from "../utils/fetch";

export const fetchPosts = (search: string, offset: number) => {
  const promise = fetch(
    `https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=${offset}&search=${search}`
  );
  const jsonPosts = promise.then((response) => {
    return response.json();
  });
  return jsonPosts;
};

export const fetchMyPosts = () => {
  return tmsFetch(`https://studapi.teachmeskills.by/blog/posts/my_posts/`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        return { status: response.status };
      }
    }
  );
};
export const createPost = (body: FormData) => {
  return tmsFetch(`https://studapi.teachmeskills.by/blog/posts/`, {
    method: "POST",
    body: body,
  });
};
export const removePost = (id:number) =>{
  return tmsFetch(`https://studapi.teachmeskills.by/blog/posts/${id}`, {
    method: "DELETE",
  });
}
