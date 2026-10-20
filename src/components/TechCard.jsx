
function TechCard({ tech, selected, onAdd }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-purple-500">
          {tech.icon}
        </span>

        <span className="rounded-full bg-pink-50 px-2.5 py-1 text-[10px] text-pink-600">
          {tech.tag}
        </span>
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-800">
        {tech.name}
      </h3>

      <p className="mt-2 flex-1 text-[11px] leading-5 text-slate-500">
        {tech.description}
      </p>

      <div className="my-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[9px] text-slate-500">
        <span className="rounded bg-slate-100 px-2 py-1">
          {tech.category}
        </span>
        <span>{tech.level}</span>
        <span className="font-semibold text-amber-500">
          ★ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        className={`w-full rounded-md py-2.5 text-[10px] transition ${
          selected
            ? "bg-emerald-50 text-emerald-700"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {selected ? "Added ✓" : "Add to Stack"}
      </button>

    </article>
  );
}

export default TechCard;