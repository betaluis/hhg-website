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
            <Link href={href} className={`block text-center py-3 text-white rounded cursor-pointer ${className}`}>
                {label}
            </Link>
        )
    } else {
        return (
            <Link href={href} className={`block text-center py-3 bg-green-600 text-white rounded hover:bg-gradient-to-b from-green-500 cursor-pointer ${className}`}>
                {label}
            </Link>
        ) 
    }
}

export default Button;
