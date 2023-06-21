import PowerButton from "@/components/PowerButton"
import Button from "@/components/Button"
import Container from "@/components/Container"
import BlurEffect from "@/components/BlurEffect"
import Form from "@/components/Form"
import { FadeUp } from "@/components/Animations"

const Heading = () => {
    return (
        <div className="pt-8 sm:pt-4 lg:pt-0">
            <h1 className="
                text-center text-4xl font-black text-hero-heading
                sm:text-6xl 
                md:text-7xl 
                lg:text-6xl lg:text-left"
            >
                We are mobile <span className="power">power.</span>
            </h1>
        </div>
    )
}

const Text = () => {
    return (
        <div className="pt-6 pb-4 max-w-lg m-auto lg:m-0">
            <div className="
                relative text-content-light-2 text-center text-sm
                sm:leading-8 sm:text-base
                lg:text-lg lg:text-left lg:leading-9"
            >
                <span>Cutting edge solutions for uninterrupted operation and reliable power when engine is</span>
                <div className="relative pt-4 sm:bottom-[-12px] lg:absolute lg:right-[33%]">
                    <PowerButton type="pill" />
                </div>
            </div>
        </div>
    )
}

const Buttons = () => {
    return (
        <div className="
            mt-2 flex flex-col gap-4
            sm:justify-center sm:flex-row sm:mt-8
            lg:justify-start lg:mt-4
        ">
            <Button
                label="Products"
                href="/products"
                bold={true}
                textColor="light"
                className="bg-dark-gradient hover:bg-dark-gradient-hover px-8 drop-shadow-[0_2px_0_rgba(24_24_27,1)]"
                largeMobile={true}
            />
            <Button
                label="Contact"
                href="/contact"
                bold={true}
                textColor="light"
                className="bg-green-gradient hover:bg-green-gradient-hover px-8 drop-shadow-[0_2px_0_rgba(22,101,52,1)]"
                largeMobile={true}
            />
        </div>
    )
}


const Hero = () => {
    return (
        <section className="bg-bkg-green relative">
            <BlurEffect>
                <Container>
                    <div className="flex justify-center flex-col lg:flex-row sm:justify-between pb-10 lg:pt-10">
                        <FadeUp delay={1}>
                            <div className="pt-24 pb-16">
                                <Heading />
                                <Text />
                                <Buttons />
                            </div>
                        </FadeUp>
                        <div className="">
                            <FadeUp delay={1.8}>
                                <Form />
                            </FadeUp>
                        </div>
                    </div>
                </Container>
            </BlurEffect>
        </section>
    )
}

export default Hero
