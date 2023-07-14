import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link as HashLink } from 'react-scroll';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [fix, setFix] = useState<boolean>(false);

  const setFixed = (): void => {
    if (window.scrollY >= 75) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener('scroll', setFixed);
  const nameLogo = '<Jemuel M/>';
  const Links = [
    { name: 'About', link: 'about' },
    { name: 'Experience', link: 'experience' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact Me', link: 'contact' },
  ];
  return (
    <div
      className={`bg-backg  ${
        fix
          ? 'fixed left-[50%] z-20 w-screen translate-x-[-50%] bg-opacity-80 ease-linear'
          : 'static'
      }`}
    >
      <nav
        className={`mx-auto my-0 w-[85%] max-w-[1200px] items-center justify-between bg-backg py-[1em] sm:flex sm:items-center sm:bg-opacity-80`}
      >
        <h1 className="cursor-pointer whitespace-nowrap font-logo text-[1.75rem] font-semibold text-primarypo">
          <HashLink to="home" smooth={true} duration={500}>
            {nameLogo}
          </HashLink>
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
              ? 'top-[3.1rem] min-h-screen text-[1.5rem] text-primarypo opacity-100 sm:min-h-0'
              : 'top-[-400px]'
          } opacity-0 sm:opacity-100`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="mt-[1em] whitespace-nowrap uppercase duration-200 hover:scale-105 hover:cursor-pointer hover:text-white  sm:mt-0 sm:underline-offset-8 sm:hover:underline"
            >
              <HashLink
                spy={true}
                to={link.link}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
