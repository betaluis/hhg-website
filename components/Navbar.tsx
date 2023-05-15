import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import MobileMenu from "@/components/MobileMenu";
import ContactIcon from "@/components/icons/ContactIcon";

interface Props {
    leftNavItems: NavItem[];
    rightNavItems: NavItem[];
}

interface NavListProps {
    links: NavItem[];
    mr?: boolean;
    ml?: boolean;
}


const NavItem = ({ href, label }: NavItem) => (
    <Link href={href}>
        <li className="py-2 px-3 hover:bg-gray-300">{label}</li>
    </Link>
)

const NavList = ({ links, mr, ml }: NavListProps): JSX.Element  => (
    <ul className={`
        flex
        ${mr ? 'mr-auto' : ''}
        ${ml ? 'ml-auto' : ''}
    `}>
        {links.map(({ href, label }) => (
            <NavItem key={`${href}${label}`} href={href} label={label} />
        ))}
    </ul>
)

const Navbar = ({ leftNavItems, rightNavItems }: Props) => {

    return (
        <nav className="bg-slate-100">

            {/* desktop navigation */}
            <Container>
                <div className="hidden lg:flex items-center justify-between">
                    <Link href="/" className="pr-3">
                        <Image src="/hPower.svg" alt="Harrison Hydra-Gen Logo" width={30} height={30} />
                    </Link>
                    <NavList links={leftNavItems} mr={true} />
                    <NavList links={rightNavItems} />
                </div>
            </Container>

            {/* mobile navigation */}
            <Container fixed={true}>
                <div className="flex items-center justify-center py-2 lg:hidden">
                    <MobileMenu />
                    <Image
                        src="/logo.png"
                        alt="Harrison Hydra-Gen logo"
                        width={80}
                        height={30}
                        className="mr-auto ml-auto w-auto h-auto"
                    />
                    <Link href="/contact">
                        <ContactIcon />
                    </Link>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;

