const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-2 rounded-3xl bg-muted p-14">
        <h3 className="text-3xl font-bold lg:text-6xl">Ooops...</h3>
        <h1 className="text-9xl font-black text-destructive dark:text-red-500 lg:text-[15rem]">404</h1>
        <h2 className="text-3xl font-bold lg:text-6xl">Page not found</h2>
      </div>
    </div>
  );
};

export default NotFound;
