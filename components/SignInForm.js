import styles from "../styles/Home.module.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import Chatrooms from "../pages/chatrooms";



const   SignIn = () => {
  return (
    <div className={styles.signIn}>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2" className="boldText">
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
        <Link href="/chatrooms">
          <Button variant="primary">Sign In</Button>
        </Link>
      </Form>
    </div>
  );
};

export default SignIn;


// 
