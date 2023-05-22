import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Products from "@/data/Products";
import Hero from "@/sections/home/Hero";
import ProductsSection from "@/sections/home/ProductsSection";
import { Heading, Text } from "@/components/typography/Text";
import Button from "@/components/Button";

export default function Home() {

    return (
        <>
            <section className="bg-green-600 relative">
                <Container classes="bg_people">
                    <div className="pt-24 pb-36 sm:pb-24">
                        <div className="pt-8 sm:pt-4 lg:pt-0">
                            <Heading size="h1" color="light">
                                We are mobile power.
                            </Heading>
                        </div>
                        <div className="py-4 max-w-lg m-auto sm:m-0">
                            <Text color="light">
                                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                            </Text>
                        </div>
                        <div className="mt-2 flex flex-col sm:flex-row gap-4">
                            <Button 
                                label="Products" 
                                href="/products" 
                                bold={true}
                                textColor="light"
                                className="bg-slate-600 px-8 bg-gradient-to-t from-slate-700 drop-shadow-[0_2px_0_rgba(30,40,20,1)] hover:from-slate-600"
                                largeMobile={true}
                            />
                            <Button 
                                label="Get in touch" 
                                href="/" 
                                bold={true}
                                textColor="light"
                                className="bg-green-400 px-8 bg-gradient-to-t from-green-500 drop-shadow-[0_2px_0_rgba(22,101,52,1)] hover:from-green-400" 
                                largeMobile={true}
                            />
                        </div>
                    </div>
                </ Container>
            </section>       
            <ProductsSection />
        </>
    )
}
