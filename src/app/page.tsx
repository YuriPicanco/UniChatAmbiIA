import Chat from "@/components/Chat";

const Home = () => {
  return (
    <div className="border border-{red-500} min-h-screen border border-slate-300">
      <div className="flex min-h-screen bg-slate-500 items-center justify-start pl-5 border">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
