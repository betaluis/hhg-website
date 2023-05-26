type NavItem = {
    href: string;
    label: string;
    icon?: { sm: JSX.Element, lg: JSX.Element };
    sublist?: NavItem[];
    image?: ImageType;
}

type Icon = {
    height?: number;
    width?: number;
}

type ImageType = {
    src: string;
    alt: string;
}
type Product = {
    href: string;
    label: string;
    image: {
        src: string;
        alt: string;
        scale?: "small" | "smaller" | "large" | "larger";
        width: number;
        height: number;
    };
}
