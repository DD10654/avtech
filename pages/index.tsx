

import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Carousel from 'framer-motion-carousel'

const colors = ["#f90", "#ef0", "#e0f"]

const Home: NextPage = () => {
  return (
    <div>
    <Carousel autoPlay interval={10000} loop>
        {colors.map((item, i) => (
            <div
                key={i}
                style={{
                    width: "100%",
                    height: "90vh",
                    backgroundColor: colors[i],
                    fontSize: 50
                }}
                // TODO REMOVE SITE IN PROGRESS
            ><br />__SITE IN PROGRESS</div>
        ))}
    </Carousel>
    </div>
  )
}

export default Home
