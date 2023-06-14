import PowerButton from "@/components/PowerButton"
import Button from "@/components/Button"
import Container from "@/components/Container"
import BlurEffect from "@/components/BlurEffect"

const Heading = () => {
    return (
        <div className="pt-8 sm:pt-4 lg:pt-0">
            <h1 className="text-center sm:text-left text-3xl sm:text-4xl lg:text-5xl font-black text-hero-heading">
                We are mobile <span className="power">power.</span>
            </h1>
        </div>
    )
}

const Text = () => {
    return (
        <div className="py-2 max-w-lg m-auto sm:m-0">
            <div className="pt-2 pb-2">
                <div className="
                    relative text-content-light-2 text-center text-sm
                    sm:leading-8 sm:text-left sm:text-base
                    lg:text-lg"
                >
                    <span>Cutting edge solutions for uninterrupted operation and reliable power when engine is</span>
                    <div className="relative pt-4 sm:bottom-[-12px] sm:absolute sm:right-[50%] lg:right-[33%]">
                        <PowerButton type="pill" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Buttons = () => {
    return (
        <div className="mt-2 flex flex-col sm:flex-row gap-4">
            <Button
                label="Products"
                href="/products"
                bold={true}
                textColor="light"
                className="bg-dark-gradient hover:bg-dark-gradient-hover px-8 drop-shadow-[0_2px_0_rgba(24_24_27,1)]"
                largeMobile={true}
            />
            <Button
                label="Get in touch"
                href="/"
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
                <Container classes="bg_people">
                    <div className="flex justify-center sm:justify-start">
                        <div className="pt-24 pb-44 sm:py-32 lg:py-14">
                            <Heading />
                            <Text />
                            <Buttons />
                        </div>
                    </div>
                </Container>
            </BlurEffect>
        </section>

    )
}

export default Hero
