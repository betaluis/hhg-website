import Features from "@/components/Features"
import NewSection from "@/components/NewSection";

const FeaturesSection = () => {
  return (
    <NewSection bgColor="bg-bkg-white" padding="pt-20" gutters={false}>
        <div className="md:px-[20px]">
            <Features />
        </div>
    </NewSection>
  )
}

export default FeaturesSection;
