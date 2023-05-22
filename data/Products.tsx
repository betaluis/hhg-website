interface Product {
    href: string;
    label: string;
    image: {
        src: string;
        alt: string;
        scale?: "small" | "smaller" | "large" | "larger";
    };
}

const Products = [
    {
        href: "/products/hydraulic-generator",
        label: "Hydraulic Generator",
        image: {
            src: "/products/MAS.png",
            alt: "Hydraulic Generator",
            width: 200,
            height: 200,
            scale: "large",
        }
    },
    {
        href: "/products/battery-power",
        label: "Battery Power",
        image: {
            src: "/products/hPowerBattery.png",
            alt: "Battery Power Solution",
            width: 200,
            height: 200,
            scale: "small",
        }
    },
    {
        href: "/products/belt-driven-generator",
        label: "Belt Driven",
        image: {
            src: "/products/Belt-Driven.png",
            alt: "Belt Driven Generator",
            width: 200,
            height: 200,
            scale: "smaller",
        }
    },
    {
        href: "/products/other-components",
        label: "Other Components",
        image: {
            src: "/products/other-components.png",
            alt: "Other Components",
            width: 200,
            height: 200,
            scale: "small",
        }
    },
];

export default Products;


