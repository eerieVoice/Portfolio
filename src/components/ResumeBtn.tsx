import React from 'react';
import resume from '../assets/Resume.pdf';
import { motion } from 'framer-motion';
const ResumeBtn: React.FC = () => {
  return (
    <motion.a
      animate={{ x: 0, scale: 1 }}
      initial={{ x: -500, scale: 0 }}
      transition={{ type: 'spring', duration: 0.5, delay: 1.75 }}
      href={resume}
      download="Resume"
      target="_blank"
    >
      <button
        className="w-fit rounded border border-accentpo bg-transparent px-4 py-2 font-semibold text-textnani duration-200 hover:scale-105 
      hover:border-transparent hover:bg-accentpo"
      >
        Resume
      </button>
    </motion.a>
  );
};

export default ResumeBtn;
