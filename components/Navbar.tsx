import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import MobileMenu from "@/components/MobileMenu";
import ContactIcon from "@/components/icons/ContactIcon";
import { ChevDown } from "@/components/icons/Generic";

interface Props {
    leftNavItems: NavItem[];
    rightNavItems: NavItem[];
}

interface NavListProps {
    links: NavItem[];
    subList?: NavItem[];
    mr?: boolean;
    ml?: boolean;
}

const SubList = ({ items }: { items: NavItem[] }) => {
    return (
        <ul className="rounded-lg triangle absolute -left-12 top-14 bg-bkg-light min-w-[280px] p-4 opacity-0 pointer-events-none before:block before:h-4 before:w-full before:absolute before:-top-4 before:left-0 group-hover:pointer-events-auto group-hover:opacity-100 duration-150 transition-opacity">
            {items && items.map(({ href, label, icon }, index) => (
                <Link key={index} href={href}>
                    <li className="text-sm flex items-center space-x-3 py-3 px-3 rounded-lg hover:bg-hover-gray">
                        <div>
                            {icon?.sm}
                        </div>
                        <div className="text-content-dark-1">
                            {label}
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    )
}

const NavItem = ({ href, label, sublist }: NavItem) => (
    <div className="relative group hover:bg-hover-gray">
        <Link href={href}>
            <li className="flex items-center gap-[1px] text-content-dark-1 py-2 px-3 group">
                {label}
                {sublist ? <ChevDown /> : null}
            </li>
        </Link>
        {sublist && <SubList items={sublist} />}
    </div>
)

const NavList = ({ links, mr, ml }: NavListProps): JSX.Element => (
    <ul className={`
        flex
        ${mr ? 'mr-auto' : ''}
        ${ml ? 'ml-auto' : ''}
    `}>
        {links.map(({ href, label, sublist }) => (
            <NavItem
                key={`${href}${label}`}
                href={href}
                label={label}
                sublist={sublist}
            />
        ))}
    </ul>
)

const Navbar = ({ leftNavItems, rightNavItems }: Props) => {

    return (
        <nav className="bg-bkg-light relative z-20">

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
            <div className="lg:hidden">
               <Container fixed={true} outline={true}>
                    <div className="flex items-center justify-center py-2 lg:hidden">
                        <MobileMenu />
                        <Image
                            src="/white-logo.png"
                            alt="Harrison Hydra-Gen logo"
                            width={80}
                            height={30}
                            className="white-logo hidden dark:block mr-auto ml-auto w-auto h-auto"
                        />
                        <Image
                            src="/logo.png"
                            alt="Harrison Hydra-Gen logo"
                            width={80}
                            height={30}
                            className="dark-logo dark:hidden mr-auto ml-auto w-auto h-auto"
                        />
                        <Link href="/contact">
                            <ContactIcon />
                        </Link>
                    </div>
                </Container>
            </div>
        </nav>
    )
}

export default Navbar;

