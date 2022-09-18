import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const EmailConfirm = () => {
  return (
    <>
      <Header />
      <Container>
        <InfoTemplate
          title={`Success`}
          textButton={"Login"}
          body={`
          Email confirmed.                
          Your registration is now completed`}
        />
      </Container>
    </>
  );
};
