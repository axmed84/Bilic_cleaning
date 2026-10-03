import React from 'react'
import { Link } from 'react-router-dom'

import {
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'

import logo from '../assets/LOGO.png'


const Footer = () => {

  return (

    <footer className="bg-blue-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* Company */}

          <div>

            <Link to="/">

              <img
                src={logo}
                alt="Bilic Cleaning Company"
                className="w-48 h-auto"
              />

            </Link>


            <p className="text-slate-300 text-sm leading-6 mt-5 max-w-xs">
              Clean Spaces. Better Living. Better Business.
            </p>


            {/* Social Media */}

            <div className="flex items-center gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF size={17} />
              </a>


              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaInstagram size={18} />
              </a>


              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedinIn size={17} />
              </a>

            </div>

          </div>



          {/* Our Services */}

          <div>

            <h3 className="text-lg font-bold">
              Our Services
            </h3>

            <div className="w-10 h-1 bg-blue-500 mt-3 mb-5"></div>

            <div className="flex flex-col gap-3">

              <Link
                to="/services/residential"
                className="text-slate-300 hover:text-white transition"
              >
                Residential Cleaning
              </Link>

              <Link
                to="/services/commercial"
                className="text-slate-300 hover:text-white transition"
              >
                Commercial & Office Cleaning
              </Link>

              <Link
                to="/services/malls"
                className="text-slate-300 hover:text-white transition"
              >
                Malls & Public Facilities
              </Link>

              <Link
                to="/services/healthcare"
                className="text-slate-300 hover:text-white transition"
              >
                Healthcare & Institutional
              </Link>

              <Link
                to="/services/specialized"
                className="text-slate-300 hover:text-white transition"
              >
                Specialized & Facility Services
              </Link>

            </div>

          </div>



          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <div className="w-10 h-1 bg-blue-500 mt-3 mb-5"></div>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-slate-300 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-slate-300 hover:text-white transition"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="text-slate-300 hover:text-white transition"
              >
                Our Services
              </Link>

              <Link
                to="/why-bilic"
                className="text-slate-300 hover:text-white transition"
              >
                Why Bilic
              </Link>

              <Link
                to="/contact"
                className="text-slate-300 hover:text-white transition"
              >
                Contact Us
              </Link>

            </div>

          </div>



          {/* Contact */}

          <div>

            <h3 className="text-lg font-bold">
              Contact Us
            </h3>

            <div className="w-10 h-1 bg-blue-500 mt-3 mb-5"></div>


            {/* Location */}

            <div className="flex items-start gap-3 mb-5">

              <MapPin
                size={20}
                className="text-blue-400 mt-1 shrink-0"
              />

              <p className="text-slate-300">
                Mogadishu, Somalia
              </p>

            </div>


            {/* Phone */}

            <div className="flex items-center gap-3 mb-5">

              <Phone
                size={20}
                className="text-blue-400 shrink-0"
              />

              <p className="text-slate-300">
                +252 XX XXX XXXX
              </p>

            </div>


            {/* WhatsApp */}

            <div className="flex items-center gap-3 mb-5">

              <Phone
                size={20}
                className="text-blue-400 shrink-0"
              />

              <p className="text-slate-300">
                WhatsApp
              </p>

            </div>


            {/* Email */}

            <div className="flex items-center gap-3">

              <Mail
                size={20}
                className="text-blue-400 shrink-0"
              />

              <p className="text-slate-300">
                info@biliccleaning.com
              </p>

            </div>

          </div>

        </div>



        {/* Bottom */}

        <div className="border-t border-blue-800 mt-12 pt-6">

          <p className="text-slate-400 text-sm text-center">
            © 2026 Bilic Cleaning Company. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>

  )

}


export default Footer