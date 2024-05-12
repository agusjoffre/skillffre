import ProjectCard from './project-card';

type Props = {
  /* typeofProject: 'you' | 'all' */
};

const ProjectPage = (props: Props) => {
  /* if typeofproject = 'all' => get all projects
    if typeofproject = 'you' => get algorithm projects */

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-baseline gap-4 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-52">
        <h1 className="text-3xl font-bold lg:text-4xl">Projects</h1>
        <span className="text-xl font-semibold lg:text-2xl">/</span>
        <span className="text-lg font-semibold lg:text-xl">for you</span>
      </div>
      <div
        className="grid justify-items-center gap-2 px-2 md:grid-cols-2 md:px-10
       lg:grid-cols-3  xl:grid-cols-4 xl:px-16 2xl:px-56"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectPage;
