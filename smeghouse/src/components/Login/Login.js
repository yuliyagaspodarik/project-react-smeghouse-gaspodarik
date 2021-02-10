import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { logIn, logOut } from "../../store/actions";
import "./Login.css";

function Login(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    props.dispatch(logIn({
      userName: event.currentTarget.userName.value,
      password: event.currentTarget.password.value,
      stock: props.stock.map(product => product.article),
      favorites: props.favorites.map(product => product.article)
    }));
  };

  const handleClick = () => {
    props.dispatch(logOut(props.user));
  };

  return (
    <main>
      {props.isLogin ? (
          <div className="login-message">
            <p>{`Приятных покупок, ${props.user.userName}!`}</p>
            <Button type="button" onClick={handleClick}>Выйти</Button>
          </div>
        ) :
        <div className="auth">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Логин</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Введите email"
                  name="userName"
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
                  name="password"
                />
                <Form.Control.Feedback>Отлично!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Введите надежный пароль
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Авторизоваться</Button>
          </Form>
        </div>}
    </main>
  );
}

export default Login;
