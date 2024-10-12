import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Auth from "./components/Auth";
import { Navbar } from "./components/Navbar";

function App() {

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
