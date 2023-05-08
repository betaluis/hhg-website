import Link from 'next/link';
import Image from 'next/image';
import { NavItem } from "@ts/interfaces/app_interfaces";

import Container from "@components/Container";

interface Props {
    leftNavItems: NavItem[];
    rightNavItems: NavItem[];
}

const NavItem = ({ href, label }: NavItem) => (
    <Link href={href}>
        <li className="py-2 px-3 hover:bg-gray-300">{label}</li>
    </Link>
)


const Navbar = ({ leftNavItems, rightNavItems }: Props) => {
    return (
        <nav className="bg-slate-100">

            {/* desktop navigation */}
            <Container>
                <Link href="/" className="pr-3">
                    <Image src="/hPower.svg" alt="Harrison Hydra-Gen Logo" width={30} height={30} />
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
            </Container>

            {/* mobile navigation */}
            <Container>
                <Image
                    src="/logo.png"
                    alt="Harrison Hydra-Gen logo"
                    width={30}
                    height={30}
                />
                <ul className="flex">
                    {rightNavItems.map(({ href, label }) => (
                        <NavItem key={`${href}${label}`} href={href} label={label} />
                    ))}
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;

