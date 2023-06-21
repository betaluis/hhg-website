import Products from "@/data/Products";
import ProductCards from "@/components/ProductCards";
import { 
    CompanyAgeSection, 
    Events, 
    FeaturesSection, 
    Hero, 
    TestimonialSection 
} from "@/sections/home";

export default function Home() {

    return (
        <>
            <Hero />

            <ProductCards products={Products} />

            <CompanyAgeSection />

            <FeaturesSection />

            <TestimonialSection />

            <Events />
        </>
    )
}
