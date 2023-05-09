"use client";
 
import React, { useState, useEffect } from 'react';
import MenuIcon from '@/components/icons/MenuButton';

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <div onClick={() => setIsOpen(prev => !prev)}>
                <MenuIcon isOpen={isOpen} />
            </div>
            {isOpen && (
                <div className="absolute top-[49px] left-0 w-full h_screen bg-blue-100">
                    hello
                </div>
            )}
        </>
    )
}

export default MobileMenu;
