"use client";
 
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MenuIcon from '@/components/icons/MenuButton';
import { motion, AnimatePresence } from 'framer-motion';

type MobileLinkProps = {
    label: string;
}

const MobileLink = ({ label }: MobileLinkProps) => {
    return (
        <li className="flex items-center justify-start gap-4">
            <div className="bg-black h-[10px] w-[10px] rounded-full"></div>
            <Link href="/">{label}</Link>
        </li>
    )
}

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
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                        <div className="absolute top-[49px] left-0 w-full h_screen bg-slate-100">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                            >
                                <div className="max-w-2xl m-auto">
                                    <ul className="p-8 grid grid-cols-1 min-[360px]:grid-cols-2 gap-4">
                                        <li className="p-8 bg-gray-400 grid place-items-center rounded">Item 1</li>
                                        <li className="p-8 bg-gray-400 grid place-items-center rounded">Item 2</li>
                                        <li className="p-8 bg-gray-400 grid place-items-center rounded">Item 3</li>
                                        <li className="p-8 bg-gray-400 grid place-items-center rounded">Item 4</li>
                                    </ul>
                                    <div className="h-[2px] w-full bg-gray-200"></div>
                                    <ul className="p-8 grid grid-cols-1 min-[360px]:grid-cols-2 gap-y-8">
                                        <MobileLink label='Team'/>
                                        <MobileLink label='News'/>
                                        <MobileLink label='Media'/>
                                        <MobileLink label='About'/>
                                    </ul>
                                    <div className="h-[2px] w-full bg-gray-200"></div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default MobileMenu;
