import Image from "next/image"
import Link from "next/link"

interface Props {
    product: Product;
    classes: string;
    handleMouse: (e: React.MouseEvent) => void;
}
// .gradient-blur {
//     background-color: var(--bkg-green);
//     width: 100%;
//     height: 100%;
//     position: relative;
// }

const GlowCards = ({ product, classes, handleMouse }: Props) => {
  return (
        <div 
            onMouseMove={(e: React.MouseEvent) => handleMouse(e)}
            className={`
                ${classes} group bg-[rgba(255,255,255,0.1)] w-full h-full
                relative p-4 rounded-lg transition-all duration-200 ease-in-out
                before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:transition-opacity before:ease-in-out before:duration-400 before:delay-100 before:rounded-lg before:z-[3]
                after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-opacity after:ease-in-out after:duration-400 after:delay-100 after:rounded-lg after:z-[1]
            `} 
        >
            <div className="
                card-content group-hover:bg-[hsl(220,23%,93%)]
                absolute top-0 left-0 w-[calc(100%-2px)] h-[calc(100%-2px)] bg-bkg-light-1 m-[1px] 
                rounded-lg p-4 z-[2] 
            "></div>
            <div className="z-10 relative">
                <Link href={product.href} className="text-center text-sm md:hover:bg-hover-gray focus:outline-green-600">
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
  )
}

export default GlowCards
