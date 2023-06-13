"use client"
import { motion } from "framer-motion"
import useScreenWidth from "../hooks/useScreenWidth"
import { Heading, SubText } from "./typography/Text";

const OffsetGridImages = () => {

    const screenWidth = useScreenWidth();

    if (screenWidth === null) {
        return null;
    }

    const variants = {
        hidden: { x: screenWidth > 768 ? -50 : 0, y: screenWidth <= 768 ? 50 : 0, opacity: 0 },
        visible: { x: 0, y: 0, opacity: 1 }
    };

    return (
        <div className="
                grid grid-cols-1 gap-8 pt-4 
                lg:grid-cols-2 lg:pt-32 lg:pb-32
            "
        >
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
                {/* TODO: Review images before production */}
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
            <div className="
                row-start-1 mt-4 flex flex-col justify-center items-start m-auto 
                sm:text-center
                md:row-start-2
                lg:row-start-1 lg:mx-0 lg:text-start lg:mt-36"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    variants={variants}
                >
                    <Heading size="h2" color="dark">
                        Leading the industry since 1969
                    </Heading>
                    <SubText color="dark">
                        For over five decades, Harrison HydraGen has been at the forefront of the industry, revolutionizing mobile power solutions. With our extensive experience and expertise, we have set the standard for excellence and innovation in the field.
                    </SubText>
                </motion.div>
            </div>
        </div>
    )
}

export default OffsetGridImages;
