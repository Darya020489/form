import React from "react";
import styled from "styled-components";
import {useState} from "react";

const FlexContainer = styled.section`
  display: flex;
  margin: 20px 0;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #eecfba, #c5dde8);
`;

function LogInForm() {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState(
      JSON.parse(localStorage.getItem("userInfo") ?? "{}")
    );

    return(
        <FlexContainer>
<h1>Login form</h1>
        </FlexContainer>


    );

}

export default LogInForm;