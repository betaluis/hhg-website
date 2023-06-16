"use client"
import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode,
    y?: number,
    delay?: number,
    duration?: number
}

export const FadeIn = ({ children, delay = 0, duration = 1}: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: duration, delay: delay }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }            
            }}
        >{children}</motion.div>
    )
};

export const FadeUp = ({ children, y = 50, delay = 0, duration = 1}: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: duration, delay: delay }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: y }            
            }}
        >{children}</motion.div>
    )
}

export const ScaleIn = ({ children, delay = 0}: Props) => {
    return (

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: delay }}
            variants={{
                visible: { opacity: 1,scale: 1 },
                hidden: { opacity: 0, scale: 0.5 }            
            }}
        >{children}</motion.div>
    )
}
