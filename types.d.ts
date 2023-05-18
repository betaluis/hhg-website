type NavItem = {
    href: string;
    label: string;
    icon?: JSX.Element;
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

