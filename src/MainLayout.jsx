import React, { use } from "react";

const MainLayout = ({ dataPromise }) => {
  const allIssues = use(dataPromise);
  console.log(allIssues);
  return <div></div>;
};

export default MainLayout;
