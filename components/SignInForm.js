import styles from "../styles/Home.module.css";
import { Form, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

const SignIn = () => {
  return (
    <div className={styles.SignIn}>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2" className="BoldText">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              plaintext
              placeholder="email@example.com"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Button variant="primary" href="/chat" onClick={""}>
          Sign In
        </Button>{" "}
      </Form>
    </div>
  );
};

export default SignIn;
