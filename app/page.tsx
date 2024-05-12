import ProjectPage from '@/components/mainpage/projects-page';
import { initUser } from '@/lib/actions/userActions/initUser';

const Home = async () => {
  await initUser();

  return (
    <main className="flex flex-col gap-10 py-16">
      <ProjectPage />
    </main>
  );
};

export default Home;
