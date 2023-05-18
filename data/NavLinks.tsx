import { ScissorLift, FireTruck, Ambulance, Construction, OilGas, Military } from "@/components/icons/IndustryIcons";
import { BatteryIcon, BeltDrivenIcon, GeneratorIcon } from "@/components/icons/ProductIcons";

export const productsSubLinks: NavItem[] = [
    { href: "/hydraulic-generators", label: "Hydraulic Generator" },
    { href: "/battery-power", label: "Battery Power" },
    { href: "/belt-driven", label: "Belt Driven" },
]

export const leftNavItems: NavItem[] = [
    { href: "/products", label: "Products", sublist: productsSubLinks },
    { href: "/news", label: "News" },
    { href: "/about", label: "About" },
];

export const rightNavItems: NavItem[] = [
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
];

export const industriesNavItems: NavItem[] = [
    { href: "/mewp", label: "MEWP", icon: <ScissorLift /> },
    { href: "/fire-and-rescue", label: "Fire & Rescue", icon: <FireTruck /> },
    { href: "/ambulance", label: "Ambulance", icon: <Ambulance /> },
    { href: "/construction", label: "Construction", icon: <Construction /> },
    { href: "/oilGas", label: "Oil & Gas", icon: <OilGas /> },
    { href: "/military", label: "Military", icon: <Military /> },
];

export const productsNavItems: NavItem[] = [
    { href: "/hydraulic-generators", label: "Hydraulic Generator", icon: <GeneratorIcon /> },
    { href: "/battery-power", label: "Battery Power", icon: <BatteryIcon /> },
    { href: "/belt-driven", label: "Belt Driven", icon: <BeltDrivenIcon /> },
];

export const extraMobileNavLinks: NavItem[] = [
    { href: "/news", label: "News" },
    { href: "/team", label: "Team" },
    { href: "/about", label: "About" },
];

