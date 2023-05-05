import Link from 'next/link';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Harrison Hydra-Gen",
    description: "Discover Harrison Hydra-Gen, the world's leading manufacturer of high-quality hydraulic generators. With over 50 years of experience, we provide reliable and cost-effective solutions for all your power generation needs. Choose Harrison Hydra-Gen and experience the proven dependability and exceptional service that sets us apart.",
}

interface Props {
    children: React.ReactNode;
}

const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/team", label: "Team" },
    { href: "/news", label: "News" },
    { href: "/media", label: "Media" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen">
                    <nav>
                        <ul>
                            {navItems.map(({ href, label }) => (
                                <li key={`${href}${label}`}><Link href={href}>{label}</Link></li>
                            ))}
                        </ul>
                    </nav>
                    {children}
                </div>
            </body>
        </html>
    )
}
