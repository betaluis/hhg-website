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
    iconLayout: "col" | "row" | undefined 
}

interface GridProps {
    children: React.ReactNode,
    classes: string;
}

const Grid = ({ children, classes }: GridProps ) => {
    return (
        <div className={`p-8 md:p-0 md:py-8 grid gap-4 ${classes}`}>
            {children}
        </div>
    )
}

const MobileLinks = ({ links, iconLayout }: LinksProps) => {
    
    if (iconLayout === "col") {
        return (
            <Grid classes={"grid-cols-1 sm:grid-cols-3"}>
                {productsNavItems.map((item, index) => (
                    <Link href={item.href} key={index} className="grid place-items-center mb-8">
                        <div className="pb-4">{item.icon?.lg}</div>
                        <div className="text-center font-bold text-sm">{item.label}</div>
                    </Link>
                ))}
            </Grid>
        )
    } else if (iconLayout === "row") {
        return (
            <Grid classes={"grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}>
                {links.map((link, index) => (
                    <div key={index} className="flex items-center justify-start gap-4">
                        <Link href={link.href} className="flex items-center justify-center">
                            <div className="mr-4">
                                {link.icon?.sm}
                            </div>
                            <li className="list-none">
                                <span className="font-bold text-sm">{link.label}</span>
                            </li>
                        </Link>
                    </div>
                ))}
            </Grid>
        )
    } else {
        return (
            <Grid classes={"grid-cols-2 sm:grid-cols-2"}>
                {links.map((link, index) => (
                    <div key={index} className="flex items-center justify-start text-sm">
                        <Link  href={link.href}>
                            <li className="list-none">
                                {link.label}
                            </li>
                        </Link>
                    </div>
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
                        <div className={`fixed top-[69px] inset-0 overflow-y-scroll bg-slate-100`}>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                            >
                                <div className="max-w-2xl m-auto py-4 md:py-12">
                                    <MobileLinks links={productsNavItems} iconLayout="col" />
                                    <div className="-mt-8 px-8 pb-8 md:px-0">
                                        <Button 
                                            label="All Products"
                                            href="/products"
                                            textColor="light"
                                            className="bg-green-600 hover:bg-gradient-to-t from-green-600 to-green-500"
                                        />
                                    </div>
                                    <Divider />
                                    <MobileLinks links={industriesNavItems} iconLayout="row" />
                                    <Divider />
                                    <MobileLinks links={extraMobileNavLinks} iconLayout={undefined} />
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
