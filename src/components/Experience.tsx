function Experience() {
  interface expereince {
    company: string;
    location: string;
    description: string;
    duration: string;
  }

  const exp: expereince = {
    company: 'Fligno Software Philippines',
    location: 'Cagayan de Oro — Software Engineer OJT',
    description:
      'Designed and Developed a blockchain web application using React JS and Algorand',
    duration: 'February - April 2023',
  };

  return (
    <div className="bg-backg text-textnani">
      <div className="mx-auto my-0 w-[85%] max-w-[1200px]">
        <div className="sm:flex">
          <div className="py-[3em]  text-textnani sm:w-[100%]">
            <h1 className="mb-[2em] font-header text-xl uppercase text-primarypo">
              Experience
            </h1>
            <h2 className="text-md text-accentpo">{exp.company}</h2>
            <p className="text-md"> {exp.location}</p>
            <p className="max-w-[40ch] text-md">{exp.description}</p>
            <p className="opacity-70">{exp.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
