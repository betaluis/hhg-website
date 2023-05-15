"use client";
 
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { industriesNavItems, productsNavItems } from "@/data/NavLinks";
import MenuIcon from '@/components/icons/MenuButton';
import Button from '@/components/Button';
import Divider from './Divider';


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

const MobileIndustries = () => {
    return (
        <ul className="p-8 grid grid-cols-1 min-[360px]:grid-cols-2 gap-8">
            {industriesNavItems.map((item, index) => (
                <MobileLink key={index} label={item.label} icon={item.icon} />
            ))}
        </ul>
    )
}

const MobileProductList = () => {
    return (
        <ul className="p-8 grid grid-cols-2 min-[360px]:grid-cols-3 gap-x-4 gap-y-8">
            {productsNavItems.map((item, index) => (
                <Link href={item.href} key={index} className="grid place-items-center">
                    <div className="pb-4">{item.icon}</div>
                    <div className="text-center">{item.label}</div>
                </Link>
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
                                <div className="max-w-2xl m-auto py-4 md:py-12">
                                    <MobileProductList />
                                    <div className="px-8 pb-8 md:px-0">
                                        <Button 
                                            label="All Products"
                                            href="/products"
                                        />
                                    </div>
                                    <Divider />
                                    <MobileIndustries />
                                    <Divider />
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
