import React from 'react'

import {
  ShieldCheck,
  Users,
  BadgeCheck,
  Clock,
  Sparkles,
  Headphones
} from 'lucide-react'


const Why_bilic = () => {

  return (

    <section className="py-20 bg-blue-200">

      <div className="max-w-7xl mx-auto px-6">


        {/* Section Heading */}

        <div className="text-center max-w-2xl mx-auto">

          <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
            Why Choose Bilic
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Cleaning You Can Trust
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            We are committed to providing professional, reliable
            and high-quality cleaning services that make every
            space cleaner, healthier and more welcoming.
          </p>

        </div>


        {/* Why Bilic Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">


          {/* Professional Team */}

          <div className="text-center p-6">

            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">

              <Users size={30} />

            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-5">
              Professional Team
            </h3>

            <p className="text-slate-600 mt-3 leading-6">
              Our trained and dedicated cleaning professionals
              deliver consistent and dependable service.
            </p>

          </div>


          {/* Quality Service */}

          <div className="text-center p-6">

            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">

              <BadgeCheck size={30} />

            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-5">
              Quality Results
            </h3>

            <p className="text-slate-600 mt-3 leading-6">
              We maintain high standards and pay attention
              to every detail of our cleaning work.
            </p>

          </div>


          {/* Reliable */}

          <div className="text-center p-6">

            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">

              <ShieldCheck size={30} />

            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-5">
              Reliable & Trusted
            </h3>

            <p className="text-slate-600 mt-3 leading-6">
              You can depend on Bilic to provide reliable
              service whenever you need us.
            </p>

          </div>


          {/* Flexible Service */}

          <div className="text-center p-6">

            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">

              <Clock size={30} />

            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-5">
              Flexible Schedules
            </h3>

            <p className="text-slate-600 mt-3 leading-6">
              We provide flexible cleaning schedules designed
              around your specific needs.
            </p>

          </div>



          {/* Customer Focus */}

          <div className="text-center p-6">

            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">

              <Headphones size={30} />

            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-5">
              Customer Focused
            </h3>

            <p className="text-slate-600 mt-3 leading-6">
              Your satisfaction is important to us, and we
              always aim to deliver excellent customer service.
            </p>

          </div>

        </div>

      </div>

    </section>

  )

}

export default Why_bilic