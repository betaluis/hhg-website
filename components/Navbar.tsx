import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import MobileMenu from "@/components/MobileMenu";
import ContactIcon from "@/components/icons/ContactIcon";
import { ChevDown } from "@/components/icons/Generic";
import PowerButton from "./PowerButton";

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
        <ul className="
            rounded-lg absolute -left-12 top-14 bg-bkg-light-1 min-w-[280px] p-4 opacity-0 pointer-events-none
            group-hover:pointer-events-auto group-hover:opacity-100 duration-150 transition-opacity 
            before:h-4 before:w-full before:absolute before:-top-4 before:left-0 before:opacity-0 
            after:absolute after:-top-3 after:left-[31%]
            after:h-0 after:w-0
            after:border-r-transparent after:border-r-[20px] 
            after:border-l-transparent after:border-l-[20px] 
            after:border-b-bkg-light-1 after:border-b-[20px]
        ">
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
        <Link href={href} className="outline-green-600">
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
        <nav className="bg-bkg-light-1 relative z-20">

            {/* desktop navigation */}
            <Container>
                <div className="hidden lg:flex items-center justify-between">
                    <Link href="/" className="pr-3 focus:outline-green-600">
                        <Image src="/hPower.svg" alt="Harrison Hydra-Gen Logo" width={30} height={30} />
                    </Link>
                    <NavList links={leftNavItems} mr={true} />
                    <NavList links={rightNavItems} />
                    <div className="ml-2">
                        <PowerButton type="small" />
                    </div>
                </div>
            </Container>

            {/* mobile navigation */}
            <div className="lg:hidden">
               <Container fixed={true} outline={true}>
                    <div className="flex items-center justify-center py-2 lg:hidden">
                        <MobileMenu />
                        <Link href={"/"} className="mr-auto ml-auto hidden dark:block white-logo" >
                            <Image
                                src="/white-logo.png"
                                alt="Harrison Hydra-Gen logo"
                                width={80}
                                height={30}
                                className="white-logo hidden dark:block w-auto h-auto"
                            />
                        </Link>
                        <Link href={"/"} className="mr-auto ml-auto block dark:hidden dark-logo">
                            <Image
                                src="/logo.png"
                                alt="Harrison Hydra-Gen logo"
                                width={80}
                                height={30}
                                className="dark-logo dark:hidden mr-auto ml-auto w-auto h-auto"
                            />
                        </Link>
                        <div className="flex gap-4">
                            <Link href="/contact">
                                <ContactIcon />
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </nav>
    )
}

export default Navbar;

