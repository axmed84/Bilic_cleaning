import React from 'react'
import { Link } from 'react-router'

import header from '../assets/Header_2.png'


const Hero = () => {

  return (

    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${header})`,
      }}
    >

      {/* Overlay */}
      <div className="min-h-screen bg-blue-950/60">

        <div className="max-w-7xl mx-auto px-6">

          <div className="min-h-screen flex items-center">

            <div className="max-w-2xl pt-20">

              {/* Small Heading */}
              <p className="text-white font-semibold text-lg mb-4">
                PROFESSIONAL CLEANING SERVICES
              </p>


              {/* Main Heading */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

                Clean Spaces.
                <br />

                Better Living.
                <br />

                Better Business.

              </h1>


              {/* Description */}
              <p className="text-white/90 text-base md:text-lg leading-7 mt-6 max-w-xl">

                Professional cleaning and facility services
                for homes, businesses, offices, hospitals,
                malls and institutions.

              </p>


              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">

                <Link
                  to="/contact"
                  className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
                >
                  Get a Quote
                </Link>


                <Link
                  to="/services"
                  className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition"
                >
                  Our Services
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default Hero
