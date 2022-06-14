import type { NextPage } from "next";
import { motion } from 'framer-motion'
import Carousel from 'framer-motion-carousel'
import { SimpleGrid } from "@mantine/core";

const colors = ["#f90", "#ef0", "#e0f"]

const Shippers:NextPage = () => {
    return(
        <div>
            <Carousel autoPlay interval={10000} loop>
                {colors.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            width: "100%",
                            height: "90vh",
                            backgroundColor: colors[i],
                        }}
                    ><br /></div>
                ))}
            </Carousel>
            <div className="mx-72">
                <motion.h1 className="py-5 text-7xl bg-gradient-to-r from-indigo-300 to-indigo-600 text-gradient underline decoration-blue-400 underline-offset-[20px] text-center" whileHover={{ scale: 1.2 }}  whileTap={{ scale: 0.9 }}>Shippers</motion.h1>
                <h3 className="mt-20 mb-10 text-3xl text-center leading-relaxed">Partner with AvTech for a wide range of solutions for your needs. We are your strategic third-party logistics (3PL) partner and we will work tirelessly to understand your business and use our resources to provide you your optimal logistics and supply chain solutions.</h3>
                <h1 className="mb-10 text-center text-4xl font-bold">Services We Offer</h1>
                <SimpleGrid cols={2}>
                        <SimpleGrid cols={2}>
                            <h2 className="aspect-square">this is <br />where the <br />image will <br />go</h2>
                            <div>
                                <h1 className="text-2xl font-bold">Trucking</h1>
                                <p>Description</p>
                            </div>
                        </SimpleGrid>
                        <SimpleGrid cols={2}>
                            <h2 className="aspect-square">this is <br />where the <br />image will <br />go</h2>
                            <div>
                                <h1 className="text-2xl font-bold">Trucking</h1>
                                <p>Description</p>
                            </div>
                        </SimpleGrid>
                        <SimpleGrid cols={2}>
                            <h2 className="aspect-square">this is <br />where the <br />image will <br />go</h2>
                            <div>
                                <h1 className="text-2xl font-bold">Trucking</h1>
                                <p>Description</p>
                            </div>
                        </SimpleGrid>
                        <SimpleGrid cols={2}>
                            <h2 className="aspect-square">this is <br />where the <br />image will <br />go</h2>
                            <div>
                                <h1 className="text-2xl font-bold">Trucking</h1>
                                <p>Description</p>
                            </div>
                        </SimpleGrid>
                </SimpleGrid>
            </div>
        </div>
    )
}

export default Shippers