"use client"
import Container from '@/components/Container'
import { useEffect, useState, useRef } from 'react'
import {motion} from 'framer-motion'

const events = [
    {
        title: 'ConExpo 2023',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events',
        date: "March 14, 2023"
    },
    {
        title: 'Event 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&2',
        date: "June 14, 2023"
    },
    {
        title: 'Event 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&3',
        date: "June 14, 2023"
    },
    {
        title: 'Event 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&4',
        date: "June 14, 2023"
    },
    {
        title: 'Event 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&5',
        date: "June 14, 2023"
    },
    {
        title: 'Event 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events',
        date: "June 14, 2023"
    },
    {
        title: 'Event 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&2',
        date: "June 14, 2023"
    },
    {
        title: 'Event 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&3',
        date: "June 14, 2023"
    },
    {
        title: 'Event 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&4',
        date: "June 14, 2023"
    },
    {
        title: 'Event 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&5',
        date: "July 23, 2023"
    }
]

const Events = () => {

    const [width, setWidth] = useState(0);
    const sliderWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const setTheWidth = () => {
          const slideWidth = sliderWrapper.current?.scrollWidth || 0;
          const containerWidth = sliderWrapper.current?.offsetWidth || 0;
          const slidesVisible = Math.floor(containerWidth / 320); 
          const slideSpacing = 20;
          const lastSlideOffset = Math.max(0, slidesVisible - 1) * 320;
          const newWidth = Math.max(0, slideWidth - containerWidth + lastSlideOffset - slideSpacing);
          setWidth(newWidth);
        }

        setTheWidth();

    }, [width])

    return (
        <div className="py-80 bg-[url('/tradeshow.png')] bg-no-repeat bg-cover relative overflow-hidden">
            <div className='bg-gradient-radial from-white/0 to-black absolute inset-0 grid place-items-center'>
                <Container>
                    <h2 className="text-white mb-16 text-5xl md:text-6xl leading-[3.5rem]">Upcoming <br className="block sm:hidden" /> Events</h2>
                    <motion.div className="slider_wrapper" ref={sliderWrapper} whileTap={{cursor: "grabbing"}}>
                        <motion.div className="inner inline-flex gap-4"
                            drag="x"
                            dragConstraints={{ left: -width - 180, right: 0 }}
                        >
                            {
                                events.map((event, index) => (
                                    <div key={index} className="card min-w-[250px] lg:min-w-[300px] bg-bkg-light-1 rounded-lg drop-shadow-2xl">
                                        <div className="card_img rounded-tr-lg rounded-tl-lg overflow-hidden">
                                            <img src={event.image} className="pointer-events-none object-cover w-full h-auto aspect-video" alt="" />
                                        </div>
                                        <div className="card_header p-4">
                                            <div className="text-lg font-bold text-content-dark-2">{event.title}</div>
                                            <div className="pb-2 text-xs text-gray-500">{event.date}</div>
                                            <div className="pb-4 text-sm text-content-dark-2">{event.description}</div>
                                            <div>
                                                <button className="bg-black text-white rounded-sm text-sm py-2 px-4">Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </motion.div>
                    </motion.div>
                </Container> 
            </div>
        </div>
    )
}

export default Events
