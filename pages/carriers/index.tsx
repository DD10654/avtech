import type { NextPage } from "next";
import { motion } from 'framer-motion'
import { CircleCheck as Check } from 'tabler-icons-react';

const Carriers:NextPage = () => {
    return(
        <div className="mx-40">
            <motion.h1 className="py-5 text-7xl bg-gradient-to-r from-indigo-300 to-indigo-600 text-gradient underline decoration-blue-400 underline-offset-[20px] text-center" whileHover={{ scale: 1.2 }}  whileTap={{ scale: 0.9 }}>Carriers</motion.h1>
            <h3 className="mt-20 mb-10 text-3xl text-center leading-relaxed">Become a partner with AvTech - after you join our family, we will work to provide the right load and pave the way for your success.</h3>
            <h1 className="mb-10 text-center text-4xl font-semibold">Advantages of joining AvTech:</h1>
            <div className="text-center w-full">
                <ol className="w-fit m-auto">
                    <li className="flex text-2xl"><Check size={40} strokeWidth={2} color={'#4072bf'} /><p className="mt-[4px]">Quick pay programs</p></li>
                    <li className="flex text-2xl"><Check size={40} strokeWidth={2} color={'#4072bf'} /><p className="mt-[4px]">Discounted fuel cards</p></li>
                    <li className="flex text-2xl"><Check size={40} strokeWidth={2} color={'#4072bf'} /><p className="mt-[4px]">Loads across all platforms</p></li>
                    <li className="flex text-2xl"><Check size={40} strokeWidth={2} color={'#4072bf'} /><p className="mt-[4px]">Single point of contact</p></li>
                    <li className="flex text-2xl"><Check size={40} strokeWidth={2} color={'#4072bf'} /><p className="mt-[4px]">Around the clock dispatch service</p></li>
                </ol>
            </div>
          </div>
    )
}

export default Carriers