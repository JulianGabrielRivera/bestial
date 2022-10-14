import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const updateState = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <section className="login">
        <form className="authForm">
          <div className="inputs">
            <label htmlFor="">email: </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={updateState}
            />
          </div>
          <div className="inputs">
            <label htmlFor="">password: </label>
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              onChange={updateState}
            />
          </div>
        </form>
      </section>
    </>
  );
};
export default Login;
