import React, { useState } from "react";
import styled from "styled-components";
import "./form.css";

const FlexContainer = styled.section`
  display: flex;
  margin: 20px 0;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #eecfba, #c5dde8);
`;

type propsType = {
  registration: () => void;
  //   setEmail: (e: any) => void;
  //   setPassword: (e: any) => void;
  //   login: string;
  //   email: string;
  //   password: string;
  //   submit: (login: string, email: string, password: string) => void;
};

function RegisterForm(props: propsType) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userInfo") ?? "{}")
  );
  const { registration } = props;
  if(userData.login){
    registration();
  }

  const [checkLogin, setCheckLogin] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);

  // const [isRegister, setIsRegister] = useState(false);

  const checkForm = () => {
    setCheckLogin(login === "" ? false : true);
    setCheckEmail(email === "" || !email.includes("@") ? false : true);
    setCheckPassword(password === "" ? false : true);
    if (checkLogin && checkEmail && checkPassword) {
        submitForm(login, email, password);
      
      registration();
    }
  };

  const submitForm = (login: string, email: string, password: string) => {
    setUserData({
      login: login,
      email: email,
      password: password,
    });
    console.log(userData);
    localStorage.setItem("userInfo", JSON.stringify(userData));
  };

  return (
    <FlexContainer>
      <h1>Kindly fill in the form below</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setLogin(e.target.value)}
          // value={login}
          className="form-input"
          id="name"
          type="text"
          placeholder="Enter you name"
          style={{ borderColor: !checkLogin ? "red" : "" }}
        />
        <div>{checkLogin}</div>
      </div>
      {checkLogin ? null : (
        <div className="form-error">Please complete the login field</div>
      )}

      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="form-input"
          id="email"
          type="text"
          placeholder="Enter you email"
          style={{ borderColor: !checkEmail ? "red" : "" }}
        />
      </div>
      {checkEmail ? null : (
        <div className="form-error">
          Please complete the email field correctly
        </div>
      )}
      <div>
        <label htmlFor="">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="form-input"
          id="password"
          type="text"
          placeholder="Enter you password"
          style={{ borderColor: !checkPassword ? "red" : "" }}
        />
      </div>
      {checkPassword ? null : (
        <div className="form-error">Please complete the password field</div>
      )}
      <button onClick={checkForm} className="form-btn">
        Sign up
      </button>
    </FlexContainer>
  );
}

export default RegisterForm;
