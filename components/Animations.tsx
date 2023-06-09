"use client"
import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode,
}

export const FadeUp = ({ children }: Props) => {
  return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }            
            }}
        >{children}</motion.div>
  )
}

