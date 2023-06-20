import { leftNavItems, rightNavItems } from '@/data/NavLinks';
import './globals.css'

import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/Animations';
import Footer from '@/components/Footer';

export const metadata = {
    title: "Harrison Hydra-Gen",
    description: "Discover Harrison Hydra-Gen, the world's leading manufacturer of high-quality hydraulic generators. With over 50 years of experience, we provide reliable and cost-effective solutions for all your power generation needs. Choose Harrison Hydra-Gen and experience the proven dependability and exceptional service that sets us apart.",
}

interface Props {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {

    return (
        <html lang="en" data-theme="light">
            <body className="bg-slate-100">
                <FadeIn>
                    <Navbar
                        leftNavItems={leftNavItems}
                        rightNavItems={rightNavItems}
                    />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </FadeIn>
            </body>
        </html>
    )
}
