import React from 'react'

import {
  Phone,
  FileText,
  Sparkles,
  CheckCircle
} from 'lucide-react'

import gadgets from '../assets/gadgets.jpg'


const Processcm = () => {

  return (

    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${gadgets})`,
      }}
    >

      {/* Blue Gradient Overlay */}

      <div className="bg-linear-to-r from-blue-950/95 via-blue-800/90 to-blue-700/80">

        <div className="max-w-7xl mx-auto px-6 py-20">


          {/* Section Heading */}

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-blue-200 font-semibold text-sm uppercase tracking-wide">
              Our Process
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Simple, Professional & Reliable
            </h2>

            <p className="text-blue-100 mt-4 leading-7">
              From your first contact to the final cleaning,
              we make the process simple and convenient.
            </p>

          </div>


          {/* Process Steps */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">


            {/* Step 01 */}

            <div className="text-center">

              <div className="relative inline-flex">

                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-700">

                  <Phone size={32} />

                </div>

                <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  01
                </span>

              </div>


              <h3 className="text-xl font-bold text-white mt-6">
                Contact Us
              </h3>

              <p className="text-blue-100 mt-3 leading-6">
                Contact our team and tell us about your
                cleaning or facility service needs.
              </p>

            </div>


            {/* Step 02 */}

            <div className="text-center">

              <div className="relative inline-flex">

                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-700">

                  <FileText size={32} />

                </div>

                <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  02
                </span>

              </div>


              <h3 className="text-xl font-bold text-white mt-6">
                Get a Quote
              </h3>

              <p className="text-blue-100 mt-3 leading-6">
                We understand your requirements and provide
                a clear and suitable service quotation.
              </p>

            </div>


            {/* Step 03 */}

            <div className="text-center">

              <div className="relative inline-flex">

                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-700">

                  <Sparkles size={32} />

                </div>

                <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  03
                </span>

              </div>


              <h3 className="text-xl font-bold text-white mt-6">
                We Clean
              </h3>

              <p className="text-blue-100 mt-3 leading-6">
                Our professional team arrives on schedule
                and delivers high-quality cleaning services.
              </p>

            </div>


            {/* Step 04 */}

            <div className="text-center">

              <div className="relative inline-flex">

                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-700">

                  <CheckCircle size={32} />

                </div>

                <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  04
                </span>

              </div>


              <h3 className="text-xl font-bold text-white mt-6">
                Enjoy Your Space
              </h3>

              <p className="text-blue-100 mt-3 leading-6">
                Enjoy a cleaner, healthier and more
                comfortable environment.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default Processcm