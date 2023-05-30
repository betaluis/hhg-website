"use client";

const PowerButton = () => {

    const handleClick = () => {
        const root = document.querySelector("[data-theme]") as HTMLElement;
        const theme = root.getAttribute("data-theme");
        if (theme === "dark") {
            root.setAttribute("data-theme", "light");
        } else {
            root.setAttribute("data-theme", "dark");
        }
    }

    return (
        <div className="rounded-full power-button cursor-pointer"
            onClick={handleClick}
        >
            <div className="power-button_inner"></div>
        </div>
    )
}

export default PowerButton
