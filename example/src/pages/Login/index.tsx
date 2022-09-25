import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { LoginForm } from "../../components/Login";
import { LoginRegistration } from "../../components/LoginRegistration";
import { PostList } from "../../components/PostList";
import { RegistrationForm } from "../../components/RegistrationForm";
import { posts } from "../../mocks";
import style from "./style.module.css";

export const Login = () => {
  return (
    <div>
      <Header />
      <Container>
        <LoginRegistration />
        <LoginForm />
      </Container>
    </div>
  );
};
