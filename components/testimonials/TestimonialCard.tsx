import Image from 'next/image'
import { FadeUp } from "@/components/Animations"

interface Props {
    testimonial: Testimonial,
}

const TestimonialCard = ({ testimonial }: Props) => {
    return (
        <FadeUp>
            <div>
                { 
                    testimonial.quote && 
                    <p className="text-sm text-content-dark-1">
                        &quot;{testimonial.quote[0].slice(0, 180)}...&quot;
                    </p> 
                }
                <div className="flex items-center gap-4 mt-4">
                    {
                        testimonial.image.src ? (
                            <Image
                                src={testimonial.image.src}
                                alt={testimonial.image.alt}
                                width={45}
                                height={45}
                                className="rounded-lg object-cover aspect-square"
                            />
                        ) : (
                            <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                        )
                    }
                    <div className="flex flex-col">
                        <p className="text-content-dark-1 text-sm font-bold">{testimonial.name}</p>
                        {/* TODO: Create variable for text color */}
                        <span className="text-xs text-gray-500">{testimonial.company}</span>
                    </div>
                </div>
            </div>
        </FadeUp>
    )
}

export default TestimonialCard
