import { use } from "react";
import AllIssues from "./components/AllIsses";

const MainLayout = ({ dataPromise }) => {
  const allIssues = use(dataPromise);
  console.log(allIssues);
  return (
    <div className="container mx-auto">
      <AllIssues allIssues={allIssues} />
    </div>
  );
};

export default MainLayout;
