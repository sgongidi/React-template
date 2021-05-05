import { Container } from "react-bootstrap";
// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
// import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import { home } from "../../config";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Container id="app">
          <div id="home" style={{marginTop: "5vh"}}><p>{home}</p></div>
          <About />
          <Testimonials />
          <Contact />
          <Footer />
      </Container>
    </Router>
  );
};

export default App;
