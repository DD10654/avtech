import type { NextPage } from "next";
import { SimpleGrid } from "@mantine/core";
import { motion } from "framer-motion";


const Col:NextPage = (props) => {
    return(
        <>
        {props.children}
        </>
    )
}

const ListItem:NextPage = (props) => {
    return(
        <>{props.children}</>
    )
}

export default Col