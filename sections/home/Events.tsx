"use client"
import Container from '@/components/Container'
import { useEffect, useState, useRef } from 'react'
import {motion} from 'framer-motion'

const events = [
    {
        title: 'Event 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events',
    },
    {
        title: 'Event 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&2',
    },
    {
        title: 'Event 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&3',
    },
    {
        title: 'Event 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&4',
    },
    {
        title: 'Event 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://source.unsplash.com/random/?events&5',
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
          setWidth(newWidth);;
        }

        setTheWidth();

        window.addEventListener('resize', setTheWidth);
        return () => {
            window.removeEventListener('resize', setTheWidth);
        };

        }, [width])

    return (
        <div className="py-64 bg-[url('/tradeshow.png')] bg-no-repeat bg-cover relative overflow-hidden">
            <div className='bg-gradient-radial from-white/0 to-black/90 absolute inset-0 grid place-items-center'>
                <Container>
                    <h1 className="text-white">Events</h1>
                    <motion.div className="slider_wrapper" ref={sliderWrapper} whileTap={{cursor: "grabbing"}}>
                        <motion.div className="inner inline-flex gap-4"
                            drag="x"
                            dragConstraints={{ left: -width - 180, right: 0 }}
                        >
                            {
                                events.map((event, index) => (
                                    <div key={index} className="card min-w-[250px] lg:min-w-[300px] bg-white rounded-lg drop-shadow-2xl">
                                        <div className="card_img rounded-tr-lg rounded-tl-lg overflow-hidden">
                                            <img src={event.image} className="pointer-events-none object-cover w-full h-auto aspect-video" alt="" />
                                        </div>
                                        <div className="card_header p-4">
                                            <div className="title pb-2 font-bold">{event.title}</div>
                                            <div className="subtitle pb-4 text-sm">{event.description}</div>
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
