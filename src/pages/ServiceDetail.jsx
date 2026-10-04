import React from 'react'

import {
  Check,
  ArrowRight,
  Sparkles
} from 'lucide-react'

import {
  Link,
  useParams
} from 'react-router-dom'

import Navbar from '../components/navbar'
import CTA from '../components/CTA'
import Footer from '../components/footer'

import header from '../assets/Header_2.png'

import residential from '../assets/Living_room.jpg'
import commercial from '../assets/commercial.jpg'
import malls from '../assets/mall.jpg'
import healthcare from '../assets/Hospital.jpg'
import specialized from '../assets/Cleaning.png'

import services from '../Data/Service'


const images = {
  residential: residential,
  commercial: commercial,
  deep: specialized,
  postConstruction: specialized,
  windows: malls,
  floors: commercial,
  carpet: residential,
  restroom: healthcare,
  janitorial: commercial,
  customized: specialized
}


const ServiceDetail = () => {

  const { serviceId } = useParams()

  const service = services[serviceId]


  {/* ================= INVALID SERVICE ================= */}

  if (!service) {

    return (

      <div>

        <Navbar />

        <section className="min-h-[60vh] flex items-center justify-center">

          <div className="text-center px-6">

            <h1 className="text-3xl font-bold text-blue-950">
              Service Not Found
            </h1>

            <p className="text-slate-600 mt-3">
              The service you are looking for does not exist.
            </p>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 mt-6 bg-blue-700 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
            >

              Back to Services

              <ArrowRight size={17} />

            </Link>

          </div>

        </section>

        <Footer />

      </div>

    )

  }


  return (

    <div>

      <Navbar />


      {/* ================= PAGE HEADER ================= */}

      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${header})`
        }}
      >

        <div className="bg-blue-900/80">

          <div className="max-w-7xl mx-auto px-6 py-28">

            <p className="text-blue-200 font-semibold text-sm uppercase tracking-wide">
              Our Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
              {service.title}
            </h1>

            <p className="text-blue-100 mt-3">

              Home

              <span className="mx-2">
                ›
              </span>

              Services

              <span className="mx-2">
                ›
              </span>

              {service.title}

            </p>

          </div>

        </div>

      </section>



      {/* ================= INTRO ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


            {/* ================= LEFT ================= */}

<div>

  {/* Icon */}

  <div className="w-16 h-16 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">

    <Sparkles size={30} />

  </div>


  {/* Label */}

  <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mt-7">

    Professional Cleaning Service

  </p>


  {/* Title */}

  <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">

    {service.title}

  </h2>


  {/* Description */}

  {service.description && (

    <p className="text-slate-600 leading-7 mt-5">

      {service.description}

    </p>

  )}


  {/* ================= SERVICE LIST ================= */}

  {service.services && service.services.length > 0 && (

    <div className="mt-8">

      <h3 className="text-xl font-bold text-blue-950">

        Services Included

      </h3>


      <p className="text-slate-500 text-sm mt-2">

        Our professional cleaning solutions include:

      </p>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-5">

        {service.services.map((item, index) => (

          <div
            key={index}
            className="
              flex
              items-start
              gap-3
              bg-slate-50
              rounded-lg
              px-4
              py-3
              border
              border-slate-100
              hover:border-blue-200
              hover:bg-blue-50
              transition
            "
          >

            {/* Check Icon */}

            <div className="mt-0.5 shrink-0">

              <div className="
                w-5
                h-5
                rounded-full
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
              ">

                <Check size={13} />

              </div>

            </div>


            {/* Service Name */}

            <span className="text-slate-700 text-sm font-medium leading-5">

              {item}

            </span>

          </div>

        ))}

      </div>

    </div>

  )}
  </div>


            {/* ================= RIGHT ================= */}

            <div>

              <img
                src={images[serviceId]}
                alt={service.title}
                className="w-full h-90 object-cover rounded-2xl shadow-lg"
              />

            </div>

          </div>

        </div>

      </section>



      {/* ================= SERVICES INCLUDED ================= */}

      <section className="bg-blue-50 py-20">

        <div className="max-w-7xl mx-auto px-6">


          {/* Heading */}

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              What We Offer
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
              Services Included
            </h2>

            <p className="text-slate-600 mt-4 leading-7">
              Our {service.title.toLowerCase()} services can be
              customized according to your specific needs.
            </p>

          </div>



          {/* Service List */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

            {service.services.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-xl border border-blue-100 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition"
              >

                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">

                  <Check size={20} />

                </div>

                <span className="font-semibold text-slate-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= WHY CHOOSE BILIC ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
            Why Choose Bilic
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
            A Cleaning Partner You Can Trust
          </h2>

          <p className="text-slate-600 leading-7 mt-5 max-w-3xl mx-auto">
            We provide professional cleaning solutions with
            reliable service, quality results and attention to detail.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">


            <div className="border border-slate-200 rounded-xl p-6">

              <h3 className="text-lg font-bold text-blue-950">
                Professional Team
              </h3>

              <p className="text-slate-600 text-sm leading-6 mt-2">
                Trained and responsible professionals focused
                on delivering excellent service.
              </p>

            </div>


            <div className="border border-slate-200 rounded-xl p-6">

              <h3 className="text-lg font-bold text-blue-950">
                Reliable Service
              </h3>

              <p className="text-slate-600 text-sm leading-6 mt-2">
                Dependable cleaning solutions arranged around
                your schedule and requirements.
              </p>

            </div>


            <div className="border border-slate-200 rounded-xl p-6">

              <h3 className="text-lg font-bold text-blue-950">
                Quality Results
              </h3>

              <p className="text-slate-600 text-sm leading-6 mt-2">
                We pay attention to detail to ensure your space
                is clean, fresh and welcoming.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= CTA ================= */}

      <CTA />


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>

  )

}


export default ServiceDetail