import Link from 'next/link';
import Image from 'next/image';
import { NavItem } from "@ts/interfaces/app_interfaces";

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
        <nav className="bg-red-50">
            <div className='_container flex-center'>
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
    )
}

export default Navbar;
