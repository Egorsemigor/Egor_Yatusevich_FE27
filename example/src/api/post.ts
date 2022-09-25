export const fetchPosts = (search: string, offset: number) => {
  const promise = fetch(
    `https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=${offset}&search=${search}`
  );
  const jsonPosts = promise.then((response) => {
    return response.json();
  });
  return jsonPosts;
};
