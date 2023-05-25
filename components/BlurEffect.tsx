"use client";
import { MouseEvent } from "react";

interface Props {
    children: React.ReactNode,
}

const BlurEffect = ({ children }: Props) => {

    const handleMouse = (e: MouseEvent) => {

        const target = e.currentTarget as HTMLDivElement;

        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty('--mouse-x', `${ x }px`);
        target.style.setProperty('--mouse-y', `${ y }px`);
    }
    
  return (
    <div className="gradient-blur" onMouseMove={(e: React.MouseEvent) => handleMouse(e)}>
            <div className="effect-border"></div>
            <div className="effect-content text-white">
                {children}
            </div>
    </div>
  )
}

export default BlurEffect
