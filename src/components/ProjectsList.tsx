import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

interface props {
  details: string;
  pjLink: string;
  tools: string;
  img: string;
  text: string;
}
const ProjectsList: React.FC<props> = ({
  details,
  pjLink,
  img,
  text,
  tools,
}) => {
  return (
    <div className="mb-10 flex w-full flex-col gap-[1em] sm:flex sm:flex-row sm:items-center sm:justify-items-start sm:gap-0">
      <div className="mx-auto aspect-square max-h-[300px] max-w-[300px] rounded border-2 border-textnani sm:mx-0">
        <img
          src={img}
          alt="Project Sample Image"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mb-[1em] h-full bg-textnani py-[2em] pl-[1em] text-backg backdrop-blur sm:mb-0">
        <p className="max-w-[35ch] text-md font-semibold">{details}</p>
        <p className="opacity-60">{tools}</p>
        <div className="flex gap-2 duration-150 hover:ml-1 hover:text-primarypo">
          <a
            href={pjLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline "
          >
            {text}
          </a>
          <ArrowLongRightIcon className="h-6 w-6 " />
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
