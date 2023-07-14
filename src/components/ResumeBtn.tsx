import React from 'react';
import resume from '../assets/Resume.pdf';
const ResumeBtn: React.FC = () => {
  return (
    <a href={resume} download="Resume" target="_blank">
      <button
        className="w-fit rounded border border-accentpo bg-transparent px-4 py-2 font-semibold text-textnani duration-200 hover:scale-105 
      hover:border-transparent hover:bg-accentpo"
      >
        Resume
      </button>
    </a>
  );
};

export default ResumeBtn;
