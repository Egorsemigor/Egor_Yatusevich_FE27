import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { RegistrationForm } from "../../components/RegistrationForm";

export const Registration = () => {
  return (
    <>
      <Header />
      <Container>
        <RegistrationForm />
      </Container>
    </>
  );
};
