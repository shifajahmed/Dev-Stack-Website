import Image from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-5 py-16">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="text-center text-3xl font-bold leading-tight sm:text-left sm:text-4xl md:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-6 text-gray-500 md:mx-0 md:text-left">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 sm:mt-8 sm:gap-3 md:justify-start">
            <a
              href="#technologies"
              className="flex-1 rounded-lg bg-linear-to-r from-[#FF5722] to-[#E83E8C] px-2 py-2.5 text-center text-[10px] font-semibold text-white transition hover:opacity-90 sm:flex-none sm:px-5 sm:py-3 sm:text-xs"
            >
              Explore Technologies
            </a>

            <a
              href="#learn-more"
              className="flex-1 rounded-lg border border-gray-200 px-2 py-2.5 text-center text-[10px] font-medium text-gray-600 transition hover:bg-gray-50 sm:flex-none sm:px-6 sm:py-3 sm:text-xs"
            >
              Learn More
            </a>
          </div>
        </div>

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
