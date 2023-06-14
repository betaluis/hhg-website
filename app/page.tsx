import Products from "@/data/Products";
import ProductCards from "@/components/ProductCards";
import { CompanyAgeSection, FeaturesSection, Hero, TestimonialSection } from "@/sections/home";
import BlurEffect from "@/components/BlurEffect";
import Container from "@/components/Container";

export default function Home() {

    return (
        <>
            {/* <Hero /> */}
        <section className="bg-bkg-green relative">
            <BlurEffect>
                <Container classes="bg_people">
                    <div className="flex justify-center sm:justify-start">
                        <div className="pt-24 pb-44 sm:py-32 lg:py-14">
                            <h1 className="text-white pt-24">Hello</h1>
                        </div>
                    </div>
                </Container>
            </BlurEffect>
        </section>


            <ProductCards products={Products} />

            <CompanyAgeSection />

            <FeaturesSection />

            <TestimonialSection />
        </>
    )
}
