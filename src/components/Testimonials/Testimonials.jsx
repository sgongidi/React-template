import "./Testimonials.css";

// prop: testimonials = [testimonial]
// testimonial: {author: "TESTIMONIAL_author", text: "TESTIMONIAL_TEXT"}
const Testimonials = ({ testimonials }) => {
    return(
        <div id="testimonials">
            Testimonials:
            <br />
            Author: {testimonials[0].author}
            <br />
            Text: {testimonials[0].text}
        </div>
    );
}

export default Testimonials;