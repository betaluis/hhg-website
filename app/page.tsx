import Image from "next/image"
import Container from "@/components/Container";
import Products from "@/data/Products";
import { Heading, Text } from "@/components/typography/Text";
import Button from "@/components/Button";
import BlurEffect from "@/components/BlurEffect";
import ProductGlowCards from "@/components/ProductGlowCards";
import PowerButton from "@/components/PowerButton";

export default function Home() {

    return (
        <>
            {/* Hero section with button */}
            <section className="bg-bkg-green relative">
                <BlurEffect>
                    <Container classes="bg_people">
                        <div className="flex justify-center sm:justify-start">
                            <div className="pt-24 pb-44 sm:py-32 lg:py-14">
                                <div className="pt-8 sm:pt-4 lg:pt-0">
                                    <Heading size="h1" color="none" classes="text-hero-heading">
                                        We are mobile power.
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
                    </ Container>
                </ BlurEffect>
            </section>


            {/* Products section */}
            <ProductGlowCards products={Products} />

            {/* About section */}
            <section className="bg-bkg-white">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-24 sm:pt-16 sm:pb-32">
                        <div className="grid grid-cols-2 gap-4 grid-rows-[repeat(2,150px)]">
                            <div className="bg-red-300 rounded-lg">
                                <img
                                    alt="Harrison HydraGen Firetruck"
                                    src="https://images.unsplash.com/photo-1531431199010-1f9985f83baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                                    sizes="100%"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="bg-blue-300 rounded-lg mt-12">
                                <img
                                    alt="Harrison HydraGen Firetruck"
                                    src="https://images.unsplash.com/photo-1625258110620-b213f56b9267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    sizes="100%"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="bg-red-300 rounded-lg mt-2">
                                <img
                                    alt="Harrison HydraGen Firetruck"
                                    src="https://img.freepik.com/premium-photo/group-cranes-music-festival_489084-46.jpg?size=626&ext=jpg&uid=P90423329&ga=GA1.2.1147737919.1683060295&semt=location_fest_v1"
                                    sizes="100%"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="bg-blue-300 rounded-lg mt-14">
                                <img
                                    alt="Harrison HydraGen Firetruck"
                                    src="https://img.freepik.com/premium-photo/industrial-machinery-working-with-asphal-industrial-laying-fresh-asphalt_73110-7943.jpg?w=1060"
                                    sizes="100%"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start mt-24">
                            <h2 className="text-2xl font-bold text-content-dark-1">
                                Leading the industry since 1969
                            </h2>
                            <p className="text-base mt-2 text-content-dark-1">
                                For over five decades, Harrison HydraGen has been at the forefront of the industry, revolutionizing mobile power solutions. With our extensive experience and expertise, we have set the standard for excellence and innovation in the field.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
