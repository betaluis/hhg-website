"use client"
import { Heading } from '../typography/Text'

interface Props {
    children: React.ReactNode,
    title: string,
    description: string
}

const Feature = ({ children, title, description }: Props) => {
    return (
        <div className="flex flex-col relative">
            <div className="absolute left-6 -top-8">
                {children}
            </div>
            <div className='p-4 pt-12 bg-bkg-white rounded-lg'>
                <Heading color='dark' size='h3'>{title}</Heading>
                <p className="
                    text-sm text-content-dark-1 mt-4 max-w-2xl
                    sm:mt-3 
                    md:text-sm md:mt-2 
                    ">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Feature
