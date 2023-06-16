"use client";
import { useState, KeyboardEvent, useEffect } from "react";

interface Props {
    type: "small" | "pill";
}

const changeTheme = () => {
    const root = document.querySelector("[data-theme]") as HTMLElement;
    const theme = root.getAttribute("data-theme");
    if (theme === "dark") {
        root.setAttribute("data-theme", "light");
    } else if (theme === "light") {
        root.setAttribute("data-theme", "dark");
    } else {
        root.setAttribute("data-theme", "dark");
    }
}

const PowerButton = ({ type = "pill" }: Props) => {

    const [isOn, setIsOn] = useState(true);

    const handleClick = () => {
        setIsOn(!isOn);
        changeTheme();
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setIsOn(!isOn);
            changeTheme();
        }
    
    }

    if (type === "small") {
        return (
            <div 
                className="cursor-pointer focus:outline-green-600" 
                onClick={handleClick} 
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                <svg className="fill-content-dark-1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 32 32" id="power-button"><path d="M13.2141 11.7292C13.6007 12.1236 13.5944 12.7568 13.2 13.1434C12.4583 13.8705 12 14.8808 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 14.8808 19.5416 13.8706 18.7996 13.1435C18.4052 12.7569 18.3989 12.1238 18.7854 11.7293C19.172 11.3349 19.8051 11.3285 20.1996 11.7151C21.3094 12.8028 22 14.3215 22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 14.3218 10.6903 12.803 11.8 11.7152C12.1943 11.3286 12.8275 11.3349 13.2141 11.7292Z"></path><path d="M17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11V13C15 13.5523 15.4477 14 16 14C16.5523 14 17 13.5523 17 13V11Z"></path><path fillRule="evenodd" d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z" clipRule="evenodd"></path></svg>
            </div>
        )
    } else {

        return (
            <div
                tabIndex={0}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                className="
                    relative bg-green-600 inline-block w-20 h-8 rounded-full cursor-pointer
                    shadow-[inset_3px_3px_4px_0_rgba(21,128,61,1),inset_0px_0px_1px_0_rgba(0,0,0,0.4)]"
            >
                <div
                    className={`
                        absolute h-6 w-6 rounded-full top-1/2 right-0
                        -translate-y-1/2 transition-transform ease-in-out duration-300
                        z-10 shadow-[2px_2px_2px_0_rgba(21,128,61,1),0px_0px_4px_0_rgba(0,0,0,0.25)]
                        ${isOn ? "bg-green-600 translate-x-[-5px]" : "bg-gray-200 -translate-x-[52px]"}
                    `}
                ></div>
                <div
                    className={`
                        absolute top-[3px]
                        transition-all text-lg font-bold duration-300 text-white
                        ${isOn ? "opacity-0 right-[6px]" : "opacity-100 right-[12px]"}
                    `}
                >
                    OFF
                </div>
                <div
                    className={`
                        absolute top-[3px] 
                        text-lg font-bold transition-all duration-300 text-white
                        ${isOn ? "opacity-100 left-[14px]" : "opacity-0 left-[8px]"}
                    `}
                >
                    ON
                </div>
            </div>
        )
    }

}

export default PowerButton
