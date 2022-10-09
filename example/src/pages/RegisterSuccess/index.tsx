import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const RegisterSucsess = () => {
  const text = "";
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container>
        <InfoTemplate
          title={`Registration Confirmation`}
          textButton={"Home"}
          body={`
            Please activate your account with 
            test@gmail.com
            the activation link in the email
            test@gmail.com
            Please, check your email`}
            onClick={()=> { navigate('/login')}}
        />
      </Container>
    </>
  );
};
