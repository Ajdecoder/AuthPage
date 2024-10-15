import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Auth from "./components/Auth";
import { Navbar } from "./components/Navbar";
import { CreateResume } from "./components/Resume-create";
import ResumeText from "./components/ShowResumeText";

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/auth' element={<Auth/>} /> 
          <Route path="resume/create" element={<CreateResume/>} />
          <Route path="resume/create/resume-text" element={<ResumeText/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
