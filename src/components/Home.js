import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const buttonVariants = {
  hover: {
    scale: 1.1,
  },
  visible: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      delay: 2,
      yoyo: Infinity,
      repeatDelay: 3,
    },
  },
};

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 1 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          animate="visible"
          whileHover="hover"
          // transition={{
          //   yoyo: Infinity,
          // }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </div>
  );
};

export default Home;
