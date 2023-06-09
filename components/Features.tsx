"use client"

import { FadeUp, ScaleIn } from "./Animations"
import Feature from "./cards/Feature"
import HomeFeatures from "@/data/HomeFeatures"
const [feature1, feature2, feature3] = HomeFeatures;

const Features = () => {
    return (
        <div className="p-10 pt-14 bg-bkg-light-1 
            grid grid-cols-1 gap-4 gap-y-14 
            md:grid-cols-2 md:gap-y-6 md:rounded-lg
            lg:grid-cols-3 lg:gap-y-8
            "
        >
            <FadeUp y={20} delay={.2} duration={0.3}>
                <Feature title={feature1.title} description={feature1.description}>
                    <ScaleIn delay={2.2}>
                        {feature1.icon}
                    </ ScaleIn>
                </Feature>
            </FadeUp>
            <FadeUp y={20} delay={.6} duration={0.3}>
                <Feature title={feature2.title} description={feature2.description}>
                    <ScaleIn delay={1.8}>
                        {feature2.icon}
                    </ScaleIn>
                </Feature>
            </FadeUp>
            <FadeUp  y={20} delay={1} duration={0.3}>
                <Feature title={feature3.title} description={feature3.description}>
                    <ScaleIn delay={1.4}>
                        {feature3.icon}
                    </ScaleIn>
                </Feature>
            </FadeUp>
        </div>
    )
}

export default Features
