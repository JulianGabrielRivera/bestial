const BarberSignup = () => {
  return (
    <>
      <section className="signup">
        <form className="authForm">
          <div className="inputs">
            <label htmlFor="">name: </label>

            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="inputs">
            <label htmlFor="">password: </label>
            <input type="password" placeholder="Enter your Password" />
          </div>
          <div className="inputs">
            <label htmlFor="">email: </label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="inputs">
            <label htmlFor="">experience: </label>
            <input type="text" placeholder="Enter your experience" />
          </div>
          <div className="inputs">
            <label htmlFor="">location: </label>
            <input type="text" placeholder="Where do you live?" />
          </div>
          <div className="inputs">
            <label htmlFor="">from: </label>
            <input type="text" placeholder="Where are you from?" />
          </div>
        </form>
      </section>
    </>
  );
};
export default BarberSignup;
