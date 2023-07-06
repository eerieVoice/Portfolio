import ProjectsList from './ProjectsList';
import dashboard from '../assets/dashboard.png';
import tictactoe from '../assets/tictactoe.png';
function Projects() {
  const projectDetails = {
    pjOne: {
      details:
        ' Design and Developed A Computer Vision Based Monitoring System with Admin website for Evaluation',
      pjLink:
        'https://drive.google.com/file/d/1Qk6Zj9a1plh9ppHVKDxF3z1FH5AAApSo/view?usp=sharing',
      tools: 'HTML/CSS Javascipt Firebase PHP Python Keras',
      img: dashboard,
      text: 'Video Demo',
    },
    pjTwo: {
      details:
        ' Created and built a web application that utilizes blockchain technology, specifically using React JS and Algorand.',
      pjLink: 'https://algorandtictactoe.vercel.app/',
      tools: 'ReactJS Alogorand-Pyteal',
      img: tictactoe,
      text: ' App Link (Need Pera Wallet Account)',
    },
  };

  return (
    <div className="bg-backg text-textnani">
      <div className="mx-auto my-0 w-[85%] max-w-[1200px] py-[5em]">
        <h1 className="mb-[2em] font-header text-xl uppercase text-primarypo">
          Projects
        </h1>
        <div className="">
          <ProjectsList {...projectDetails.pjOne} />
          <ProjectsList {...projectDetails.pjTwo} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
