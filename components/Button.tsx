import Link from 'next/link';

interface ButtonProps {
    type?: 'primary' | 'secondary';
    label: string;
    href: string;
    className?: string;
}

const Button = ({ type = "primary", label, href, className }: ButtonProps) => {

    if (type === "secondary") {
        return (
            <Link href={href} className={`block text-center py-3 bg-gray-600 text-white rounded ${className}`}>
                {label}
            </Link>
        )
    } else {
        return (
            <Link href={href} className={`block text-center py-3 bg-green-600 text-white rounded ${className}`}>
                {label}
            </Link>
        ) 
    }
}

export default Button;
