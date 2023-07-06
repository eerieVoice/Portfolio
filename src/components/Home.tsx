import Navbar from './Navbar';
import profile from '../assets/FormalPortrait.jpg';

function Home() {
  const description = {
    intro: `Hello i'm Jemuel Maglupay`,
    secondary:
      'A Computer Engineering Graduate who is passionate in Software Developement',
  };

  return (
    <div className="bg-backg text-textnani">
      <Navbar />
      <div className="mx-auto my-0 w-[85%] max-w-[1200px] pb-[3em] sm:pb-[5em] sm:pt-[4em]">
        <div className="sm:flex">
          <div className="mx-0 my-auto justify-center p-[1em] sm:w-[50%]">
            <h1 className=" text-xl font-medium leading-[1.25em]">
              {description.intro}
            </h1>

            <p className="my-2 text-md font-medium leading-[1.5em] ">
              {description.secondary}
            </p>

            <button className="rounded border border-accentpo bg-transparent px-4 py-2 font-semibold text-textnani duration-200 hover:scale-105 hover:border-transparent hover:bg-accentpo">
              Resume
            </button>
          </div>
          <div className="mx-auto my-0 mt-[1em] w-[80%] max-w-[250px]  sm:mt-0  sm:w-[50%] sm:max-w-[350px]">
            <img
              src={profile}
              alt="Format Image of Me"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
