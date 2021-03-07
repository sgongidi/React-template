import "./App.css";
import { Container } from "react-bootstrap";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const App = () => {
  const testimonials = [{ author: "AUTHOR", text: "TEXT" }];
  return (
    <Container id="app">
      <Router>
        <NavigationBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/testimonials">
            <Testimonials testimonials={testimonials} />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </Container>
  );
};

export default App;
