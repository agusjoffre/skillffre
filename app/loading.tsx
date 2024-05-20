import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex h-screen w-full  flex-col items-center justify-center gap-10">
      <Loader className="h-32 w-32 animate-spin duration-1000 ease-in-out" />
    </div>
  );
};

export default Loading;
