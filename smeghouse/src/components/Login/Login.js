import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Login.css";

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <main>
      <div className="auth">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Логин</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Введите email"
              />
              <Form.Control.Feedback>Отлично!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Введите корректный email
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Введите пароль"
              />
              <Form.Control.Feedback>Отлично!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Введите надежный пароль
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Авторизоваться</Button>
        </Form>
      </div>
    </main>
  );
}

export default Login;
