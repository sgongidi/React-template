import "./Footer.css";
import { Card, Container } from "react-bootstrap";

const Footer = () => {
  return (
      <Card id="footer" className="fixed-bottom">
        <Card.Body>
          <Container>
            <Card.Text>Created by Web Dev Carolina. &copy; 2021</Card.Text>
          </Container>
        </Card.Body>
      </Card>
  );
};

export default Footer;
