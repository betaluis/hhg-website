import { ScissorLift, FireTruck, Ambulance, Construction, OilGas, Military } from "@/components/icons/IndustryIcons";
import { BatteryIcon, BeltDrivenIcon, GeneratorIcon } from "@/components/icons/ProductIcons";

export const industriesNavItems: NavItem[] = [
    { 
        href: "/mewp",
        label: "MEWP",
        icon: {
            sm: <ScissorLift size="sm" />,
            lg: <ScissorLift size="lg" />
        }
    },
    { 
        href: "/fire-and-rescue",
        label: "Fire & Rescue",
        icon: {
            sm: <FireTruck size="sm" />,
            lg: <FireTruck size="lg" />
        },
    },
    { 
        href: "/ambulance",
        label: "Ambulance",
        icon: {
            sm: <Ambulance size="sm" />,
            lg: <Ambulance size="lg" />
        },
    },
    { 
        href: "/construction",
        label: "Construction",
        icon: {
            sm: <Construction size="sm" />,
            lg: <Construction size="lg" />,
        },
    },
    { 
        href: "/oilGas",
        label: "Oil & Gas",
        icon: {
            sm: <OilGas size="sm" />,
            lg: <OilGas size="lg" />
        },
    },
    { 
        href: "/military",
        label: "Military",
        icon: {
            sm: <Military size="sm" />,
            lg: <Military size="lg" />
        },
    }
];

export const productsNavItems: NavItem[] = [
    { 
        href: "/hydraulic-generators", 
        label: "Hydraulic Generator", 
        icon: { 
            sm: <GeneratorIcon size={"sm"} />, 
            lg: <GeneratorIcon size={"lg"} /> } 
    },
    { 
        href: "/battery-power",
        label: "Battery Power",
        icon: {
            sm: <BatteryIcon size="sm" />,
            lg: <BatteryIcon size="lg" />
        }
    },
    { 
        href: "/belt-driven", 
        label: "Belt Driven", 
        icon: {
            sm: <BeltDrivenIcon size="sm" />,
            lg: <BeltDrivenIcon size="lg" />
        }
    }
];

export const extraMobileNavLinks: NavItem[] = [
    { href: "/news", label: "News" },
    { href: "/team", label: "Team" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export const leftNavItems: NavItem[] = [
    { href: "/products", label: "Products", sublist: productsNavItems },
    { href: "/news", label: "News" },
    { href: "/about", label: "About" },
];

export const rightNavItems: NavItem[] = [
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
];

