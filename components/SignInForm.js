import Head from "next/head";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import { createUser } from "../services";

function SignIn() {
  const googleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result
        createUser({
          username: user.displayName,
          email: user.email,
          avatarURL: user.photoURL
        });
      })
      .catch((error) => {
        console.log({ error })
      });
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <Welcome>
        <h1>Welcome to ChatLy!</h1>
      </Welcome>
      <LoginContainer>
        <Button style={{ height: "150px", width: "250px", bottom: "100px" }} onClick={() => googleLogIn()} variant="outlined">
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default SignIn;

const LoginContainer = styled.div`
  padding: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7); /* offset-x, offset-y, blur-radius, spread-radius, color */
`;

const Welcome = styled.h1`
  text-align: center;
`;
