import type { NextPage } from "next";
import { motion } from 'framer-motion'

const About:NextPage = () => {
    return(
        <div className="mx-40">
            <motion.h1 className="py-5 text-7xl bg-gradient-to-r from-indigo-300 to-indigo-600 text-gradient underline decoration-blue-400 underline-offset-[20px] text-center" whileHover={{ scale: 1.2 }}  whileTap={{ scale: 0.9 }}>About</motion.h1>
            <h3 className="mt-20 mb-10 text-3xl text-center leading-relaxed">Partner with AvTech for a wide range of solutions for your needs. We are your strategic third-party logistics (3PL) partner and we will work tirelessly to understand your business and use our resources to provide you your optimal logistics and supply chain solutions.</h3>
        </div>
    )
}

export default About