import "./App.css";
import HomePage from "./components/HomePage";
import Barbers from "./components/Barbers";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/barbers" element={<Barbers />} />
      </Routes>
    </div>
  );
}

export default App;
