"use client"
import { Heading, SubText } from '../typography/Text'

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
                <SubText color='dark'>{description}</SubText>
            </div>
        </div>
    )
}

export default Feature
