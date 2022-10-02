import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { MyPostsList } from "../../components/MyPostList";

export const MyPosts = () => {
  return (
    <Container>
      <Header />
      <MyPostsList />
    </Container>
  );
};