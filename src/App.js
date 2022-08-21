import logo from "./logo.svg";
import image from "./undraw_Dev_productivity_Home.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import Skills from "./Component/Skills";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      {/* <Skills></Skills> */}
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
