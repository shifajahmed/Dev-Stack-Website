import logo from "../assets/logo-text.png";
function Footer() {
  return (
    <footer id="about" className="border-t border-slate-100 mt-4">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">

        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="Logo" />
          <p className="mt-4 max-w-xs text-xs leading-6 text-slate-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>
          <p className="mt-4 text-xs font-bold">
            GitHub · Twitter · LinkedIn
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold">PRODUCT</h4>
          <div className="flex flex-col gap-3 text-xs text-slate-500">
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold">COMPANY</h4>
          <div className="flex flex-col gap-3 text-xs text-slate-500">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold">LEGAL</h4>
          <div className="flex flex-col gap-3 text-xs text-slate-500">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 border-t border-slate-100 px-5 py-6 text-[10px] text-slate-400">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}

export default Footer;
