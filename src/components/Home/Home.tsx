import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <main className="grid gap-4 p-4 md:grid-cols-[220px_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  );
};

export default Home;
