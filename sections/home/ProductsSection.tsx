import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Products from "@/data/Products";

const ProductsSection = () => {
    return (
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
    );
}

export default ProductsSection;
