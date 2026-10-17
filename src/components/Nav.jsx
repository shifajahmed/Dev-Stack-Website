import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
    <>
      <nav className=" bg-[#FFFFFF]">
        <div className="container mx-auto flex justify-between mt-6 p-4 ">
          <img src={Logo} alt="Logo" />

        <ul className="flex items-center gap-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#Technologies">Technologies</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

       {/* <div>
      <button className="btn ">Sign In</button>
      <button className="btn bg-[#D91B7E] rounded-3xl text-white">Sign Up</button>
       </div> */}
       <div className="flex items-center gap-4 text-xs">
          <a href="#signin" className="text-slate-600">Sign In</a>
          <a href="#signup" className="rounded-full bg-pink-600 px-4 py-2.5 text-white hover:bg-pink-700">
            Sign Up
          </a>
        </div>
        </div>
      </nav>

    </>
  );
};

export default Nav;
