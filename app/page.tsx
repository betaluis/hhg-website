import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Products from "@/data/Products";
import { Heading, Text } from "@/components/typography/Text";
import Button from "@/components/Button";

export default function Home() {

    return (
        <>
            {/* Hero section */}
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

            {/* Products section */}
            <section className="bg-slate-100 py-4 sm:py-6">
                <Container>
                    <div className="grid grid-cols-2 gap-2 gap-y-4 sm:grid-cols-4">
                        {Products.map((product, index) => (
                            <Link key={index} href={product.href} className="text-center text-sm hover:bg-gray-200 rounded-xl pb-4">
                                <div className="flex justify-center items-end">
                                    <Image
                                        src={product.image.src}
                                        alt={product.image.alt}
                                        width={product.image.width}
                                        height={product.image.height}
                                        className={`${product.image?.scale === "smaller" ? "scale-[.7]" : product.image?.scale === "small" ? "scale-[.8]" : product.image?.scale === "large" ? "scale-125" : ""} translate-y-3 object-contain aspect-square`}
                                    />
                                </div>
                                <div className="text-sm md:text-base text-gray-600">
                                    {product.label}
                                </div>
                            </Link>
                        ))}
                    </div>
                </ Container>
            </section>
        </>
    )
}
