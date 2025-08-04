
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Enquiry from "./Enquiry/Enquiry";
import About from "./About/About";
import Courses from "./Courses/Courses";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/enquiry" element={<Enquiry/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/*" element={<NotFoundPage/>}></Route>

      </Routes>
    </Router>
  )
}

export default App;
