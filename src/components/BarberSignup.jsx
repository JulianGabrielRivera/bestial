import { useState } from "react";
import axios from "axios";

const BarberSignup = () => {
  const [state, setState] = useState({
    name: "",
    password: "",
    email: "",
    experience: "",
    location: "",
    from: "",
  });

  const updateState = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup/barber", state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="signup">
        <form className="authForm" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="">name: </label>

            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={updateState}
            />
          </div>
          <div className="inputs">
            <label htmlFor="">password: </label>
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={updateState}
              name="password"
            />
          </div>
          <div className="inputs">
            <label htmlFor="">email: </label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={updateState}
              name="email"
            />
          </div>
          <div className="inputs">
            <label htmlFor="">experience: </label>
            <input
              type="text"
              placeholder="Enter your experience"
              onChange={updateState}
              name="experience"
            />
          </div>
          <div className="inputs">
            <label htmlFor="">location: </label>
            <input
              type="text"
              placeholder="Where do you live?"
              onChange={updateState}
              name="location"
            />
          </div>
          <div className="inputs">
            <label htmlFor="">from: </label>
            <input
              type="text"
              placeholder="Where are you from?"
              onChange={updateState}
              name="from"
            />
          </div>
          <button>Sign up</button>
        </form>
      </section>
    </>
  );
};
export default BarberSignup;
