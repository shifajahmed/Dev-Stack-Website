import { useState } from "react";
import Logo from "../assets/logo-text.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Technologies", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-4">
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

        <Link to="/" className="mx-auto md:mx-0 md:mr-auto">
          <img src={Logo} alt="Dev Stack Logo" className="h-7 w-auto" />
        </Link>

        <ul className="hidden items-center gap-6 text-xs font-medium text-slate-600 md:flex md:mx-auto">
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

        <div className="flex items-center gap-3 md:gap-5">
          <Link
            to="/signin"
            className="text-xs font-semibold text-slate-700 transition hover:text-pink-600"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-[#D91B7E] px-4 py-2 text-xs font-semibold text-white transition hover:bg-pink-700"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="space-y-3 border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 transition hover:text-slate-900"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
