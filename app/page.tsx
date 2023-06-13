"use client"
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Products from "@/data/Products";
import BlurEffect from "@/components/BlurEffect";
import ProductCards from "@/components/ProductCards";
import OffsetGridImages from "@/components/OffsetGridImages";
import TestimonialGrid from "@/components/testimonials/TestimonialGrid";
import Feature from "@/components/cards/Feature";
import { FadeUp, ScaleIn } from "@/components/Animations";
import { Heading, SubText } from "@/components/typography/Text";
import { motion } from "framer-motion";

// Data
import HomeFeatures from "@/data/HomeFeatures";
const [ feature1, feature2, feature3 ] = HomeFeatures;

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
            <section className="bg-bkg-white lg:pb-24">
                <Container>
                    <OffsetGridImages />
                </Container>
            </section>


            {/* Testimonials section */}
            <section className="bg-bkg-white">
                <Container>
                    <div className="p-10 pt-14 bg-bkg-light rounded-xl flex gap-4">
                        <FadeUp y={20} delay={.2} duration={0.3}>
                            <Feature title={feature1.title} description={feature1.description}>
                                <ScaleIn delay={2.2}>
                                    {feature1.icon}
                                </ ScaleIn>
                            </Feature>
                        </FadeUp>
                        <FadeUp y={20} delay={.6} duration={0.3}>
                            <Feature title={feature2.title} description={feature2.description}>
                                <ScaleIn delay={1.8}>
                                    {feature2.icon}
                                </ScaleIn>
                            </Feature>
                        </FadeUp>
                        <FadeUp  y={20} delay={1} duration={0.3}>
                            <Feature title={feature3.title} description={feature3.description}>
                                <ScaleIn delay={1.4}>
                                    {feature3.icon}
                                </ScaleIn>
                            </Feature>
                        </FadeUp>
                    </div>
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
