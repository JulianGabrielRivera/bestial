import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
  });

  const updateState = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup/customer", state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="signup">
        <form className="authForm" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="">username: </label>

            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={state.username}
              onChange={updateState}
            />
          </div>
          <div className="inputs">
            <label htmlFor="">password: </label>
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              value={state.password}
              onChange={updateState}
            />
          </div>
          <div className="inputs">
            <label htmlFor="">email: </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={state.email}
              onChange={updateState}
            />
          </div>
          <button>Sign up</button>
        </form>
      </section>
    </>
  );
};
export default Signup;
