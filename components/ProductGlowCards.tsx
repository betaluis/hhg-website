"use client"
import Image from "next/image"
import Link from "next/link"
import Container from "@/components/Container"

interface Props {
    products: Product[];
}

const ProductGlowCards = ({ products }: Props) => {

    const handleMouse = (e: React.MouseEvent) => {

        const cards = document.querySelectorAll(".card-blur") as NodeListOf<HTMLDivElement>;
        cards.forEach((card: HTMLDivElement) => {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--x-mouse", `${x}px`);
            card.style.setProperty("--y-mouse", `${y}px`);
        });
    }

    return (
        <section className="bg-bkg-light blur-group py-4 sm:py-12" onMouseMove={(e: React.MouseEvent) => handleMouse(e)}>
            <Container>
                <div className="grid grid-cols-2 gap-4 gap-y-4 sm:grid-cols-4">
                    {products && products.map((product, index) => (
                        <div key={index} className="card-blur" onMouseMove={(e: React.MouseEvent) => handleMouse(e)}>
                            <div className="card-content"></div>
                            <div className="z-10 relative">
                                <Link href={product.href} className="text-center text-sm md:hover:bg-hover-gray">
                                    <div className="flex justify-center items-end">
                                        <Image
                                            src={product.image.src}
                                            alt={product.image.alt}
                                            width={product.image.width}
                                            height={product.image.height}
                                            className={`${product.image?.scale === "smaller" ? "scale-[.7]" : product.image?.scale === "small" ? "scale-[.8]" : product.image?.scale === "large" ? "scale-125" : ""} translate-y-3 object-contain aspect-square`}
                                        />
                                    </div>
                                    <div className="text-sm md:text-base text-content-dark-1">
                                        {product.label}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default ProductGlowCards
