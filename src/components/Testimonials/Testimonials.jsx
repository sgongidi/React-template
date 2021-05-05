import "./Testimonials.css";
import { Card } from "react-bootstrap";
import { testimonials, colors } from "../../config";

// testimonial: {author: "TESTIMONIAL_author", text: "TESTIMONIAL_TEXT"}
const Testimonials = () => {
    return <div id="testimonials">
        <h2>Testimonials</h2>
        {testimonials.map(testimonial => (
            <Card className="testimonial shadow" key={testimonial.author} style={{backgroundColor: colors.secondary}}>
            <Card.Body>
                <p className="text">{testimonial.text}</p>
                <footer className="author">-  {testimonial.author}</footer>
            </Card.Body>
            </Card>
        ))}
    </div>;
}

export default Testimonials;