
import Image from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-5 py-16">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="rounded-md bg-gradient-to-r from-[#FF5722] to-[#E83E8C] px-4 py-3 text-xs font-semibold text-white transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#learn-more"
              className="rounded-md border border-gray-200 px-6 py-3 text-xs text-gray-600 transition hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <img
            src={Image}
            alt="Development technology illustration"
            className="w-64 object-contain md:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
