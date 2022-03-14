import { useState, useRef } from 'react';
import { Form, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { TextField, Button, Paper } from "@mui/material"
import UploadButtons from "../UploadImage/UploadImage";
import styles from "./SignInForm.module.css";

const SignIn = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [avatarURL, setAvatarURL] = useState('');

  const resetForm = () => {
    setEmail('')
    setUsername('')
    setAvatarURL('')
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    postMessage({
      username,
      email,
      avatarURL
    })
      .then((response) => {
        resetForm();
        return response;
      })
      .then(onSubmit)
  }

  return (
    <div className={styles.signIn}>
      <Form onSubmit={handleSubmit}>
        <Paper elevation={24} className="">
          <TextField
            type="text"
            label="Username"
            plaintext
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
            placeholder="Username"
          />
          <TextField
            type="text"
            plaintext
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            placeholder="Your Email"
          />
          <UploadButtons onUpload={setAvatarURL} />
          <Button variant="primary" type="submit">Sign In</Button>
        </Paper>
      </Form>
    </div>
  );
};

export default SignIn;
