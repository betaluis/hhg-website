"use client";
 
import React, { useState, useEffect } from 'react';
import MenuIcon from '@/components/icons/MenuButton';
import { motion, AnimatePresence } from 'framer-motion';

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
                        <div className="absolute top-[49px] left-0 w-full h_screen bg-blue-100">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                            >
                                <div className="pt-40">hello</div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default MobileMenu;
