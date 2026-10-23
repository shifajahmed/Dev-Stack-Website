import React from "react";

const IssueCard = ({
  issue,
  completedIssues = [],
  setCompletedIssues,
}) => {
  const isSelected = completedIssues.some(
    (item) => item.id === issue.id
  );

  const handleAddToStack = () => {
    setCompletedIssues((previousIssues) => {
      const alreadyExists = previousIssues.some(
        (item) => item.id === issue.id
      );

      if (alreadyExists) {
        return previousIssues;
      }

      return [...previousIssues, issue];
    });
  };

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <div>
        <div className="mb-4 flex items-center justify-between">
          {issue.icon && (
            <img
              src={issue.icon}
              alt={issue.name || issue.title || "Technology"}
              className="h-8 w-8 object-contain"
            />
          )}

          {issue.badge && (
            <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-500">
              {issue.badge}
            </span>
          )}
        </div>

        <h3 className="mb-1 text-base font-bold text-slate-900">
          {issue.name || issue.title || "Unnamed Technology"}
        </h3>

        <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-slate-500">
          {issue.description}
        </p>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
          <span className="rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-600">
            {issue.category || "Other"}
          </span>

          <span className="whitespace-nowrap text-[11px] text-slate-500">
            {issue.difficulty || "N/A"}
          </span>

          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="text-xs text-amber-400">★</span>
            <span className="text-xs font-medium text-slate-700">
              {issue.rating ?? "N/A"}
            </span>
          </div>
        </div>

        <button
          type="button"
          disabled={isSelected}
          onClick={handleAddToStack}
          className={`w-full rounded-xl py-2.5 text-xs font-medium transition-colors ${
            isSelected
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : "bg-[#0B0F19] text-white hover:bg-slate-800"
          }`}
        >
          {isSelected ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default IssueCard;
