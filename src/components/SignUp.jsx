
import { useState } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner-stack.png";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign Up button clicked!");
  };

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-20 lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-pink-50 px-3 py-1.5 text-sm font-medium text-pink-600">
            <span>▤</span>
            Your next great project starts here
          </div>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Great ideas deserve
            <br />
            <span className="bg-linear-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              the right stack.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
            Sign in to save your favorite technologies, compare your options,
            and pick up where you left off.
          </p>

          <div className="my-7 flex justify-center md:justify-start">
            <img
              src={BannerImage}
              alt="Development Stack"
              className="w-64 object-contain md:w-95"
            />
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 border-t border-gray-100 pt-5 text-xs text-slate-500">
            <span>
              <b className="mr-2 text-pink-500">✓</b>
              Save your stacks
            </span>
            <span>
              <b className="mr-2 text-pink-500">✓</b>
              Compare technologies
            </span>
            <span>
              <b className="mr-2 text-pink-500">✓</b>
              Build with confidence
            </span>
          </div>
        </div>

        <div className="w-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Welcome back
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to your Dev Stack account.
          </p>

          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 py-3 text-sm font-semibold text-slate-800 transition hover:bg-gray-50"
          >
            <span className="text-xl">◉</span>
            Continue with GitHub
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-xs text-slate-400">
              or sign in with email
            </span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Email address
              </label>

              <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 transition focus-within:border-pink-500">
                <span className="text-lg text-slate-400">✉</span>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="w-full py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Password
              </label>

              <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 transition focus-within:border-pink-500">
                <span className="text-lg text-slate-400">♙</span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                  className="w-full py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-lg text-slate-500"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? "◉" : "◎"}
                </button>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-500">
                <input
                  type="checkbox"
                  className="accent-pink-600"
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="font-semibold text-pink-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-pink-600 py-3 text-sm font-semibold text-white shadow-md shadow-pink-100 transition hover:bg-pink-700"
            >
              Sign In <span className="text-lg">→</span>
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            New to Dev Stack?{" "}
            <Link
              to="/signup"
              className="font-semibold text-pink-600 hover:underline"
            >
              Create an account
            </Link>
          </p>

          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            By signing in, you agree to our{" "}
            <span className="text-slate-600">Terms of Service</span>
            <br />
            and <span className="text-slate-600">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
