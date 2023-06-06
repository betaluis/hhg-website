"use client"
import Container from "@/components/Container"
import GlowCards from "./cards/GlowCards";

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
        <section className="bg-bkg-light blur-group py-8 sm:py-12" onMouseMove={(e: React.MouseEvent) => handleMouse(e)}>
            <Container>
                <div className="grid grid-cols-2 gap-4 gap-y-4 sm:grid-cols-4">
                    {products && products.map((product, index) => (
                        <GlowCards key={index} classes={"card-blur"} product={product} handleMouse={handleMouse} /> 
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default ProductGlowCards
