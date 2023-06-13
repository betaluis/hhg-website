import { Heading, Text } from "@/components/typography/Text"
import PowerButton from "@/components/PowerButton"
import Button from "@/components/Button"


const Hero = () => {
    return (
        <div className="flex justify-center sm:justify-start">
            <div className="pt-24 pb-44 sm:py-32 lg:py-14">
                <div className="pt-8 sm:pt-4 lg:pt-0">
                    <Heading size="h1" color="none" classes="text-hero-heading">
                        We are mobile <span className="power">power.</span>
                    </Heading>
                </div>
                <div className="py-2 max-w-lg m-auto sm:m-0">
                    <Text color="light" classes="pt-2 pb-2 text-content-light-2">
                        <div className="relative sm:leading-8">
                            <span>Cutting edge solutions for uninterrupted operation and reliable power when engine is</span>
                            <div className="relative pt-4 sm:bottom-[-12px] sm:absolute sm:right-[50%] lg:right-[33%]">
                                <PowerButton type="pill" />
                            </div>
                        </div>
                    </Text>
                </div>
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
            </div>
        </div>
    )
}

export default Hero