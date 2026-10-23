import { use } from "react";
import IssueCard from "./IssueCard";
const AllIssues = ({ allIssues }) => {
  // console.log(allIssues);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-2 ">
      <div className="col-span-12 md:col-span-9">
        <h2 className="text-4xl font-extrabold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-lg mb-4">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {
            allIssues.map((issue) => 
            <IssueCard key={issue.id} issue={issue} />
        )}
        </div>

      </div>

      <div className="col-span-12 md:col-span-3">ask</div>
    </div>
  );
};

export default AllIssues;
