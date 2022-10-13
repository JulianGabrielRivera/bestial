import { useState } from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="navBar">
      <nav
        onClick={() => {
          setMenu(true);
        }}
      >
        <div className="hamburger-menu">
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
      </nav>
      <div className="auth">
        <Link to="/signup/barber">Barbers</Link>

        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
}
