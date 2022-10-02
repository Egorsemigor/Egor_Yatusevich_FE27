import { useNavigate, useParams } from "react-router-dom";
import { activateUser, registerUser } from "../../api/auth";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const EmailConfirm = () => {
  const navigate = useNavigate();
  const params = useParams();
  if (params.uid && params.token) {
    activateUser(params.uid, params.token);
  }

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
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </>
  );
};
