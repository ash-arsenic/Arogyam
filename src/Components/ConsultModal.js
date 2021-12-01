import { useState } from "react";
import { Modal, Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { getDatabase, ref, set } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtLnWG4nzMED8t1q-UyViHWMikQfqbIOI",
  authDomain: "arogyam-51290.firebaseapp.com",
  databaseURL:
    "https://arogyam-51290-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "arogyam-51290",
  storageBucket: "arogyam-51290.appspot.com",
  messagingSenderId: "1091017271736",
  appId: "1:1091017271736:web:4a10282cee0d45830b874d",
  measurementId: "G-6JH0ZNVJF3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

const ConsultModal = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("1");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");

  const sendData = () => {
    const data = {
      name: name,
      age: age,
      sex: sex,
      email: email,
      problem: problem,
    };
    const userId = new Date().getTime().toString();
    set(ref(database, "users/" + userId), {
      name: name,
      age: age,
      sex: sex,
      email: email,
      problem: problem,
    });
    setName("");
    setAge("");
    setSex("1");
    setEmail("");
    setProblem("");
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter Your Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formBasicText">
            <Form.Label column sm="5">
              Your Name
            </Form.Label>
            <Form.Label column sm="3">
              Your Sex
            </Form.Label>
            <Form.Label column sm="2">
              Your Age
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicText">
            <Col sm="5">
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col sm="3">
              <Form.Select onChange={(e) => setSex(e.target.value)}>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Abhijeet</option>
              </Form.Select>
            </Col>
            <Col sm="2">
              <Form.Control
                type="number"
                placeholder="Enter age"
                onChange={(e) => setAge(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Problem Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Descibe your problem"
              style={{ height: "100px" }}
              onChange={(e) => setProblem(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>

        <Button variant="primary" type="submit" onClick={sendData}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConsultModal;
