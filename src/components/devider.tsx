"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionDevider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      className="bg-gray-200 my-24 h-16 w-1 rounded-full"
    ></motion.div>
  );
};

export default SectionDevider;
