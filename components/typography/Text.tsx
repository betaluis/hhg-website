interface TextProps {
    children: React.ReactNode;
    color?: "light" | "dark" | "none";
    classes?: string;
    bold?: boolean;
}

export const Text = ({ children, color = "light", classes, bold }: TextProps) => {
    return (
        <div className={`text-center sm:text-left text-sm sm:text-base lg:text-lg ${color === "light" ? "text-content-light" : color === "dark" ? "text-content-dark" : "" } ${classes} ${bold ? "font-bold" : ""}`}>
            {children}
        </div>
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
                <h1 className={`text-center sm:text-left text-3xl sm:text-4xl lg:text-5xl font-black ${color === "light" ? "text-content-light" : color === "dark" ? "text-content-dark" : ""} ${classes}`}>
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2 className={`
                    text-2xl md:text-2xl font-bold text-content-dark-1 
                    ${color === "light" ? "text-content-light" : "text-content-dark"}
                    ${classes}
                `}>
                    {children}
                </h2>
            );
        default:
            return null;
    }
}
