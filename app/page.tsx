import ProjectPage from '@/components/mainpage/projects-page';
import { initUser } from '@/lib/actions/userActions/initUser';
import { currentUser } from '@clerk/nextjs/server';

const Home = async () => {
  await initUser();
  const user = await currentUser();

  return (
    <main className="flex flex-col gap-10 py-16">
      {user ? <ProjectPage typeofProject="you" /> : null}
      {/* <Banner /> */}
      <ProjectPage typeofProject="all" />
    </main>
  );
};

export default Home;
