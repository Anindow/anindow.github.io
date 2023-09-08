import { useState } from "react"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import Link from "next/link"

const Nav = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="py-10 content-center flex justify-between dark:text-white sticky top-0 z-50 bg-white dark:bg-slate-900 ">
      <span className="font-burtons text-xl hover:text-red-500">
        <Link href="/">Sai</Link>{" "}
      </span>
      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-xl focus:outline-none "
        onClick={handleMenuToggle}
      >
        <a
          className={
            isMenuOpen
              ? `bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md`
              : ``
          }
        >
          ☰
        </a>
      </button>
      {/* Mobile Menu Slider */}
      <div
        className={`fixed top-0 right-0 h-screen w-56 bg-teal-50  dark:bg-slate-900 transform transition-transform duration-300 ease-in-out shadow-xl ${
          isMenuOpen
            ? "translate-x-0 shadow-cyan-600 dark:shadow-teal-600 "
            : "translate-x-full"
        } sm:hidden`}
      >
        <ul className="font-medium text-2xl flex flex-col gap-4 py-10 px-6 mt-20 ">
          <li className="shadow-md dark:shadow-sm bg-cyan-50 p-4 rounded-sm dark:bg-slate-800 dark:shadow-teal-600">
            About
            <span className="text-teal-600 font-semibold dark:text-teal-400">
              -Saikat
            </span>
          </li>
          <li className="shadow-md dark:shadow-sm bg-cyan-50 p-4 rounded-sm dark:bg-slate-800 dark:shadow-teal-600">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="shadow-md dark:shadow-sm bg-cyan-50 p-4 rounded-sm dark:bg-slate-800 dark:shadow-teal-500">
            <Link href="/work">Work</Link>
          </li>
        </ul>
      </div>
      <ul className="font-medium text-xl  gap-4 hidden sm:flex">
        <li>
          About
          <span className="text-teal-600 font-semibold dark:text-teal-400">
            -Saikat
          </span>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
      </ul>
      <ul className="flex items-center">
        <li>
          {!darkMode ? (
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          ) : (
            <BsFillSunFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          )}
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
