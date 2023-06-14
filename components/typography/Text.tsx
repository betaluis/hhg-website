interface TextProps {
    children: React.ReactNode;
    color: "light" | "dark" | "none";
    classes?: string;
    bold?: boolean;
}

interface HeadingProps extends TextProps{
    size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Text = ({ children, color = "light", classes, bold }: TextProps) => {
    return (
        <p
            className={`
                text-sm mt-4 max-w-2xl
                sm:mt-3 
                md:text-sm md:mt-2 
                ${color === "light" ? "text-content-light-1" : "text-content-dark-1"}
                ${bold ? "font-bold" : ""}
                ${classes}
            `}
        >
            {children}
        </p>

    )
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
                    text-xl md:text-2xl font-bold
                    ${color === "light" ? "text-content-light-1" : "text-content-dark-1"}
                    ${classes}
                `}>
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h2 className={`
                    text-md md:text-lg font-bold
                    ${color === "light" ? "text-content-light-1" : "text-content-dark-1"}
                    ${classes}
                `}>
                    {children}
                </h2>
            );
        default:
            return null;
    }
}

export const SubText = ({ children, color, bold = false, classes }: TextProps) => {
    return (
        <p
            className={`
                text-sm mt-4 max-w-2xl
                sm:mt-3 
                md:text-base md:mt-2 
                ${color === "light" ? "text-content-light-1" : "text-content-dark-1"}
                ${bold ? "font-bold" : ""}
                ${classes}
            `}
        >
            {children}
        </p>
    )
}

