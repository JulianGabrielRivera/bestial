const Signup = () => {
  return (
    <>
      <section className="signup">
        <form className="authForm">
          <div className="inputs">
            <label htmlFor="">username: </label>

            <input type="text" placeholder="Enter your username" />
          </div>
          <div className="inputs">
            <label htmlFor="">password: </label>
            <input type="password" placeholder="Enter your Password" />
          </div>
          <div className="inputs">
            <label htmlFor="">email: </label>
            <input type="email" placeholder="Enter your email" />
          </div>
        </form>
      </section>
    </>
  );
};
export default Signup;
