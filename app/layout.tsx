import Link from 'next/link';
import Image from 'next/image';
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

interface NavItem {
    href: string;
    label: string;
}

const leftNavItems: NavItem[] = [
    { href: "/products", label: "Products" },
    { href: "/news", label: "News" },
    { href: "/media", label: "Media" },
];

const rightNavItems: NavItem[] = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const NavItem = ({ href, label }: NavItem) => (
    <Link href={href}><li className="py-2 px-3 hover:bg-gray-300">{label}</li></Link>
)

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen">
                    <nav className="bg-red-50">
                        <div className='max-w-[1000px] m-auto flex items-center'>
                            <Link href="/" className="pr-3">
                                <Image src="/hPower.svg" alt="Harrison Hydra-Gen" width={30} height={30} />
                            </Link>
                            <ul className="mr-auto flex">
                                {leftNavItems.map(({ href, label }) => (
                                    <NavItem key={`${href}${label}`} href={href} label={label} />
                                ))}
                            </ul>
                            <ul className="flex">
                                {rightNavItems.map(({ href, label }) => (
                                    <NavItem key={`${href}${label}`} href={href} label={label} />
                                ))}
                            </ul>
                        </div>
                    </nav>
                    {children}
                </div>
            </body>
        </html>
    )
}
