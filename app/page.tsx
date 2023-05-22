import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Products from "@/data/Products";
import Hero from "@/sections/home/Hero";
import ProductsSection from "@/sections/home/ProductsSection";

export default function Home() {

    return (
        <>
            <Hero />
            <ProductsSection />
        </>
    )
}
