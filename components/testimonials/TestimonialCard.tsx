"use client"
import { useRef, useEffect, useState } from "react"
import Image from 'next/image'
import { FadeUp } from "@/components/Animations"

interface Props {
    testimonial: Testimonial,
}

interface QuoteProps extends Props {
    openModal: () => void,
}

declare const dialogPolyfill: {
    registerDialog(dialog: HTMLElement): void;
};

const TestimonialQuote = ({ testimonial, openModal }: QuoteProps) => {
    return (
        testimonial.quote && testimonial.quote[0].length > 180 ? (
            <p className="text-sm text-content-dark-1">
                &quot;{testimonial.quote[0].slice(0, 180)}...&quot;
                &nbsp;<button className="text-primary underline cursor-pointer focus:outline-primary focus:border-none" onClick={openModal}>read more</button>
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

const FullTestimonial = ({ testimonial, closeModal }: { testimonial: Testimonial, closeModal: () => void }) => {
    return (
        <div className="relative">
            <div className="flex gap-4">
                <TestimonialImage testimonial={testimonial} />
                <Source testimonial={testimonial} />
                <button 
                    onClick={closeModal} 
                    className="block p-3 rounded-full hover:bg-hover-gray absolute -top-6 -right-6"
                >
                    <svg className="stroke-content-dark-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="x"><path fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 1 1 13M1 1l12 12"></path></svg>
                </button>
            </div>
            {
                testimonial.quote.map((paragraph, index) => (
                    <p key={index} className="text-sm text-content-dark-1 my-4">{paragraph}</p>
                ))
            }
        </div>
    )
}

const TestimonialCard = ({ testimonial }: Props) => {

    const dialogRef = useRef<HTMLDialogElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const getScrollbarWidth = () => {
            const scrollDiv = document.createElement('div');
            scrollDiv.style.width = '100px';
            scrollDiv.style.height = '100px';
            scrollDiv.style.overflow = 'scroll';
            scrollDiv.style.position = 'absolute';
            scrollDiv.style.top = '-9999px';
            document.body.appendChild(scrollDiv);
            const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            return scrollbarWidth;
        }

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${getScrollbarWidth()}px`;
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.marginRight = "0";
        }
    }, [isOpen]);


    useEffect(() => {
        const dialogElement = dialogRef.current;

        if (dialogElement) {
            if (!dialogElement.showModal) {
                dialogPolyfill.registerDialog(dialogElement);
            }
        }

    }, [])

    const openModal = () => {
        const dialogElement = dialogRef.current;

        if (dialogElement) {
            dialogElement.showModal();
            setIsOpen(true);
        }
    }

    const closeModal = () => {
        const dialogElement = dialogRef.current;

        if (dialogElement) {
            dialogElement.close();
            setIsOpen(false);
        }
    }

    return (
        <FadeUp y={50} delay={0}>
            <div>
                <TestimonialQuote testimonial={testimonial} openModal={openModal} />
                <div className="flex items-center gap-4 mt-4">
                    <TestimonialImage testimonial={testimonial} />
                    <Source testimonial={testimonial} />
                </div>
            </div>
            <dialog ref={dialogRef}
                className="bg-bkg-light mx-[20px] p-8 rounded-lg max-w-2xl shadow-[0px_4px_5px_2px_rgba(0,0,0,0.2)] md:mx-auto backdrop:bg-[rgba(0,0,0,.5)] backdrop:backdrop-blur-sm"
            >
                <FullTestimonial testimonial={testimonial} closeModal={closeModal} /> 
            </dialog>
        </FadeUp>
    )
}

export default TestimonialCard
