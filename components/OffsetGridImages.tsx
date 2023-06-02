"use client"
import { motion } from "framer-motion"

const OffsetGridImages = () => {

    const screenWidth = window.innerWidth;
    const isSmall = screenWidth < 768;

    const textVariant = isSmall ? 
        {
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
        }
        :
        {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 50 },
        }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 pb-32 lg:pt-32 sm:pb-32">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 }            
                }}
            >
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-4 grid-row-1 lg:grid-rows-[repeat(2,150px)]">
                    <div className="lg:bg-red-300 rounded-lg">
                        <img
                            alt="Harrison HydraGen Firetruck"
                            src="https://images.unsplash.com/photo-1531431199010-1f9985f83baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                            sizes="100%"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="rounded-lg lg:mt-12">
                        <img
                            alt="Harrison HydraGen Firetruck"
                            src="https://images.unsplash.com/photo-1625258110620-b213f56b9267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            sizes="100%"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="rounded-lg lg:mt-2">
                        <img
                            alt="Harrison HydraGen Firetruck"
                            src="https://img.freepik.com/premium-photo/group-cranes-music-festival_489084-46.jpg?size=626&ext=jpg&uid=P90423329&ga=GA1.2.1147737919.1683060295&semt=location_fest_v1"
                            sizes="100%"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="rounded-lg lg:mt-14">
                        <img
                            alt="Harrison HydraGen Firetruck"
                            src="https://img.freepik.com/premium-photo/industrial-machinery-working-with-asphal-industrial-laying-fresh-asphalt_73110-7943.jpg?w=1060"
                            sizes="100%"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </motion.div>
            <div className="flex flex-col justify-center items-start text-center m-auto lg:mx-0 lg:text-start lg:mt-36">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    variants={textVariant}
                >
                   <h2 className="text-xl md:text-2xl font-bold text-content-dark-1">
                        Leading the industry since 1969
                    </h2>
                    <p className="text-sm md:text-base mt-4 sm:mt-3 md:mt-2 text-content-dark-1 max-w-2xl">
                        For over five decades, Harrison HydraGen has been at the forefront of the industry, revolutionizing mobile power solutions. With our extensive experience and expertise, we have set the standard for excellence and innovation in the field.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default OffsetGridImages;
