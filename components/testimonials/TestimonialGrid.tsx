import { testimonials } from "@/data/Testimonials"
import TestimonialCard from "./TestimonialCard"

const TestimonialGrid = () => {

    const reducedTestimonials = testimonials.slice(0, 9)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
                {reducedTestimonials.map((testimonial, index) => (
                    <TestimonialCard testimonial={testimonial} key={index} />
                ))}
        </div>
    )
}

export default TestimonialGrid
