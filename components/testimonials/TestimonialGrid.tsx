import { testimonials } from "@/data/Testimonials"
import TestimonialCard from "./TestimonialCard"

const TestimonialGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
        ))}
    </div>
  )
}

export default TestimonialGrid
