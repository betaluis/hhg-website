import { FadeUp } from '@/components/Animations'
import { Heading, SubText } from '@/components/typography/Text'
import TestimonialGrid from '@/components/testimonials/TestimonialGrid'
import NewSection from '@/components/NewSection'

const TestimonialSection = () => {
    return (
        <NewSection bgColor='bg-bkg-white' padding='pt-12 pb-24 lg:pt-24'>
            <FadeUp>
                <Heading size="h2" color="dark" bold={false}>
                    Satisfied Customers Speak
                </Heading>
                <SubText color="dark">
                    Don&apos;t just take our word for it. Learn how we have made an impact across various industries with our innovative power solutions.
                </SubText>
                <TestimonialGrid />
            </FadeUp>
        </NewSection>
    )
}

export default TestimonialSection
