"use client";
 
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { industriesNavItems } from "@/data/NavLinks";
import MenuIcon from '@/components/icons/MenuButton';


type MobileLinkProps = {
    label: string;
    icon: JSX.Element | undefined;
}

const MobileLink = ({ label, icon }: MobileLinkProps) => {
    return (
        <Link href="/">
            <li className="flex items-center justify-start gap-4">
                <div className="">
                    {icon}
                </div>
                <span>{label}</span>
            </li>
        </Link>
    )
}

const MobileNavList = () => {
    return (
        <ul className="p-8 grid grid-cols-1 min-[360px]:grid-cols-2 gap-8">
            {industriesNavItems.map((item, index) => (
                <MobileLink key={index} label={item.label} icon={item.icon} />
            ))}
        </ul>
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
                        <div className="fixed top-[49px] inset-0 overflow-y-scroll bg-slate-100">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                            >
                                <div className="max-w-2xl m-auto">
                                    <ul className="p-8 grid grid-cols-1 min-[360px]:grid-cols-2 gap-8">
                                        <li className="p-8 bg-gray-400 grid place-items-center rounded">Item 1</li>
                                        <li className="p-8 bg-gray-400 grid place-items-center rounded">Item 2</li>
                                        <li className="p-8 bg-gray-400 grid place-items-center rounded">Item 3</li>
                                        <li className="p-8 bg-gray-400 grid place-items-center rounded">Item 4</li>
                                    </ul>
                                    <div className="h-[2px] w-full bg-gray-200"></div>
                                    <MobileNavList />
                                    {/*
                                    <MobileLink label='Fire & Rescue'/>
                                    <MobileLink label='Ambulance'/>
                                    <MobileLink label='Construction'/>
                                    <MobileLink label="Oil & Gas" />
                                    <MobileLink label="Wildland" />
                                    <MobileLink label="Marine & Fishing" />
                                    <MobileLink label="Paving" />
                                    <MobileLink label="Military" />
                                    */}
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
