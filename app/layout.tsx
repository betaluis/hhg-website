import { leftNavItems, rightNavItems } from '@/data/NavLinks';
import './globals.css'

import Navbar from '@/components/Navbar';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Harrison Hydra-Gen",
    description: "Discover Harrison Hydra-Gen, the world's leading manufacturer of high-quality hydraulic generators. With over 50 years of experience, we provide reliable and cost-effective solutions for all your power generation needs. Choose Harrison Hydra-Gen and experience the proven dependability and exceptional service that sets us apart.",
}

interface Props {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {

    const rgb = () => `
        rgb(${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)})`
    
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar
                    leftNavItems={leftNavItems}
                    rightNavItems={rightNavItems}
                />
                <div className={`min_h_screen pt-8`} style={{ backgroundColor: rgb()}}>
                    {children}
                </div>
                <div className={`min_h_screen pt-8`} style={{ backgroundColor: rgb()}}>
                    {children}
                </div>
                <div className={`min_h_screen pt-8`} style={{ backgroundColor: rgb()}}>
                    {children}
                </div>
            </body>
        </html>
    )
}
