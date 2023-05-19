interface TextProps {
    children: React.ReactNode;
    color?: "light" | "dark";
    classes?: string;
    bold?: boolean;
}

export const Text = ({ children, color = "light", classes, bold }: TextProps) => {
    return (
        <p className={`text-center sm:text-left text-sm sm:text-base lg:text-lg ${color === "light" ? "text-slate-100" : "text-slate-900"} ${classes} ${bold ? "font-bold" : ""}`}>
            {children}
        </p>
    )
}

export const AccentText = ({ children, color = "light", classes, bold }: TextProps) => {
    return (
        <p className={`text-center sm:text-base lg:text-lg ${color === "light" ? "text-slate-100" : "text-slate-900"} ${classes} ${bold ? "font-bold" : ""}`}>
            {children}
        </p>
    )
}

interface HeadingProps extends TextProps{
    size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
// TODO: Create the rest
export const Heading = ({ children, size,  color = "light", classes }: HeadingProps) => {
    switch (size) {
        case "h1":
            return ( 
                <h1 className={`text-center sm:text-left text-3xl sm:text-4xl lg:text-5xl font-black ${color === "light" ? "text-slate-100" : "text-slate-900"} ${classes}`}>
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2 className={`text-center sm:text-left text-xl sm:text-2xl lg:text-3xl font-bold ${color === "light" ? "text-slate-100" : "text-slate-900"} ${classes}`}>
                    {children}
                </h2>
            );
        default:
            return null;
    }
}
