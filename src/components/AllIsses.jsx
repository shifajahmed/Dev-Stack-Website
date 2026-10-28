import React from "react";
import IssueCard from "./IssueCard";
import Counter from "../Counter";

const AllIssues = ({
  allIssues = [],
  completedIssues = [],
  setCompletedIssues,
}) => {
  const handleRemoveSingle = (id) => {
    setCompletedIssues((previousIssues) =>
      previousIssues.filter((item) => item.id !== id),
    );
  };

  const handleRemoveAll = () => {
    setCompletedIssues([]);
  };

  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 p-4">
      <section className="col-span-12 md:col-span-9">
        <h2 className="mb-1 text-3xl font-extrabold text-slate-900 md:text-4xl">
          Explore{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mb-6 text-sm text-slate-500 md:text-base">
          Pick technologies to build your ideal stack.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              issue={issue}
              completedIssues={completedIssues}
              setCompletedIssues={setCompletedIssues}
            />
          ))}
        </div>
      </section>

      <aside className="col-span-12 md:col-span-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="mb-1 text-xl font-bold text-slate-900">Your Stack</h2>

          <Counter completedIssues={completedIssues} />

          {completedIssues.length === 0 ? (
            <div className="mt-4 flex min-h-24 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-center">
              <p className="text-xs text-slate-400">Your stack is empty.</p>
            </div>
          ) : (
            <div className="mt-4 space-y-2">
              {completedIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 p-3"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    {issue.icon && (
                      <img
                        src={issue.icon}
                        alt={issue.name || issue.title || "Technology"}
                        className="h-6 w-6 shrink-0 object-contain"
                      />
                    )}

                    <span className="truncate text-xs font-semibold text-slate-800">
                      {issue.name || issue.title || "Unnamed Technology"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveSingle(issue.id)}
                    aria-label={`Remove ${issue.name || issue.title || "technology"}`}
                    className="shrink-0 text-sm font-bold text-slate-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {completedIssues.length > 0 && (
            <button
              type="button"
              onClick={handleRemoveAll}
              className="mt-4 w-full rounded-xl border border-red-200 py-2.5 text-xs font-bold text-red-500 transition-colors hover:bg-red-50"
            >
              Remove All
            </button>
          )}
        </div>
      </aside>
    </div>
  );
};

export default AllIssues;
