import { use, useState } from "react";
import AllIssues from "./components/AllIsses";
import Counter from "./Counter";

const MainLayout = ({ dataPromise }) => {
  const allIssues = use(dataPromise);
  console.log(allIssues);
  const [completedIssues, setCompletedIssues] = useState([
    { name: `${allIssues.technologySelected}` },
  ]);
  return (
    <div className="container mx-auto">
      <Counter completedIssues={completedIssues} />
      <AllIssues
        allIssues={allIssues}
        completedIssues={completedIssues}
        setCompletedIssues={setCompletedIssues}
      />
    </div>
  );
};

export default MainLayout;
