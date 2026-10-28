import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#home">
          <img src={Logo} alt="Dev Stack Logo" className="h-7 w-auto" />
        </a>

        <ul className="hidden items-center gap-6 text-xs font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors hover:text-slate-900"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 text-xs font-medium md:flex">
          <a href="#signin" className="text-pink-600 hover:text-pink-700">
            Sign In
          </a>

          <a
            href="#signup"
            className="rounded-full bg-linear-to-r from-pink-500 to-violet-500 px-5 py-2 font-semibold text-white transition hover:opacity-90"
          >
            Sign Up
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-4 border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 hover:text-slate-900"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 text-xs font-semibold">
            <a
              href="#signin"
              onClick={() => setIsOpen(false)}
              className="rounded-xl border border-pink-100 bg-pink-50/50 py-2 text-center text-pink-600"
            >
              Sign In
            </a>

            <a
              href="#signup"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-linear-to-r from-pink-500 to-violet-500 py-2.5 text-center text-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
