import Navbar from './Navbar';
import profile from '../assets/gradpic.jpg';
import ResumeBtn from './ResumeBtn';
import { motion } from 'framer-motion';
function Home() {
  const description = {
    intro: `hello I am`,
    name: 'Jemuel Maglupay',
    secondary:
      'A Computer Engineering Graduate who is passionate in Software Developement',
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-backg text-textnani"
      id="home"
    >
      <Navbar />
      <div className="m-auto w-[85%] max-w-[1200px]">
        <div className="sm:flex">
          <div className="mx-0 my-auto flex flex-col justify-center gap-[1em] p-[1em] sm:w-[50%]">
            <motion.p
              animate={{ x: 0, scale: 1 }}
              initial={{ x: -500, scale: 0 }}
              transition={{ type: 'spring', duration: 0.5, delay: 0 }}
              className="font-header text-md font-medium leading-[1.25em]"
            >
              {description.intro}
            </motion.p>
            <motion.h1
              animate={{ x: 0, scale: 1 }}
              initial={{ x: -500, scale: 0 }}
              transition={{ type: 'spring', duration: 1, delay: 0.75 }}
              className="text-xl font-semibold leading-[1.25em] text-accentpo"
            >
              {description.name}
            </motion.h1>
            <motion.p
              animate={{ x: 0, scale: 1 }}
              initial={{ x: -500, scale: 0 }}
              transition={{ type: 'spring', duration: 1, delay: 1.5 }}
              className="my-2 text-md font-medium leading-[1.5em] "
            >
              {description.secondary}
            </motion.p>
            <ResumeBtn />
          </div>
          <motion.div
            animate={{ y: -5 }}
            initial={{ y: 5 }}
            transition={{
              ease: 'linear',
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-auto my-0 mt-[1em] w-[80%] max-w-[250px]  sm:mt-0  sm:w-[50%] sm:max-w-[350px]"
          >
            <img
              src={profile}
              alt="Format Image of Me"
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
