import type { NextPage } from "next";
import Link from "next/link";
import Col from "./col";
import { SimpleGrid } from "@mantine/core";
import { motion } from "framer-motion";

const Footer: NextPage = () => {
    return (
        <>
            <div className="custom-shape-divider-bottom-1646385105 mt-5">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="bg-slate-100 pb-10">
                <Col><SimpleGrid cols={3} spacing="sm">
                    <ListItem><motion.h1 className="text-center text-6xl bg-gradient-to-r from-blue-200 via-sky-800 to-blue-200 text-gradient self-center cursor-default" whileHover={{ scale: 1.2 }}>AvTech</motion.h1></ListItem>
                    <ListItem><motion.h1 className="text-center text-5xl bg-gradient-to-r from-cyan-200 to-sky-800 text-gradient self-center cursor-default" whileHover={{ scale: 1.2 }}>Quick Links</motion.h1></ListItem>
                    <ListItem><motion.h1 className="text-center text-5xl bg-gradient-to-r from-cyan-200 to-sky-800 text-gradient self-center cursor-default" whileHover={{ scale: 1.2 }}>Contact Info</motion.h1></ListItem>
                    <ListItem><h2 className="ListItems px-2">Our Goal at AvTech is to assist you with you logistics Issues</h2></ListItem>
                    a{/* <ListItem><h2 className="ListItems mb-5 mt-0">
                        <Link href="/shippers">Shippers</Link>
                    </h2></ListItem> */}
                    <ListItem><h2 className="ListItems">Facebook</h2></ListItem>
                    <ListItem><div className="opacity-0">hello</div></ListItem>
                    a{/* <ListItem><h2 className="ListItems mb-5 mt-0">
                        <Link href="/about">About</Link>
                    </h2></ListItem> */}
                    <ListItem><h2 className="ListItems">Instagram</h2></ListItem>
                    <ListItem><div className="opacity-0">hello</div></ListItem>
                    a{/* <ListItem><h2 className="ListItems mb-5 mt-0">
                        <Link href="/carriers">Carriers</Link>
                    </h2></ListItem> */}
                    <ListItem><h2 className="ListItems">LinkedIn</h2></ListItem>

                </SimpleGrid></Col>
            </div>
        </>
    )
}

const ListItem: NextPage = (props) => {
    return (
        <>{props.children}</>
    )
}

export default Footer