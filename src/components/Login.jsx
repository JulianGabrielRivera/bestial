const Login = () => {
  return (
    <>
      <section className="login">
        <form className="authForm">
          <div className="inputs">
            <label htmlFor="">email: </label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="inputs">
            <label htmlFor="">password: </label>
            <input type="password" placeholder="Enter your Password" />
          </div>
        </form>
      </section>
    </>
  );
};
export default Login;
