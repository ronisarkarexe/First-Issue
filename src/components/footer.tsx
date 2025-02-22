import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-[470px] text-white flex flex-col justify-end"
    >
      <div className="max-w-8xl mx-auto w-full px-5 pb-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <h1 className="text-[210px] font-bold leading-none bg-gradient-to-t from-slate-600 to-indigo-300 bg-clip-text text-transparent text-center">
            First Issue
          </h1>
        </motion.div>
        <div className="flex justify-between text-xs mt-5 border-t border-white/20 pt-3 text-gray-400">
          <p>Copyright © First Issue</p>
          <p>2025</p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="hover:underline"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
