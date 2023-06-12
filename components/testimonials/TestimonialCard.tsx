import Image from 'next/image'
import { FadeUp } from "@/components/Animations"

interface Props {
    testimonial: Testimonial,
}

const TestimonialQuote = ({ testimonial }: Props) => {
    return (
        testimonial.quote && testimonial.quote[0].length > 180 ? (
            <p className="text-sm text-content-dark-1">
                &quot;{testimonial.quote[0].slice(0, 180)}...&quot;
                &nbsp;<span className="text-primary underline cursor-pointer">more</span>
            </p>
        ) : (
            <p className="text-sm text-content-dark-1">{testimonial.quote[0]}</p>
        )
    )
}

const TestimonialImage = ({ testimonial }: Props) => {
    return (
        testimonial.image.src ? (
            <Image
                src={testimonial.image.src}
                alt={testimonial.image.alt}
                width={45}
                height={45}
                className="rounded-lg object-cover aspect-square"
            />
        ) : (
            <div className="w-10 h-10 rounded-lg bg-gray-300 relative overflow-hidden">
                    <svg className="absolute -bottom-[5px] fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="person">
                        <g data-name="Layer 2">
                            <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" data-name="person"></path>
                        </g>
                    </svg>
            </div>
        )
    )
}

const Source = ({ testimonial }: Props) => {
    return (
        <div className="flex flex-col">
            <p className="text-content-dark-1 text-sm font-bold">{testimonial.name}</p>
            {/* TODO: Create variable for text color */}
            <span className="text-xs text-gray-500">{testimonial.company}</span>
        </div>
    )
}

const TestimonialCard = ({ testimonial }: Props) => {
    return (
        <FadeUp>
            <div>
                <TestimonialQuote testimonial={testimonial} />
                <div className="flex items-center gap-4 mt-4">
                    <TestimonialImage testimonial={testimonial} />
                    <Source testimonial={testimonial} />
                </div>
            </div>
        </FadeUp>
    )
}

export default TestimonialCard
