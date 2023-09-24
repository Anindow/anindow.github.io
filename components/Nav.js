import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link as ScrollLink, Element } from "react-scroll"
import Link from "next/link";

const Nav = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`lg:pt-10 lg:pb-2 py-2 content-center flex justify-between sticky top-0 z-50 lg:px-64 md:px-10 sm:px-10 px-8 " ${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      
      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-xl focus:outline-none ms-4"
        onClick={handleMenuToggle}
      >
        <a
          className={
            isMenuOpen
              ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md "
              : ""
          }
        >
          Ξ
        </a>
      </button>
      <span className="font-burtons font-bold text-2xl hover:text-red-500">
        <Link href="/">Sai</Link>
      </span>
      {/* Mobile Menu Slider */}
      <div
        className={`fixed top-0 right-0 h-screen w-56 ${
          darkMode ? "bg-slate-900" : "bg-blue-50" // Conditionally set background color
        } dark:bg-slate-900 transform transition-transform duration-300 ease-in-out shadow-xl ${
          isMenuOpen
            ? "translate-x-0 shadow-cyan-600 dark:shadow-teal-600 "
            : "translate-x-full"
        } sm:hidden`}
      >
        <ul className="font-medium text-2xl flex flex-col gap-4 py-10 px-6 mt-20">
          <li className={` shadow-md  ${darkMode ? 'bg-slate-800 shadow-md shadow-teal-400' : 'bg-cyan-50'} p-4 rounded-sm`}>
          <a  onClick={handleMenuToggle} href="#about">
              About
           
            <span className="text-teal-600 font-semibold dark:text-teal-400">
              -Saikat
            </span> </a>
          </li>
          <li className={` shadow-md  ${darkMode ? 'bg-slate-800 shadow-md shadow-teal-400' : 'bg-cyan-50'} p-4 rounded-sm`}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={` shadow-md  ${darkMode ? 'bg-slate-800 shadow-md shadow-teal-400' : 'bg-cyan-50'} p-4 rounded-sm`}>
            <a onClick={handleMenuToggle} href="#work">
              Work
            </a>
          </li>
        </ul>
      </div>
      <ul className="font-medium text-xl gap-4 hidden sm:flex">
        {/* <li>
          About
          <span className="text-teal-600 font-semibold dark:text-teal-400">
            -Saikat
          </span>
        </li> */}
        <li>
  <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
    About<span className="text-teal-600 font-semibold dark:text-teal-400">
            -Saikat
          </span>
  </ScrollLink>
</li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
        <ScrollLink to="work" smooth={true} duration={500} className="cursor-pointer "> 
            Work
          </ScrollLink>
        </li>
      </ul>
      <ul className="flex items-center">
        <li>
          {!darkMode ? (
            <BsFillMoonStarsFill
            title="Go on!!___
            Click _ ___
            Unlock the DARKness"
            className={`cursor-pointer text-2xl  ${
              darkMode
                ? "" 
                : " hover:text-teal-900  hover:scale-150"
            }`}
              onClick={() => setDarkMode(!darkMode)}
              
            />
          ) : (
            <BsFillSunFill 
  onClick={() => setDarkMode(!darkMode)}
  title="Looks like u r gonna be 💡"
  className={`cursor-pointer text-2xl  ${
    darkMode
      ? "hover:text-red-500 hover:animate-spin hover:scale-150" 
      : " "
  }`}
/>

          )}
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 shadow-md"
            href="/anindow-saikat(resume).pdf"
          title="CLICK HERE TO DOWNLOAD 😁"
            download
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
