import { Navbar, Nav } from 'react-bootstrap';
import { colors } from "../../config";
import { HashLink as HLink } from "react-router-hash-link";

const Navigationbar = () => {
    return (
        <Navbar expand="sm" sticky="top" className="navbar shadow" variant="dark" style={{backgroundColor: colors.primary, padding: "15px"}}>
            <Navbar.Brand as={HLink} smooth to="/#">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav variant="pills" >
                <Nav.Link as={HLink} scroll={el => el.scrollIntoView({behavior: "smooth", block: "center"})} to="/#about">About</Nav.Link>
                <Nav.Link as={HLink} scroll={el => el.scrollIntoView({behavior: "smooth", block: "center"})} to="/#testimonials">Testimonials</Nav.Link>
                <Nav.Link as={HLink} scroll={el => el.scrollIntoView({behavior: "smooth", block: "center"})} to="/#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;