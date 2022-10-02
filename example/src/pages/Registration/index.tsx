import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { RegistrationForm } from "../../components/RegistrationForm";
import { LoginRegistration } from "../../components/LoginRegistration";

export const Registration = () => {
  return (
    <>
      <Header />
      <Container>
        <LoginRegistration />
        <RegistrationForm />
      </Container>
    </>
  );
};
