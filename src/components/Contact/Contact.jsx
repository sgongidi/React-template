import "./Contact.css";
import { Card } from "react-bootstrap";
import { contact } from "../../config";

const Contact = () => {
  return (
      <Card id="contact" className="shadow" style={{marginBottom: "15vh"}}>
      <Card.Header id="contactTitle">Contact Us!</Card.Header>
      <Card.Body>
          <p><strong>Email: </strong>{contact.email}</p>
          <p><strong>Phone: </strong>{contact.phone}</p>
          <p><strong>Address: </strong><p>{contact.address1}<br />{contact.address2}</p></p>
          
      </Card.Body>
      </Card>
  );
};

export default Contact;
