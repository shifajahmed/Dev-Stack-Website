import React from "react";

const IssueCard = ({ issue }) => {
  return (
    <div className="w-full max-w-[280px] rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Icon and Badge */}
      <div className="mb-5 flex items-center justify-between">
        <img
          src={issue.icon}
          alt={issue.name}
          className="h-8 w-8 object-contain"
        />

        {issue.badge && (
          <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-500">
            {issue.badge}
          </span>
        )}
      </div>
      <h2 className="mb-2 text-lg font-bold text-slate-900">{issue.name}</h2>
      <p className="mb-4 text-xs leading-[19px] text-slate-500">
        {issue.description}
      </p>

      <div className="mb-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
        <span className="rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-600">
          {issue.category}
        </span>

        <span className="whitespace-nowrap text-[11px] text-slate-500">
          {issue.difficulty}
        </span>

        <div className="flex items-center gap-1 whitespace-nowrap">
          <span className="text-amber-400">★</span>
          <span className="text-xs font-medium text-slate-700">
            {issue.rating}
          </span>
        </div>
      </div>

      <button className="w-full rounded-lg bg-[#0B0F19] py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-slate-800">
        Add to Stack
      </button>
    </div>
  );
};

export default IssueCard;
