import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Route and Routes
import { Home } from "./Home";
import Auth from "./Auth";
import { Navbar } from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} /> {/* Updated to use Route */}
          <Route path='/auth' element={<Auth/>} /> {/* Updated to use Route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
