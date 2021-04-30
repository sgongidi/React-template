import "./Testimonials.css";

// prop: testimonials = [testimonial]
// testimonial: {author: "TESTIMONIAL_author", text: "TESTIMONIAL_TEXT"}
const Testimonials = ({ testimonials }) => {
    const elements = testimonials.map((testimonials) => <div className="testimonial">
        <h3 className="author">{testimonials.author}</h3>
        <p className="text">{testimonials.text}</p>
        <br />
    </div>)
    return <div id="testimonials">Testimonials:{elements}</div>;
}

export default Testimonials;