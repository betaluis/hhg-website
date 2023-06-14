import Products from "@/data/Products";
import ProductCards from "@/components/ProductCards";
import { CompanyAgeSection, FeaturesSection, Hero, TestimonialSection } from "@/sections/home";
import BlurEffect from "@/components/BlurEffect";
import Container from "@/components/Container";

export default function Home() {

    return (
        <>
            <Hero />

            <ProductCards products={Products} />

            <CompanyAgeSection />

            <FeaturesSection />

            <TestimonialSection />
        </>
    )
}
