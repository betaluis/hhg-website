interface TextProps {
    children: React.ReactNode;
    color?: "light" | "dark";
}

export const Text = ({ children, color = "light" }: TextProps) => {
    return (
        <p className={`text-center sm:text-left text-sm sm:text-base lg:text-lg ${color === "light" ? "text-slate-100" : "text-slate-900"}`}>
            {children}
        </p>
    )
}

interface HeadingProps extends TextProps{
    size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
// TODO: Create the rest
export const Heading = ({ children, size,  color = "light" }: HeadingProps) => {
    switch (size) {
        case "h1":
            return ( 
                <h1 className={`text-center sm:text-left text-2xl sm:text-3xl lg:text-4xl font-bold ${color === "light" ? "text-slate-100" : "text-slate-900"}`}>
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2 className={`text-center sm:text-left text-xl sm:text-2xl lg:text-3xl font-bold ${color === "light" ? "text-slate-100" : "text-slate-900"}`}>
                    {children}
                </h2>
            );
        default:
            return null;
    }
}
