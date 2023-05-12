import { ScissorLift, FireTruck, Ambulance, Construction, OilGas, Military } from "@/components/icons/IndustryIcons";

export const leftNavItems: NavItem[] = [
    { href: "/products", label: "Products" },
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
]
