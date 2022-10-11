import { Link } from "react-router-dom";

const Barbers = () => {
  return (
    <div className="barbersPage">
      <Link to="/signup">Sign In</Link>

      <header className="fullBarberContainer">
        <input type="text" placeholder="Search" className="searchBar" />
        <h2>Hi, Julian Gabriel Rivera</h2>
      </header>

      <section className="listOfBarbers">
        <h3>Barbers</h3>
      </section>
    </div>
  );
};
export default Barbers;
