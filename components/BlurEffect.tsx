"use client"
import { MouseEvent } from "react";

interface Props {
    children: React.ReactNode,
    items?: object[];
}

const BlurEffect = ({ children, items }: Props) => {

    const handleMouse = (e: MouseEvent) => {

        const target = e.currentTarget as HTMLDivElement;

        const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

        target.style.setProperty('--mouse-x', `${ x }px`);
        target.style.setProperty('--mouse-y', `${ y }px`);
    }

    return (
        <div 
            className="
                gradient-blur bg-bkg-green w-full h-full relative
                before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:transition-opacity before:ease-in-out before:duration-400 before:delay-100 before:rounded-lg before:z-[3]
                after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-opacity after:ease-in-out after:duration-400 after:delay-100 after:rounded-lg after:z-[1]
            " 
            onMouseMove={(e: React.MouseEvent) => handleMouse(e)}
        >
            <div className="gradient-content absolute top-0 left-0 w-full h-[calc(100%-3px)] bg-bkg-green mt-[1.5px] rounded-lg z-[2]">
            </div>
            <div className="z-10 relative">
                {children}
            </div>
        </div>
    )
}

export default BlurEffect
