import "./Footer.css";
import { Card, Container } from "react-bootstrap";
import { colors } from "../../config";

const Footer = () => {
  return (
      <Card id="footer" className="fixed-bottom" style={{backgroundColor: colors.primary}}>
        <Card.Body>
          <Container>
            <Card.Text style={{color: colors.secondary}}>&copy; Web Dev Carolina.</Card.Text>
          </Container>
        </Card.Body>
      </Card>
  );
};

export default Footer;
