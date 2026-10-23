import React from "react";

const Counter = ({ completedIssues = [] }) => {
  const count = completedIssues.length;

  if (count === 0) {
    return (
      <p className="text-xs text-slate-400">
        No technologies selected yet.
      </p>
    );
  }

  return (
    <p className="text-xs font-medium text-slate-500">
      <span className="font-bold text-slate-800">{count}</span>{" "}
      {count === 1 ? "Technology" : "Technologies"} Selected
    </p>
  );
};

export default Counter;