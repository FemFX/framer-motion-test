import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
const modal = {
  hidden: {
    top: "-100vh",
    opacity: 0,
  },
  visible: {
    top: "50%",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <motion.div
            variants={modal}
            initial="hidden"
            animate="visible"
            className="modal"
          >
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
