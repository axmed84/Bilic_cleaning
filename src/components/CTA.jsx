import React from 'react'
import { Link } from 'react-router'
import { ArrowRight, Phone } from 'lucide-react'


const CTA = () => {

  return (

    <section className="bg-blue-700">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">


          {/* CTA Text */}

          <div className="text-center md:text-left">

            <p className="text-blue-200 font-semibold text-sm uppercase tracking-wide">
              Ready to Get Started?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Ready for a Cleaner, Better Space?
            </h2>

            <p className="text-blue-100 mt-4 max-w-2xl leading-7">
              Let Bilic Cleaning take care of your cleaning needs.
              Contact us today and get a professional cleaning
              solution designed for you.
            </p>

          </div>


          {/* CTA Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
            >
              Get a Quote

              <ArrowRight size={18} />

            </Link>


            <a
              href="tel:+252000000000"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              <Phone size={18} />

              Call Us

            </a>

          </div>

        </div>

      </div>

    </section>

  )

}

export default CTA