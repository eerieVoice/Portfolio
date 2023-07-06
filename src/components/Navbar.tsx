import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const nameLogo = '<Jemuel M/>';
  const Links = [
    { name: 'About', link: './About' },
    { name: 'Experience', link: './Experience' },
    { name: 'Projects', link: '' },
    // { name: 'Contact Me', link: './Contact' },
  ];
  return (
    <div className="border-b-4 border-[#141414] bg-backg">
      <nav className="mx-auto my-0 w-[85%] max-w-[1200px] items-center justify-between py-[1em] sm:flex sm:items-center">
        <h1 className="cursor-pointer whitespace-nowrap font-logo text-[1.75rem] font-semibold text-primarypo">
          {nameLogo}
        </h1>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-3 w-10 cursor-pointer sm:hidden"
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul
          className={`absolute left-0 z-[1] mt-[1em] w-full bg-backg pb-8 pl-9 text-sm font-medium text-textnani shadow-white sm:static sm:z-auto sm:mt-[0em] sm:flex sm:w-auto sm:items-center sm:gap-[1.60em] sm:bg-transparent sm:pb-0 sm:pl-0 ${
            open
              ? 'top-[3.1rem] min-h-screen text-[1.5rem] opacity-100'
              : 'top-[-400px]'
          } opacity-0 sm:opacity-100`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="mt-[1em] whitespace-nowrap uppercase duration-200 hover:scale-105 hover:text-white sm:mt-0 sm:underline-offset-8 sm:hover:underline"
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
