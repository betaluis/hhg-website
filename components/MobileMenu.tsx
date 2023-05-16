"use client";
 
import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { extraMobileNavLinks, industriesNavItems, productsNavItems } from "@/data/NavLinks";
import MenuIcon from '@/components/icons/MenuButton';
import Button from '@/components/Button';
import Divider from './Divider';

interface LinksProps {
    links: NavItem[]; 
    colsInMobile: 1 | 2 | 3; 
    iconLayout: "col" | "row" | undefined 
    cols: 1 | 2 | 3;
}

const Grid = ({ children, cols, colsInMobile }: { children: React.ReactNode, cols: number, colsInMobile: number }) => {
    return (
        <div className={`p-8 grid grid-cols-${colsInMobile} min-[360px]:grid-cols-${cols} gap-4`}>
            {children}
        </div>
    )
}

const MobileLinks = ({ links, colsInMobile, cols, iconLayout }: LinksProps) => {
    
    if (iconLayout === "col") {
        return (
            <Grid cols={cols} colsInMobile={colsInMobile}>
                {productsNavItems.map((item, index) => (
                    <Link href={item.href} key={index} className="grid place-items-center mb-8">
                        <div className="pb-4">{item.icon}</div>
                        <div className="text-center font-bold text-sm">{item.label}</div>
                    </Link>
                ))}
            </Grid>
        )
    } else if (iconLayout === "row") {
        return (
            <Grid cols={cols} colsInMobile={colsInMobile}>
                {links.map((link, index) => (
                    <Link key={index} href={link.href}>
                        <li className="flex items-center justify-start gap-4">
                            <div className="">
                                {link.icon}
                            </div>
                            <span className="font-bold text-sm">{link.label}</span>
                        </li>
                    </Link>
                ))}
            </Grid>
        )
    } else {
        return (
            <Grid cols={cols} colsInMobile={colsInMobile}>
                {links.map((link, index) => (
                    <Link key={index} href={link.href}>
                        <li className="flex items-center justify-start gap-4 text-sm">
                            {link.label}
                        </li>
                    </Link>
                ))}
            </Grid>
        )
    }
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
                        <div className="fixed top-[69px] inset-0 overflow-y-scroll bg-slate-100">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                            >
                                <div className="max-w-2xl m-auto py-4 md:py-12">
                                    <MobileLinks links={productsNavItems} colsInMobile={2} cols={3} iconLayout="col" />
                                    <div className="px-8 pb-8 md:px-0">
                                        <Button 
                                            label="All Products"
                                            href="/products"
                                        />
                                    </div>
                                    <Divider />
                                    <MobileLinks links={industriesNavItems} colsInMobile={1} cols={2} iconLayout="row" />
                                    <Divider />
                                    <MobileLinks links={extraMobileNavLinks} colsInMobile={3} cols={3} iconLayout={undefined} />
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
