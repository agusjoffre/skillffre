import ProjectPageCard from '@/components/projectpage/project-page-card';

const Project = ({ params }: { params: { id: string } }) => {
  /* getOneProject(params.id) */

  return <ProjectPageCard />;
};

export default Project;
