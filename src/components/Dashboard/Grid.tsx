import Chart from "./Chart";
import StartCards from "./StartCards";
import Table from "./Table";

const Grid = () => {
  return (
    <div className="px-4 mt-3">
      <StartCards />
      <Chart />
      <Table/>
    </div>
  );
};

export default Grid;
