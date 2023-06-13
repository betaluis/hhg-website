import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Products from "@/data/Products";
import BlurEffect from "@/components/BlurEffect";
import ProductCards from "@/components/ProductCards";
import OffsetGridImages from "@/components/OffsetGridImages";
import TestimonialGrid from "@/components/testimonials/TestimonialGrid";
import { FadeUp } from "@/components/Animations";
import { Heading, SubText } from "@/components/typography/Text";

export default function Home() {

    return (
        <>
            {/* Hero section with button */}
            <section className="bg-bkg-green relative">
                <BlurEffect>
                    <Container classes="bg_people">
                        <Hero />
                    </ Container>
                </ BlurEffect>
            </section>


            {/* Products section */}
            <ProductCards products={Products} />

            {/* About section */}
            <section className="bg-bkg-white">
                <Container>
                    <OffsetGridImages />
                </Container>
            </section>

            {/* Testimonials section */}
            <section 
                className="
                    bg-bkg-white pt-12 pb-24
                    lg:pt-24
                "
            >
                <Container>
                    <FadeUp>
                        <Heading size="h2" color="dark" bold={false}>
                            Satisfied Customers Speak
                        </Heading>
                        <SubText color="dark">
                            Don&apos;t just take our word for it. Learn how we have made an impact across various industries with our innovative power solutions.
                        </SubText>
                        <TestimonialGrid />
                    </FadeUp>
                </Container>
            </section>
        </>
    )
}
