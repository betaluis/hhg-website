import Link from 'next/link';

interface ButtonProps {
    label: string;
    href: string;
    className?: string;
    bold?: boolean;
    textColor?: 'light' | 'dark';
    largeMobile?: boolean;
}

const Button = ({ 
    label, 
    href, 
    className, 
    textColor, 
    bold,
    largeMobile
}: ButtonProps) => {

    const buttonClass = `
        block text-center py-4
        text-white rounded cursor-pointer 
        hover:transform fancy-rotate trasition-all duration-300
        ${className} 
        `

    const textClass = `
        text-center sm:text-xl
        text-gray-200
        ${bold ? "font-bold" : ""}
        ${largeMobile ? "text-lg" : "text-sm"}
        `
    return (
        <Link href={href} className={buttonClass}>
            <span className={textClass}>
                {label}
            </span>
        </Link>
    )
}

export default Button;
