import Head from "next/head";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import { createUser, getUserByEmail } from "../../services";
import ls from "local-storage";
import AvatarLogo from "../AppLogo/AppLogo";

import styles from './SignInForm.module.css'

const googleLogIn = async () => {
  const { user: gUser } = await signInWithPopup(auth, provider);
  const existingUser = await getUserByEmail(gUser.email).then((response) =>
    response.json()
  );
  let loggedInUser;
  if (existingUser.user) {
    loggedInUser = existingUser;
  } else {
    loggedInUser = await createUser({
      username: gUser.displayName,
      email: gUser.email,
      avatarURL: gUser.photoURL,
    }).then((response) => response.json());
  }
  ls("self", loggedInUser.user);

  window.location.href = "/chatrooms";
};

function SignIn() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.container}>
        <AvatarLogo />
        <Welcome style={{ color: "white", fontSize: "60px" }}>

          Welcome to ChatLy!

        </Welcome>
        <LoginContainer>
          <Button
            style={{
              height: "100px",
              width: "800px",
              bottom: "400px",
              fontSize: "25px",
              backgroundColor: "lightblue",
            }}
            onClick={() => googleLogIn()}
            variant="outlined"
          >
            Sign in with Google
          </Button>
        </LoginContainer>
      </div>
    </>
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
`;

const Welcome = styled.h1`
  text-align: center;
`;
