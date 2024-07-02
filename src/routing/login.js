import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
function Login() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
      const { name, value } = event.target;
      setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
      }));
  }

  
  return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <Card style={{ width: '24rem' }}>
              <Card.Body>
                  <Card.Title className="text-center mb-4">Login</Card.Title>
                  <Form>
                      <Form.Group className="mb-3" controlId="formName">
                          <Form.Control
                              name="username"
                              type="text"
                              placeholder="Username"
                              onChange={handleChange}
                              required
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formEmail">
                          <Form.Control
                              name="password"
                              type="password"
                              placeholder="Password"
                              onChange={handleChange}
                              required
                          />
                      </Form.Group>
                      <Button onClick={()=>navigate("/dashboard/home")} variant="primary" type="submit" className="w-100">Login</Button>
                  </Form>
              </Card.Body>
          </Card>
      </div>
  );
}

export default Login;
