import "./Contact.css";

const Contact = () => {
  const email = "";
  const phone = "";
  const address1 = "";
  const address2 = "";
  return (
      <div id="contact">
          <h1 id="contactTitle">Contact</h1>
          <p><strong>Email: </strong>{email}</p>
          <p><strong>Phone: </strong>{phone}</p>
          <p><strong>Address:</strong></p>
          <p>{address1}</p>
          <p>{address2}</p>
      </div>
  );
};

export default Contact;
