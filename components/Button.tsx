import Link from 'next/link';
import { AccentText } from './typography/Text';

interface ButtonProps {
    type?: 'primary' | 'secondary';
    label: string;
    href: string;
    className?: string;
    bold?: boolean;
}

const Button = ({ type = "primary", label, href, className, bold }: ButtonProps) => {

    if (type === "secondary") {
        return (
            <Link href={href} className={`block text-center py-3 text-white rounded cursor-pointer ${className}`}>
                <AccentText color="light" bold={bold}>
                {label}
                </AccentText>
            </Link>
        )
    } else {
        return (
            <Link href={href} className={`block text-center py-3 bg-green-600 text-white rounded hover:bg-gradient-to-b from-green-500 cursor-pointer ${className}`}>
                <AccentText color="light" bold={bold}>
                    {label}
                </AccentText>
            </Link>
        ) 
    }
}

export default Button;
