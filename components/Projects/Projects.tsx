import PageHeader from "../PageHeader/PageHeader";

interface Project {
  name: string;
  description: string;
  url?: string;
  image?: string;
  tags?: string[];
}
type Props = {
  projects?: Project[];
};

const Projects = (props: Props) => {
  return <PageHeader title="Projects" number={2} />;
};

export default Projects;
