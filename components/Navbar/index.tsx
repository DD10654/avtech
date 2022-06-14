import type { NextPage } from "next";
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'

const Navbar: NextPage = () => {
    return (
        <>
            <Head>
                <title>AvTech Info Services</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-[100%] h-[8vh] drop-shadow-2xl shadow-cyan-500/50 border-b-4 border-blue-300 bg-slate-500 flex justify-evenly">
                    <motion.h1 className="text-center text-6xl bg-gradient-to-r from-blue-200 via-sky-800 to-blue-200 text-gradient self-center cursor-default" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>AvTech</motion.h1>
                    <motion.h1 className="NavItems" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}><Link href="/">Home</Link></motion.h1>
                    <motion.h1 className="NavItems" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}><Link href="/shippers">Shippers</Link></motion.h1>
                    <motion.h1 className="NavItems" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}><Link href="/about">About</Link></motion.h1>
                    <motion.h1 className="NavItems" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}><Link href="/carriers">Carriers</Link></motion.h1>
            </div>
        </>
    )
}

export default Navbar