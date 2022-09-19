import { AllPosts } from "../../components/AllPosts";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { PostList } from "../../components/PostList";
import { posts } from "../../mocks";

export const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <AllPosts />
      </Container>
    </>
  );
};
