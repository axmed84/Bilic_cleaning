import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import menu from '../assets/menu.png'
import close from '../assets/close.png'
import logo from '../assets/logo.png'

import { Send } from 'lucide-react'


const Navbar = () => {

  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)


  // Detect page scrolling
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])


  return (

    <nav
      className={`
        sticky top-0 left-0 w-full z-50
        bg-white
        transition-all duration-300
        ${isScrolled ? 'shadow-md' : 'shadow-sm'}
      `}
    >

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="h-20 md:h-[82px] flex items-center justify-between">


          {/* ================= LOGO ================= */}

                    <div>

            <Link
              to="/"
              className="flex items-center gap-3"
            >

              <img
                src={logo}
                alt="Bilic Cleaning Company"
                className="w-16 h-16 object-contain"
              />


              <div className="">

                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-950 leading-none">
                  BILIC
                </h1>

                <p className="text-sm md:text-base font-bold text-blue-800 leading-tight">
                  CLEANING COMPANY
                </p>

                <p className="text-[12px] md:text-[10px] text-slate-600 leading-tight">
                  Professional Cleaning & Facility Services
                </p>

              </div>

            </Link>

          </div>


          {/* ================= DESKTOP MENU ================= */}

          <div className="hidden md:flex items-center gap-4 lg:gap-6">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold text-sm lg:text-[25px] border-b-2 border-blue-700 pb-1'
                  : 'text-slate-700 font-semibold text-sm lg:text-[25px] hover:text-blue-700 transition'
              }
            >
              Home
            </NavLink>


            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold text-sm lg:text-[18px] border-b-2 border-blue-700 pb-1'
                  : 'text-slate-700 font-semibold text-sm lg:text-[18px] hover:text-blue-700 transition'
              }
            >
              About Us
            </NavLink>


            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold text-sm lg:text-[18px] border-b-2 border-blue-700 pb-1'
                  : 'text-slate-700 font-semibold text-sm lg:text-[18px] hover:text-blue-700 transition'
              }
            >
              Our Services
            </NavLink>


            <NavLink
              to="/why-bilic"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold text-sm lg:text-[18px] border-b-2 border-blue-700 pb-1'
                  : 'text-slate-700 font-semibold text-sm lg:text-[18px] hover:text-blue-700 transition'
              }
            >
              Why Bilic
            </NavLink>


            <NavLink
              to="/process"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold text-sm lg:text-[18px] border-b-2 border-blue-700 pb-1'
                  : 'text-slate-700 font-semibold text-sm lg:text-[18px] hover:text-blue-700 transition'
              }
            >
              Our Process
            </NavLink>


            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold text-sm lg:text-[18px] border-b-2 border-blue-700 pb-1'
                  : 'text-slate-700 font-semibold text-sm lg:text-[18px] hover:text-blue-700 transition'
              }
            >
              Contact Us
            </NavLink>

          </div>


          {/* ================= GET A QUOTE ================= */}

          <div className="hidden md:block">

            <Link
              to="/contact"
              className="
                 flex
                  items-center
                  gap-2
                  bg-blue-700
                  text-white
                  px-5
                  py-2.5
                  rounded-md
                  text-sm
                  font-semibold
                  shadow-sm
                  hover:bg-blue-800
                  hover:shadow-md
                  transition
              "
            >

              <Send size={16} />

              <span>
                Get a Quote
              </span>

            </Link>

          </div>


          {/* ================= MOBILE MENU ICON ================= */}

          <div className="md:hidden">

            <img
              src={menu}
              alt="Open menu"
              onClick={() => setOpen(true)}
              className="w-8 h-8 cursor-pointer"
            />

          </div>


          {/* ================= MOBILE MENU ================= */}

          {open && (

            <div
              className="
                fixed
                top-0
                right-0
                w-67.5
                h-screen
                bg-white
                shadow-2xl
                px-6
                py-6
              "
            >

              {/* Close button */}

              <div className="flex justify-end">

                <img
                  src={close}
                  alt="Close menu"
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 cursor-pointer"
                />

              </div>


              {/* Mobile Logo */}

              <div className="mt-5 mb-10">

                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                >

                  <img
                    src={logo}
                    alt="Bilic Cleaning Company"
                    className="w-42.5 h-auto"
                  />

                </Link>

              </div>


              {/* Mobile Links */}

              <div className="flex flex-col gap-6">

                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-semibold text-lg hover:text-blue-700"
                >
                  Home
                </NavLink>


                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-semibold text-lg hover:text-blue-700"
                >
                  About Us
                </NavLink>


                <NavLink
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-semibold text-lg hover:text-blue-700"
                >
                  Our Services
                </NavLink>


                <NavLink
                  to="/why-bilic"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-semibold text-lg hover:text-blue-700"
                >
                  Why Bilic
                </NavLink>


                <NavLink
                  to="/process"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-semibold text-lg hover:text-blue-700"
                >
                  Our Process
                </NavLink>


                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-semibold text-lg hover:text-blue-700"
                >
                  Contact Us
                </NavLink>


                {/* Mobile Quote Button */}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-blue-700
                    text-white
                    py-3
                    rounded-md
                    font-semibold
                    hover:bg-blue-800
                    transition
                  "
                >

                <Send size={18} />

                <span>
                  Get a Quote
                </span>

              </Link>

              </div>

            </div>

          )}

        </div>

      </div>

    </nav>

  )
}

export default Navbar