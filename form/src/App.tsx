import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/Form";
import LogInForm from "./components/LogInForm";

function App() {
  const [isRegister, setIsRegister] = useState(false);


  const registrationIsCompleted = () => {
    setIsRegister(true);
  };

// const getData = localStorage.getItem("userInfo");


  // if(localStorage.getItem("userInfo")){
  //   console.log(localStorage.getItem("userInfo"));
    
  //   registrationIsCompleted();
  // }




  // const [login, setLogin] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [userData, setUserData] = useState(
  //   JSON.parse(localStorage.getItem("userInfo") ?? "{}")
  // );
  // console.log(userData);

  // const submitForm = (login: string, email: string, password: string) => {
  //   setUserData({
  //     login: login,
  //     email: email,
  //     password: password,
  //   });

  //   localStorage.setItem("userInfo", JSON.stringify(userData));
  // };

  // useEffect(() => {

  // })

 

  return (
    <div className="App">
      {isRegister ? (
        <LogInForm />
      ) : (
        <RegisterForm registration={registrationIsCompleted} />
      )}

      {/* // setLogin={setLogin}
        // setEmail={setEmail}
        // setPassword={setPassword}
        // login={login}
        // email={email}
        // password={password}
        // submit={submitForm} */}
      {/* </RegisterForm> */}
      {/* ></LogInForm> */}
    </div>
  );
}

export default App;
