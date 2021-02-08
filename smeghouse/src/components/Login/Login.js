import React from "react";

import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <main>
        <div className="auth">
          <form className="auth__form" onSubmit={this.handleSubmit}>
            <label>
              <input
                className="auth__form-input"
                type="text"
                name="login"
                placeholder="Логин"
              />
            </label>
            <label>
              <input
                className="auth__form-input"
                type="password"
                name="password"
                placeholder="Пароль"
              />
            </label>
            <label>
              <input
                className="auth__form-input"
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </label>
            <label>
              <input
                className="auth__form-input"
                type="checkbox"
                name="check"
              />
              Согласен с условиями правил пользования торговой площадки
            </label>
            <div>
              <button type="submit" className="auth__form-button">Войти</button>
              <button className="auth__form-button" onChange={this.handleSubmit}>Зарегистрироваться</button>
            </div>
            <div>
              <button className="auth__form-button auth__form-button-exit" onChange={this.handleSubmit}>Выйти</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Login;
